import * as React from "react";
import { ReactComponent as LinkIcon } from "../../../assets/icons/link.svg";
export default function LinkInput({ label, name, onChange, onBlur, value, error, }) {
    // console.log(error, "error");
    return (React.createElement("div", { className: "LinkInput" },
        React.createElement("p", { className: "LinkInput__label" }, label),
        React.createElement("div", { className: "LinkInput__input" },
            React.createElement(LinkIcon, null),
            React.createElement("input", { type: "url", name: name, value: value, onChange: onChange, onBlur: onBlur }))));
}
