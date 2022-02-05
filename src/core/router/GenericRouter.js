import React from "react";

import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

/* {
    path : "/",
    exact: true , 
    page : Component,
    layout : Component 
} */

// eTuzla Generic Package

// Feature Improvement 
// Tracking the all Location changes and saving them .

export default function GenericRouter(props) {
    return (
        <Router>
            <Switch>
                {props.routes.map((route, index) => (
                    <RouterWrapper
                        exact={route.exact}
                        key={index}
                        path={route.path}
                        layout={route.layout}
                        component={route.page}
                    />
                ))}
            </Switch>
        </Router>
    );
}

const RouterWrapper = ({ component: Component, layout: Layout, ...rest }) => (
    <Route
        {...rest}
        render={props => (
            <Layout>
                <Component {...props} />
            </Layout>
        )}
    />
);