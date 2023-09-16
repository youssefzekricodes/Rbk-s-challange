import { NavLink } from "react-router-dom";
import { PATH } from "../../Routes/paths.routes";
import { ReactComponent as Arrow } from "../../assets/icons/arrow.svg";
import { ReactComponent as GitHub } from "../../assets/icons/github.svg";
import { ReactComponent as Youtube } from "../../assets/icons/youtube.svg";
import { ReactComponent as LinkedIn } from "../../assets/icons/linkdn.svg";
import { useSelector } from "react-redux";
import * as React from "react";
export default function Preview() {
    const { user } = useSelector((state) => state.user);
    return (React.createElement("div", { className: "Preview" },
        React.createElement("div", { className: "Preview__header" },
            React.createElement("div", { className: "Preview__header__nav" },
                React.createElement(NavLink, { to: PATH.LINKS, className: "Header__preview" },
                    React.createElement("p", null, " Back to Editor")),
                React.createElement(NavLink, { to: "", className: "Header__preview shareBtn" },
                    React.createElement("p", null, " Share Link")))),
        React.createElement("div", { className: "Preview__content" },
            React.createElement("div", { className: `Side__avatar ${user.avatar !== "" ? "" : "emptyavatar"}` }, user.avatar ? React.createElement("img", { src: user.avatar, alt: "" }) : null),
            React.createElement("div", { className: "Side__Cordinate" },
                React.createElement("p", null, user.firstName + "  " + user.lastName),
                React.createElement("p", null, user.email)),
            React.createElement("div", { className: "Side__links" }, user.links.map((link) => (React.createElement("a", { className: `Side__links__link ${link.origin}`, href: link.url, target: "_blank" },
                React.createElement("div", { className: "Side__links__link__type" },
                    link.origin === "GitHub" ? (React.createElement(GitHub, null)) : link.origin === "LinkedIn" ? (React.createElement(LinkedIn, null)) : (React.createElement(Youtube, null)),
                    link.origin),
                React.createElement(Arrow, null))))))));
}
