import {CoreProvider} from '@dgtx/ui-core';
import '@dgtx/ui-demo/src/assets/css/styles.css';
import '@dgtx/ui-demo/src/assets/fonts/robotomono.css';
import {initConfigApp} from '@dgtx/ui-scl';
import axios from 'axios';
import React from 'react';
import {API_ENDPOINT, APP_NAME, APP_VERSION, BPMN_ENDPOINT, OAUTH_ENDPOINT, UAC_ENDPOINT} from './config';
import i18n from './i18n';
import {DataProvider, routeProvider} from './providers';
import {rootReducer} from './reducers';
import {LayoutProvider} from './views';
const baseHref = (document as any).querySelector('base').getAttribute('href').replace(/\/$/, '');
console.log("baseHref: ", baseHref)
export default (props: any) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem('access_token')}`;
  initConfigApp({
    appName: APP_NAME,
    appVersion: APP_VERSION,
    appURL: baseHref || '/',
    apiURL: API_ENDPOINT,
    uacURL: UAC_ENDPOINT,
    oauthURI: OAUTH_ENDPOINT,
    bpmnURI: BPMN_ENDPOINT,
  })
  return (
    <CoreProvider
      appURL={baseHref || '/'}
      i18n={i18n}
      RootLayout={LayoutProvider}
      reducers={rootReducer}
      middlewares={[]}
      middlewaresDev={[]}
      routeProvider={routeProvider}
      dataProvider={DataProvider}
    />
  )
}
