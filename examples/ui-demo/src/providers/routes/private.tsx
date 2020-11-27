// import {DashboardPage} from '../../views';
import {SystemAssignment} from '@dgtx/ui-core-components';
import React from "react";

export default (params?: any): any[] => {
  const route = [
    {
      name: "operation",
      exact: true,
      path: "/:appName/projects/:projectId/acquisitions/",
      component: () => <div>Acquisitions Page</div>
    },
    {
      name: "operation",
      exact: true,
      path: "/:appName/invoice/:projectId/:action/:layoutName/:taskKeyDef+",
      component: () => <div>invoice</div>
    },
    {
      name: "system",
      exact: true,
      path: "/:appName/assignment",
      component: SystemAssignment
    },
    {
      name: "home",
      exact: true,
      path: "/",
      component: () => <div>Dashboard Page</div>
      // component: DashboardPage
    }
  ];
  return route;
};
