import {SigninPage} from '@dgtx/ui-core-components';
export default (params?: any): any[] => {
  return [{
    name: "signin",
    exact: true,
    path: "/signin",
    component: SigninPage
  }]
}
