import * as React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import AddLinkPopUp from "./features/links/components/addLinkPopUp/AddLinkPopUp";
import routes, { renderRoutes } from "./Routes/routes";
function App() {
    const { modalOpen } = useSelector((state) => state.modals);
    return (React.createElement("div", { className: "App" },
        modalOpen ? React.createElement(AddLinkPopUp, null) : null,
        React.createElement(BrowserRouter, null, renderRoutes(routes))));
}
export default App;
