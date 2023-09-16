import Header from "./components/Header/Header";
import Side from "./components/Side/Side";
export default function Layout({ children, }) {
    return (React.createElement("div", { className: "Layout" },
        React.createElement(Header, null),
        React.createElement("div", { className: "Layout__content" },
            React.createElement(Side, null),
            React.createElement("div", { className: "Layout__content__chield" }, children))));
}
