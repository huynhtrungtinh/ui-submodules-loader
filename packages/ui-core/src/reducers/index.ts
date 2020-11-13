import {IAuthenProvider, IAuthenticationState} from '@dgtx/ui-scl';
import {i18nReducer} from "react-redux-i18n";
import {loadingBarReducer as loadingBar} from 'react-redux-loading-bar';
import {combineReducers} from 'redux';
import authentication from './authentication';
import {resourcesReducer} from './resources';

interface IRootState {
  readonly i18n: any;
  readonly resources: any;
  readonly authentication: IAuthenticationState;
  readonly loadingBar: any;
  readonly [key: string]: any;
}

const rootReducer = (customReducers: any, authenProvider: IAuthenProvider) => {
  let newAuth: any = authentication;
  newAuth.authenProvider = authenProvider;
  return combineReducers<IRootState>({
    i18n: i18nReducer,
    authentication: newAuth,
    loadingBar,
    resources: resourcesReducer,
    ...customReducers
  });
}

export default rootReducer;
export {rootReducer};

