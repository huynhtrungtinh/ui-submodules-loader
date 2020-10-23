import React from "react";

export default (params?: any): any[] => {
  const route = [
    {
      name: "home",
      path: "/",
      component: () => <div>home component</div>
    },
    {
      name: "page404",
      component: () => <div>404</div>
    }
  ];
  return route;
};
