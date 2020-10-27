import * as React from 'react';
import {Provider} from 'react-redux';
import {Switch} from 'react-router';
import {initializeI18n, initializeStore} from '../config';

interface Pages {
  [key: string]: React.ComponentType<any>
}

export interface IAppProps {
  appURL: string,
  pages: Pages,
  dataProvider: any,
  routeProvider: any,
  i18n?: object,
  reducers: object,
  compose?: any,
  middlewares: any[],
  middlewaresDev: any[],
  rootLayout: React.ComponentType,
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
    pages,
    reducers,
    compose,
    middlewares = [],
    middlewaresDev,
    dataProvider,
    routeProvider,
    rootLayout
  } = props;

  const store = initializeStore(reducers);
  initializeI18n(store);
  console.log('====================================');
  console.log('appURL: ', appURL);
  console.log('i18n: ', i18n);
  console.log('pages: ', pages);
  console.log('reducers: ', reducers);
  console.log('compose: ', compose);
  console.log('middlewares: ', middlewares);
  console.log('middlewaresDev: ', middlewaresDev);
  console.log('dataProvider: ', dataProvider);
  console.log('routeProvider: ', routeProvider);
  console.log('rootLayout: ', rootLayout);
  console.log('====================================');
  return (
    <Provider store={store}>
      <Switch>
        {/* {renderRouterRoot({routeProvider, pages, rootLayout, dispatch: store.dispatch})} */}
      </Switch>
    </Provider>
  );
}
export default CoreProvider
export {CoreProvider};

