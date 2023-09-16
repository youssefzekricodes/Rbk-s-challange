import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import LayoutFragment from "../components/LayoutFragment";
import MainLayout from "../layout/Layout";
import { PATH } from "./paths.routes";
export const renderRoutes = (routes = []) => {
    return (React.createElement(Suspense, null,
        React.createElement(Routes, null, routes.map((route, index) => {
            const Component = route.component;
            const Layout = route.layout;
            return (React.createElement(Route, { key: index, path: route.path, element: React.createElement(Layout, null,
                    React.createElement(Suspense, { fallback: React.createElement(React.Fragment, null) },
                        React.createElement(Component, null))) }));
        }))));
};
const routes = [
    {
        exact: true,
        path: PATH.PROFILE,
        component: lazy(() => import("../views/Profile")),
        layout: MainLayout,
    },
    {
        exact: true,
        path: PATH.LINKS,
        component: lazy(() => import("../views/Links")),
        layout: MainLayout,
    },
    {
        exact: true,
        path: PATH.Preview,
        component: lazy(() => import("../views/Preview")),
        layout: LayoutFragment,
    },
];
export default routes;
