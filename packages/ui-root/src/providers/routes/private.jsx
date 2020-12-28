// import {DashboardPage} from '../../views';
import { RootPage, SystemAssignment } from '@dgtx/ui-core-components';
import React from 'react';
const ExampleComponent = React.lazy(() => import('uiAppTest/ExampleComponent'));
// const TinhComponent = React.lazy(() => import('uiViewImages/TinhComponent'));
// const ViewImagePage = React.lazy(() => import('uiViewImages/ViewImagePage'));
// console.log('TinhComponent: ', TinhComponent)
// console.log('ViewImagePage: ', ViewImagePage)
console.log('ExampleComponent: ', ExampleComponent)

export default () => {
  const route = [
    {
      name: "operation",
      exact: true,
      path: '/components-test',
      component: () => <ExampleComponent />
    },
    // {
    //   name: "operation",
    //   exact: true,
    //   path: '/view-images/projects/:projectId/documents/:docId',
    //   // component: () => <div>ViewImagePage</div>
    //   component: () => <ViewImagePage />
    //   // component: () => <TinhComponent3 />
    // },
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
      path: "/:appName/role-assignment/",
      component: SystemAssignment
    },
    {
      name: "home",
      exact: true,
      path: "/home",
      component: RootPage
    },
    {
      name: "home",
      exact: true,
      path: "/",
      component: RootPage
    }
  ];
  return route;
};
