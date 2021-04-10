import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import loadable from "@loadable/component";

//PAGES
const Registration = loadable(() => import("./pages/Registration"));

export const pages = [
    {id: "registration", path: "/registration", component: Registration}
];

export default () => {
    const getRoutes = () => pages.map((page) => <Route
        key={page.id}
        id={page.id}
        exact path={page.path}
        component={page.component}
    />);

    return <Switch>
        {getRoutes()}
        <Redirect from="/" to={"registration"}/>
    </Switch>;
};
