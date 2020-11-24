// import {DashboardPage} from '../../views';
import {SystemAssignment} from '@dgtx/ui-core-components';
import React from "react";

export default (params?: any): any[] => {
  const route = [
    {
      name: "system",
      exact: true,
      path: "/system-assignment",
      component: SystemAssignment
    },
    {
      name: "home",
      exact: true,
      path: "/",
      component: () => <div>Dashboard Page</div>
      // component: DashboardPage
    },
    {
      name: "page404",
      component: () => <div>404</div>
    }
  ];
  return route;
};
