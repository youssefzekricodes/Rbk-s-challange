import * as React from "react";
import { useState } from "react";
export default function TextInput({ label, value, name, onChange, onBlur, error, }) {
    const [activeInput, setActiveInput] = useState(false);
    return (React.createElement("div", { className: "TextInput" },
        React.createElement("p", { className: "TextInput__label" }, label),
        React.createElement("input", { type: "text", className: `${activeInput ? "input--active" : ""}`, value: value, name: name, onChange: onChange, onBlur: () => {
                setActiveInput(false);
                onBlur;
            }, onFocus: () => setActiveInput(true) }),
        React.createElement("p", null, error)));
}
