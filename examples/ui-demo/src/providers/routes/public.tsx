import React from 'react'
import { SigninPage, LayoutLogin } from '../../views';
export default (params?: any): any[] => {
  return [{
    name: "signin",
    exact: true,
    path: "/signin",
    component: () => (<LayoutLogin><SigninPage /></LayoutLogin>)
  }]
}
