import {loadingBarMiddleware} from 'react-redux-loading-bar';
import {applyMiddleware, compose, createStore} from 'redux';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import {createAPIMiddleware, resourceManagement} from '../middlewares';
import rootReducer from '../reducers';


const defaultMiddlewares = [
  thunkMiddleware,
  loadingBarMiddleware(),
  resourceManagement
];
export interface IComposedMiddlewares {
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

export interface IInitializeStore {
  customReducers?: any;
  dataProvider?: any;
  middlewares?: any[];
  middlewaresDev?: any[];
}

const initializeStore = (input: IInitializeStore) => {
  const {customReducers, middlewares = [], middlewaresDev = [], dataProvider} = input;
  return createStore(rootReducer(customReducers), composedMiddlewares({middlewares, middlewaresDev, dataProvider}));
}

export default initializeStore;
export {initializeStore};

