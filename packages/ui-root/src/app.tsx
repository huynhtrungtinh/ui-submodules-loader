import {CoreProvider} from '@dgtx/ui-core';
import {LayoutRoot} from '@dgtx/ui-core-components';
import '@dgtx/ui-scl/css/root-css.css';
import {config} from '@dgtx/ui-utils';
import React from 'react';
import ReactDOM from 'react-dom';
import {API_ENDPOINT, APP_NAME, APP_VERSION, BPMN_ENDPOINT, OAUTH_ENDPOINT, TRAINING_ENDPOINT, UAC_ENDPOINT} from './config';
import i18n from './i18n';
import {routeProvider} from './providers';
import {rootReducer} from './reducers';

const baseHref = (document as any).querySelector('base').getAttribute('href').replace(/\/$/, '');
const App = () => {
  config.initConfigApp({
    appName: APP_NAME,
    appVersion: APP_VERSION,
    appURL: baseHref || '/',
    apiURL: API_ENDPOINT,
    uacURL: UAC_ENDPOINT,
    oauthURI: OAUTH_ENDPOINT,
    bpmnURI: BPMN_ENDPOINT,
    trainingURI: TRAINING_ENDPOINT
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
ReactDOM.render(<App />, document.getElementById('root'));
