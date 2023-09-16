import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import LinkInput from "../../../../components/CardInput/Link/Link";
import Select from "../../../../components/CardInput/Select/Select";
import { hideModal } from "../../../../data/slices/modals";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { addUserLink } from "../../../../data/slices/user";
import { ReactComponent as ErrorIcon } from "../../../../assets/icons/error.svg";
export default function AddLinkPopUp() {
    const dispatch = useDispatch();
    const schema = Yup.object().shape({
        url: Yup.string().min(2, "too short !  ").required("link"),
    });
    const [selectedOption, setSelectedOption] = useState("GitHub");
    const [errorMessage, setErrorMessage] = useState("");
    const { user } = useSelector((state) => state.user);
    const formik = useFormik({
        initialValues: {
            url: "",
        },
        onSubmit: async (values) => {
            console.log(values, selectedOption, "values");
            const links = user.links.filter((ele) => ele.origin === selectedOption);
            if (links.length === 0) {
                dispatch(addUserLink({ url: values.url, origin: selectedOption })).then(dispatch(hideModal()));
            }
            else {
                setErrorMessage("Link already added");
                setTimeout(() => setErrorMessage(""), 2000);
            }
        },
        validationSchema: schema,
    });
    const handleSubmit = (event) => {
        event.preventDefault();
        formik.handleSubmit();
    };
    return (React.createElement("div", { className: "ModalContainer" },
        React.createElement("div", { className: "ModalContainer__Background", onClick: () => dispatch(hideModal()) }),
        React.createElement("div", { className: "ModalContainer__popUp" },
            React.createElement("form", { onSubmit: handleSubmit },
                React.createElement("p", { className: "ModalContainer__popUp__title" }, "Add new link"),
                errorMessage && (React.createElement("div", { className: "ModalContainer__popUp__errors" },
                    React.createElement(ErrorIcon, null),
                    " ",
                    errorMessage)),
                React.createElement(LinkInput, { label: "link", value: formik.values.url, error: formik.touched.url && formik.errors.url, name: "url", onChange: formik.handleChange, onBlur: formik.handelBlur }),
                React.createElement(Select, { selectedOption: selectedOption, setSelectedOption: setSelectedOption }),
                React.createElement("div", { className: "ModalContainer__popUp__buttons" },
                    React.createElement("button", { className: "ModalContainer__popUp__buttons__btn cancel", onClick: () => dispatch(hideModal()), type: "reset" }, "Cancel"),
                    React.createElement("button", { className: "ModalContainer__popUp__buttons__btn save", type: "submit" }, "Save"))))));
}
