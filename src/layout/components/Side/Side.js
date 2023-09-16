import React from "react";
import { useSelector } from "react-redux";
import frame from "../../../assets/images/phoneframe.jpg";
import { ReactComponent as Arrow } from "../../../assets/icons/arrow.svg";
import { ReactComponent as GitHub } from "../../../assets/icons/github.svg";
import { ReactComponent as Youtube } from "../../../assets/icons/youtube.svg";
import { ReactComponent as LinkedIn } from "../../../assets/icons/linkdn.svg";
export default function Side() {
    const { user } = useSelector((state) => state.user);
    return (React.createElement("div", { className: "Side" },
        React.createElement("div", { className: "Side__PhoneFrame", style: { backgroundImage: `url(${frame})` } },
            React.createElement("div", { className: `Side__avatar ${user.avatar !== "" ? "" : "emptyavatar"}` }, user.avatar ? React.createElement("img", { src: user.avatar, alt: "" }) : null),
            React.createElement("div", { className: "Side__Cordinate" },
                user.firstName ? (React.createElement("p", null, user.firstName + "  " + user.lastName)) : React.createElement("span", { className: "Side__Cordinate--empty" }),
                user.email ? React.createElement("p", null, user.email) : React.createElement("span", { className: "Side__Cordinate--empty" })),
            React.createElement("div", { className: "Side__links" }, user.links.map((link) => (React.createElement("a", { className: `Side__links__link ${link.origin}`, href: link.url, target: "_blank" },
                React.createElement("div", { className: "Side__links__link__type" },
                    link.origin === "GitHub" ? (React.createElement(GitHub, null)) : link.origin === "LinkedIn" ? (React.createElement(LinkedIn, null)) : (React.createElement(Youtube, null)),
                    link.origin),
                React.createElement(Arrow, null))))))));
}
