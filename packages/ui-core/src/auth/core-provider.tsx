import {Page401 as P401, Page403 as P403, Page404 as P404} from '@dgtx/ui-scl';
import * as React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Switch} from 'react-router-dom';
import {initializeI18n, initializeStore} from '../config';
import {renderRouterRoot} from '../routers';
interface Pages {
  [key: string]: React.ComponentType<any>
}

export interface IAppProps {
  appURL: string,
  i18n?: object,
  Page404?: Pages,
  Page403?: Pages,
  Page401?: Pages,
  RootLayout?: Pages,

  dataProvider: any,
  routeProvider: any,
  reducers: object,
  middlewares: any[],
  middlewaresDev: any[],
  compose?: any,
  [key: string]: any
}
let historyApp: History;
export const getHistoryApp = () => {
  return historyApp;
}
const CoreProvider: React.StatelessComponent<IAppProps> = (props: IAppProps) => {
  const {
    appURL,
    i18n,
    Page404 = P404,
    Page403 = P403,
    Page401 = P401,
    RootLayout,
    middlewares = [],
    middlewaresDev,
    dataProvider,
    routeProvider,
    reducers,
    compose,
  } = props;

  const store = initializeStore(reducers);
  initializeI18n(store);
  console.log('====================================');
  console.log('appURL: ', appURL);
  console.log('i18n: ', i18n);
  console.log('reducers: ', reducers);
  console.log('compose: ', compose);
  console.log('middlewares: ', middlewares);
  console.log('middlewaresDev: ', middlewaresDev);
  console.log('dataProvider: ', dataProvider);
  console.log('routeProvider: ', routeProvider);
  console.log('RootLayout: ', RootLayout);
  console.log('====================================');
  return (
    <Provider store={store}>
      <BrowserRouter basename={appURL}>
        <Switch>
          {renderRouterRoot({routeProvider, Page404, Page403, Page401, RootLayout, dispatch: store.dispatch})}
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}
export default CoreProvider
export {CoreProvider};

