import {CoreProvider} from '@dgtx/ui-core';
import {LayoutRoot} from '@dgtx/ui-core-components';
import '@dgtx/ui-demo/src/assets/css/styles.css';
import '@dgtx/ui-demo/src/assets/fonts/robotomono.css';
import '@dgtx/ui-scl/css/root-css.css';
import {initConfigApp} from '@dgtx/ui-utils';
// import axios from 'axios';
import React from 'react';
import {API_ENDPOINT, APP_NAME, APP_VERSION, BPMN_ENDPOINT, OAUTH_ENDPOINT, TRAINING_ENDPOINT, UAC_ENDPOINT} from './config';
import i18n from './i18n';
import {RESOURCE_REGISTRIES, routeProvider} from './providers';
import {rootReducer} from './reducers';

// import {LayoutDefault} from './views';
const baseHref = (document as any).querySelector('base').getAttribute('href').replace(/\/$/, '');
export default (props: any) => {
  // axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem('access_token')}`;
  initConfigApp({
    appName: APP_NAME,
    appVersion: APP_VERSION,
    appURL: baseHref || '/',
    apiURL: API_ENDPOINT,
    uacURL: UAC_ENDPOINT,
    oauthURI: OAUTH_ENDPOINT,
    bpmnURI: BPMN_ENDPOINT,
    trainingURI: TRAINING_ENDPOINT,
    resourceRegistries: RESOURCE_REGISTRIES
  })

  return (
    <CoreProvider
      appURL={baseHref || '/'}
      RootLayout={LayoutRoot}
      i18n={i18n}
      reducers={rootReducer}
      routeProvider={routeProvider}
    />
  )
}
