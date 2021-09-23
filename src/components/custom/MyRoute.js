import React from "react";
const ProjectList = React.lazy(() => import("./../project/ProjectList"));
const NotFount = React.lazy(() => import("./NotFound"));
import { Route, Switch } from "react-router-dom";

const routes = [
  {
    id: "prjList",
    exact: true,
    path: "/",
    component: ProjectList,
  },
  {
    id: "notfound",
    exact: false,
    path: "*",
    component: NotFount,
  },
];

const MyRoute = () => {
  return (
    <Switch>
      {routes.map((route) => (
        <Route key={route.id} {...route} />
      ))}
    </Switch>
  );
};

export default MyRoute;
