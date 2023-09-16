import React from "react";
import { NavLink } from "react-router-dom";
import { PATH } from "../../../Routes/paths.routes";
import { ReactComponent as LinkIcon } from "../../../assets/icons/link.svg";
import { ReactComponent as LinkLogoIcon } from "../../../assets/icons/linkLogo.svg";
import { ReactComponent as ProfileIcon } from "../../../assets/icons/profile.svg";
import { useWindowSize } from "@uidotdev/usehooks";
export default function Header() {
    const { width } = useWindowSize();
    return (React.createElement("div", { className: "Header" },
        width > 1000 ? (React.createElement("div", { className: "Header__title" },
            React.createElement(LinkLogoIcon, null),
            "devLinks")) : null,
        React.createElement("div", { className: "Header__links" },
            React.createElement(NavLink, { to: PATH.LINKS, className: ({ isActive, isPending }) => isPending
                    ? "pending"
                    : isActive
                        ? "Header__links__btn Header__links__btn--active"
                        : "Header__links__btn" },
                React.createElement(LinkIcon, null),
                React.createElement("p", null, "Links")),
            React.createElement(NavLink, { to: PATH.PROFILE, className: ({ isActive, isPending }) => isPending
                    ? "pending"
                    : isActive
                        ? "Header__links__btn Header__links__btn--active"
                        : "Header__links__btn" },
                React.createElement(ProfileIcon, null),
                React.createElement("p", null, " Profile Details"))),
        React.createElement(NavLink, { to: PATH.Preview, className: "Header__preview" },
            React.createElement("p", null, " Preview"))));
}
