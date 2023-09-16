export default function CardHeader({ title, subtitle, }) {
    return (React.createElement("div", { className: "Card__header" },
        React.createElement("p", null, title),
        React.createElement("p", null, subtitle)));
}
