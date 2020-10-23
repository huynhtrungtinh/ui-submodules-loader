import { createStore, compose, applyMiddleware } from 'redux';
import { rootReducer } from './rootReducer'
import logger from 'redux-logger';
import thunk from 'redux-thunk'
interface Window {
  __REDUX_DEVTOOLS_EXTENSION__?: () => () => void;
}
let middwares = [thunk, logger]

const typedWindow = window as Window;
export const createStoreForm:any = () => {
  const store = createStore(
    rootReducer,
    compose(applyMiddleware(...middwares), typeof typedWindow !== 'undefined'
      && typedWindow.__REDUX_DEVTOOLS_EXTENSION__
      ? typedWindow.__REDUX_DEVTOOLS_EXTENSION__()
      : (f: any) => f)
  )
  return store
}
