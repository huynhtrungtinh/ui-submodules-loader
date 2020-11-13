import React from "react";
import {DashboardPage} from '../../views';

export default (params?: any): any[] => {
  const route = [
    {
      name: "home",
      exact: true,
      path: "/",
      component: DashboardPage
    },
    {
      name: "page404",
      component: () => <div>404</div>
    }
  ];
  return route;
};
