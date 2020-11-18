import {IAuthenProvider, IConfig, IInitConfig} from '@dgtx/ui-scl';

const CONFIG: IConfig = {
    APP_NAME: '',
    APP_VERSION: '',
    APP_URL: '',
    API_URI: '',
    API_UAC_URI: '',
    API_OAUTH_URI: '',
    API_BPMN_URI: '',
    API_SOCKET_URI: '',
    NOTIFICATION_URI: '',
    PUBLIC_KEY_NOTIFICATION: '',
    REPORT_URI: '',
    API_TRAINING_URI: ''
}

let AUTHENTICATION: IAuthenProvider = {
    doLogin: null,
    doRefresh: null,
    doLogout: null,
    getResourceAccess: null,
    getUserInfo: null,
    checkToken: null,
    getI18n: null
}

function initConfigApp(props: IInitConfig): void {
    const {
        appName, appVersion, appURL, apiURL, uacURL, oauthURI,
        bpmnURI, socketURI, notificationURI, reportURI, publickKeyNotification,
        trainingURI
    } = props;
    CONFIG.APP_NAME = appName || '';
    CONFIG.APP_VERSION = appVersion || '';
    CONFIG.APP_URL = appURL || '';
    CONFIG.API_URI = apiURL || '';
    CONFIG.API_UAC_URI = uacURL || '';
    CONFIG.API_OAUTH_URI = oauthURI || '';

    CONFIG.API_TRAINING_URI = trainingURI || '';
    CONFIG.API_BPMN_URI = bpmnURI || '';
    CONFIG.API_SOCKET_URI = socketURI || '';
    CONFIG.NOTIFICATION_URI = notificationURI || '';
    CONFIG.REPORT_URI = reportURI || '';
    CONFIG.PUBLIC_KEY_NOTIFICATION = publickKeyNotification || '';
}
const setAuthenProvider = (auth: IAuthenProvider): void => {
    AUTHENTICATION = auth
}
const getAuthenProvider = (): IAuthenProvider => {
    return AUTHENTICATION;
}

function getConfig(): IConfig {
    return CONFIG
}

function getAppName(): string {
    return String(CONFIG.APP_NAME)
}
function getAppVersion(): string {
    return String(CONFIG.APP_VERSION)
}

function getAppURL(): string {
    return String(CONFIG.APP_URL)
}

function getApiURI(): string {
    return String(CONFIG.API_URI)
}

function getApiUacURI(): string {
    return String(CONFIG.API_UAC_URI)
}

function getApiOauthURI(): string {
    return String(CONFIG.API_OAUTH_URI)
}

function getApiBPMNURI(): string {
    return String(CONFIG.API_BPMN_URI)
}

function getApiSocketURI(): string {
    return String(CONFIG.API_SOCKET_URI)
}

function getApiNotificationURI(): string {
    return String(CONFIG.NOTIFICATION_URI)
}

function getApiReportURI(): string {
    return String(CONFIG.REPORT_URI)
}

function getApiPublicKeyNotification(): string {
    return String(CONFIG.PUBLIC_KEY_NOTIFICATION)
}

function getApiTrainingURI(): string {
    return String(CONFIG.API_TRAINING_URI)
}

const config = {initConfigApp, setAuthenProvider, getConfig, getAuthenProvider, getAppName, getAppVersion, getAppURL, getApiURI, getApiUacURI, getApiOauthURI, getApiBPMNURI, getApiSocketURI, getApiNotificationURI, getApiReportURI, getApiPublicKeyNotification, getApiTrainingURI}

export default config;
export {config};

