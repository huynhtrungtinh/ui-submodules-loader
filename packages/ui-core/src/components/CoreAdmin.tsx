import {ConnectedRouter, routerMiddleware} from 'connected-react-router';
import {createBrowserHistory, History} from 'history';
import * as React from 'react';
import {Provider} from 'react-redux';
import {loadTranslations, syncTranslationWithStore, TranslationObjects} from 'react-redux-i18n';
import {Switch} from 'react-router';
import createStore from '../createStore';
import {renderRouterRoot} from './renderRouter';
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
const getI18n = (dataI18: any = {}): any => {
   const data: TranslationObjects = {'vi': ''};
   Object.keys(dataI18).forEach((lang: string) => {
      data[lang] = dataI18[lang];
   })
   return loadTranslations(data)
}
let historyApp: History;
export const getHistoryApp = () => {
   return historyApp;
}
export const CoreAdmin: React.StatelessComponent<IAppProps> = (props: IAppProps) => {
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

   historyApp = createBrowserHistory({basename: appURL});
   const i18nSupported = getI18n(i18n)
   const middlewaresIn = [...middlewares, routerMiddleware(historyApp)];
   const store: any = createStore({
      reducers,
      middlewares: middlewaresIn,
      dataProvider,
      compose,
      middlewaresDev,
   }, historyApp)
   syncTranslationWithStore(store);
   const dis = store.dispatch as any
   dis(i18nSupported);
   return (
      <Provider store={store}>
         <ConnectedRouter history={historyApp}>
            <Switch>
               {renderRouterRoot({routeProvider, pages, rootLayout, dispatch: store.dispatch})}
            </Switch>
         </ConnectedRouter>
      </Provider>
   );
}
