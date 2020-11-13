import {IAuthenProvider} from '@dgtx/ui-scl';
import {dataProvider} from '@dgtx/ui-utils';
import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Switch} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {effectTokenExpiration} from '../actions';
import {initializeI18n, initializeStore} from '../config';
import {renderRouterRoot} from '../routers';
interface IAppProps {
  appURL: string;
  i18n?: object;
  RootLayout: React.Component | any;

  routeProvider?: any;
  authenProvider?: IAuthenProvider;
  reducers?: object;
  middlewares?: any[];
  middlewaresDev?: any[];
}
const CoreProvider: React.StatelessComponent<IAppProps> = (props: IAppProps) => {
  const {
    appURL = '',
    i18n = {},
    RootLayout,
    middlewares = [],
    middlewaresDev = [],
    reducers,
    routeProvider,
    authenProvider
  } = props;
  const store = initializeStore({customReducers: reducers, middlewares, middlewaresDev, dataProvider: dataProvider, authenProvider});
  initializeI18n(store, i18n);
  const actions = bindActionCreators({effectTokenExpiration}, store.dispatch);
  actions.effectTokenExpiration();
  return (
    <Provider store={store}>
      <BrowserRouter basename={appURL}>
        <Switch>
          {renderRouterRoot({routeProvider, RootLayout, dispatch: store.dispatch})}
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}
export default CoreProvider
export {CoreProvider};

