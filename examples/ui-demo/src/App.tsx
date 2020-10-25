// import {WindowSizeProvider} from '@dgtx/su-scl';
import {CoreAdmin, initConfigApp} from '@dgtx/ui-core';
import '@dgtx/ui-demo/src/assets/css/styles.css';
import '@dgtx/ui-demo/src/assets/fonts/robotomono.css';
import axios from 'axios';
import React from 'react';
import {createLogger} from 'redux-logger';
import {API_ENDPOINT, APP_NAME, APP_VERSION, BPMN_ENDPOINT, OAUTH_ENDPOINT, UAC_ENDPOINT} from './config';
import i18n from './i18n';
// import { composeWithDevTools } from 'redux-devtools-extension';
import {DataProvider, routeProvider} from './providers';
import {rootReducer} from './reducers';
import {LayoutProvider} from './views';

let middlewaresDev: any[] = [];
let compose: any = null;
if (process.env["NODE_ENV"] !== "production") {
  middlewaresDev = [createLogger()];
  // compose = composeWithDevTools;
}
export default (props: any) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem('access_token')}`;
  initConfigApp({
    appName: APP_NAME,
    appVersion: APP_VERSION,
    appURL: props.baseUrl,
    apiURL: API_ENDPOINT,
    uacURL: UAC_ENDPOINT,
    oauthURI: OAUTH_ENDPOINT,
    bpmnURI: BPMN_ENDPOINT,
  })
  return (
    // <WindowSizeProvider>
      <CoreAdmin
        appURL={props.baseUrl}
        pages={
          {
            page404: () => (<div>404</div>),
            PageLoading: () => (<div>Loading</div>)
          }
        }
        i18n={i18n}
        rootLayout={LayoutProvider}
        reducers={rootReducer}
        compose={compose}
        middlewares={[]}
        middlewaresDev={middlewaresDev}
        routeProvider={routeProvider}
        dataProvider={DataProvider}
      />
    // </WindowSizeProvider>
  )
}
