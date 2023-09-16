import * as React from "react";
import { useState } from "react";
import CardHeader from "../../components/CardHeader/CardHeader";
import TextInput from "../../components/CardInput/Text/TextInput";
import { ReactComponent as UploadIcon } from "../../assets/icons/upload.svg";
import { useDispatch, useSelector } from "react-redux";
import { updateUserInformations } from "../../data/slices/user";
import { useFormik } from "formik";
import * as Yup from "yup";
export default function () {
    const { user } = useSelector((state) => state.user);
    const [uploadedImg, setUploadedImg] = useState(user.avatar);
    const [ImgBlur, setImgBlur] = useState(false);
    const dispatch = useDispatch();
    const handleFileUpload = (event) => {
        const file = event.target.files?.[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            const uploadedImageUrl = e.target?.result;
            setUploadedImg(uploadedImageUrl);
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    };
    const schema = Yup.object().shape({
        firstName: Yup.string()
            .min(2, "too short !  ")
            .required("firstName not match"),
        lastName: Yup.string()
            .min(2, "too short !  ")
            .required("firstName not match"),
        email: Yup.string().email().required("email not valid"),
    });
    const [selectedOption, setSelectedOption] = useState("GitHub");
    const formik = useFormik({
        initialValues: {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
        },
        onSubmit: async (values) => {
            console.log(values, selectedOption, "values");
            const newValues = {
                ...values,
                avatar: uploadedImg,
            };
            dispatch(updateUserInformations(newValues));
        },
        validationSchema: schema,
    });
    const handleSubmit = (event) => {
        event.preventDefault();
        formik.handleSubmit();
    };
    return (React.createElement("div", { className: "Card__content Profile" },
        React.createElement(CardHeader, { title: "Profile Details", subtitle: "Add your details to create a personell touch to your profile" }),
        React.createElement("div", { className: "Profile__Element ImgPart" },
            React.createElement("p", null, "Profile picture"),
            React.createElement("div", { className: "Profile__Element__ImgPicker", onMouseEnter: () => setImgBlur(true), onMouseLeave: () => setImgBlur(false) },
                uploadedImg ? React.createElement("img", { src: uploadedImg, alt: "" }) : null,
                !uploadedImg || ImgBlur ? (React.createElement("div", { className: "Profile__Element__ImgPicker__blur" },
                    React.createElement(UploadIcon, null),
                    React.createElement("p", null, "Change image"))) : null,
                React.createElement("input", { type: "file", onChange: handleFileUpload, accept: "image/png, image/gif, image/jpeg" })),
            React.createElement("p", null,
                "Image must be below 1024 * 1024px ",
                React.createElement("br", null),
                " UsePng,JPG or Bmp format")),
        React.createElement("form", { onSubmit: handleSubmit },
            React.createElement("div", { className: "Profile__Element" },
                React.createElement(TextInput, { label: "First name", value: formik.values.firstName, name: "firstName", onChange: formik.handleChange, onBlur: formik.handelBlur, error: formik.touched.firstName && formik.errors.firstName }),
                React.createElement(TextInput, { label: "Last name", value: formik.values.lastName, name: "lastName", onChange: formik.handleChange, onBlur: formik.handelBlur, error: undefined }),
                React.createElement(TextInput, { label: "Email", value: formik.values.email, name: "email", onChange: formik.handleChange, onBlur: formik.handelBlur, error: undefined })),
            React.createElement("div", { className: "Profile__Btn" },
                React.createElement("button", { type: "submit", className: "Profile__SaveBtn" }, "Save")))));
}
