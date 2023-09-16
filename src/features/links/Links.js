import * as React from "react";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import CardHeader from "../../components/CardHeader/CardHeader";
import LinkInput from "../../components/CardInput/Link/Link";
import Select from "../../components/CardInput/Select/Select";
import { ReactComponent as DraggIcon } from "../../assets/icons/draggble.svg";
import { ReactComponent as PlusIcon } from "../../assets/icons/plus.svg";
import { useDispatch, useSelector } from "react-redux";
import { showModal } from "../../data/slices/modals";
import { useState } from "react";
import { removeUserLink } from "../../data/slices/user";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
export default function Links() {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.user);
    const UserLinks = user?.links;
    const [selectedOption, setSelectedOption] = useState("GitHub");
    return (React.createElement("div", { className: "Card__content Links" },
        React.createElement(CardHeader, { title: "Customize your links", subtitle: "Add , edit and remove links below and then share all your profiles with the world!" }),
        React.createElement("div", { className: "Links__button", onClick: () => dispatch(showModal()) },
            React.createElement(PlusIcon, null),
            React.createElement("p", null, "Add new link")),
        React.createElement("div", { className: "Links__Container" },
            React.createElement(DndProvider, { backend: HTML5Backend }, UserLinks.map((link, i) => (React.createElement("div", { className: "Links__linkContainer" },
                React.createElement("div", { className: "Links__linkContainer__headerblock" },
                    React.createElement("p", { className: "Links__linkContainer__title" },
                        React.createElement(DraggIcon, null),
                        "Link #",
                        i + 1),
                    React.createElement("p", { className: "remove", onClick: () => dispatch(removeUserLink(link.origin)) }, "Remove")),
                React.createElement(LinkInput, { label: "link", value: link.url }),
                React.createElement(Select, { selectedOption: link.origin, setSelectedOption: setSelectedOption }))))))));
}
