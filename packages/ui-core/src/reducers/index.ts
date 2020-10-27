import {i18nReducer} from "react-redux-i18n";
import {loadingBarReducer as loadingBar} from 'react-redux-loading-bar';
import {combineReducers} from 'redux';
import authentication, {AuthenticationState} from './authentication';
import resources from './resources';

export interface IRootState {
  readonly i18n: any;
  readonly resources: any;
  readonly authentication: AuthenticationState;
  readonly loadingBar: any;
  readonly [key: string]: any;
}

const rootReducer = (customReducers: any) => combineReducers<IRootState>({
  i18n: i18nReducer,
  authentication,
  loadingBar,
  resources,
  ...customReducers
});

export default rootReducer;
