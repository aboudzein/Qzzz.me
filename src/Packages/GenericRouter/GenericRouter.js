import React from "react";
import SideBarLayout from "../Layouts/Ant.Design/SideBar/SideBarLayout";
import { Switch, Route } from "react-router-dom";

// Generic Router Depend on Layouts Package

export default function GenericRouter(props) {
  return (
    <SideBarLayout>
      <Switch>
        {props.routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            children={route.page}
          />
        ))}
      </Switch>
    </SideBarLayout>
  );
}
