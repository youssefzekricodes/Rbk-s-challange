import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import store from "./data/store/index.ts";
import { Provider } from "react-redux";
ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(Provider, { store: store },
    React.createElement(App, null)));
