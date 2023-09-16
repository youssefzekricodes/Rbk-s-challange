import * as React from "react";
import { useState } from "react";
import { ReactComponent as DownArrow } from "../../../assets/icons/downarrow.svg";
import { ReactComponent as Github } from "../../../assets/icons/github.svg";
import { ReactComponent as Youtube } from "../../../assets/icons/youtube.svg";
import { ReactComponent as Linkdn } from "../../../assets/icons/linkdn.svg";
function SelectOption({ Icon, name, setSelectedOption, setShowSelect, }) {
    return (React.createElement("div", { className: "Select__Options__option", onClick: () => {
            setSelectedOption(name);
            setShowSelect(false);
        } },
        Icon,
        React.createElement("p", null, name)));
}
export default function Select({ selectedOption, setSelectedOption, }) {
    const Options = [
        { icon: React.createElement(Github, null), name: "GitHub" },
        { icon: React.createElement(Youtube, null), name: "Youtube" },
        { icon: React.createElement(Linkdn, null), name: "LinkedIn" },
    ];
    const [showSelect, setShowSelect] = useState(false);
    return (React.createElement("div", { className: "Select" },
        React.createElement("p", { className: "Select__label" }, "Platform"),
        React.createElement("div", { className: "Select__selectedOption", onClick: () => setShowSelect(!showSelect) },
            React.createElement("div", { className: "Select__selectedOption__content" },
                Options.filter((ele) => ele.name === selectedOption)[0].icon,
                React.createElement("p", null, selectedOption)),
            React.createElement(DownArrow, { className: "Arrow" })),
        showSelect ? (React.createElement("div", { className: "Select__Options" }, Options.map((option) => (React.createElement(SelectOption, { Icon: option.icon, name: option.name, setSelectedOption: setSelectedOption, setShowSelect: setShowSelect }))))) : null));
}
