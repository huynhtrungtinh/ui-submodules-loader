import {IAuthenProvider} from '@dgtx/ui-scl';
import {loadingBarMiddleware} from 'react-redux-loading-bar';
import {applyMiddleware, compose, createStore} from 'redux';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import {authenProvider as authProvider} from '../actions';
import {createAPIMiddleware, resourceManagement} from '../middlewares';
import rootReducer from '../reducers';

const defaultMiddlewares = [
  thunkMiddleware,
  loadingBarMiddleware(),
  resourceManagement
];
interface IComposedMiddlewares {
  middlewares?: any[];
  middlewaresDev?: any[];
  dataProvider?: any;
}
const composedMiddlewares = (input: IComposedMiddlewares) => {
  const {middlewares = [], middlewaresDev = [], dataProvider} = input;
  if (process.env.NODE_ENV === 'development') {
    return compose(applyMiddleware(
      ...defaultMiddlewares,
      ...middlewares,
      createAPIMiddleware(dataProvider),
      ...middlewaresDev,
      createLogger()
    ));
  }
  return compose(applyMiddleware(
    ...defaultMiddlewares,
    ...middlewares,
    createAPIMiddleware(dataProvider),
  ));
}

interface IInitializeStore {
  customReducers?: any;
  dataProvider?: any;
  middlewares?: any[];
  middlewaresDev?: any[];
  authenProvider?: IAuthenProvider;
}

const initializeStore: any = (input: IInitializeStore) => {
  const {customReducers, middlewares = [], middlewaresDev = [], dataProvider, authenProvider = authProvider} = input;
  return createStore(rootReducer(customReducers, authenProvider), composedMiddlewares({middlewares, middlewaresDev, dataProvider}));
}

export default initializeStore;
export {initializeStore};

