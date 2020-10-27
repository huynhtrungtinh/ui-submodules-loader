import {IAuthenProvider, IInitConfig} from '../models';

const CONFIG = {
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
}

let AUTHENTICATION: IAuthenProvider = {
    doLogin: null,
    doRefresh: null,
    doLogout: null,
    getResourceAccess: null,
    getUserInfo: null,
}

export function initConfigApp(props: IInitConfig): void {
    const {
        appName, appVersion, appURL, apiURL, uacURL, oauthURI,
        bpmnURI, socketURI, notificationURI, reportURI, publickKeyNotification
    } = props;
    CONFIG.APP_NAME = appName || '';
    CONFIG.APP_VERSION = appVersion || '';
    CONFIG.APP_URL = appURL || '';
    CONFIG.API_URI = apiURL || '';
    CONFIG.API_UAC_URI = uacURL || '';
    CONFIG.API_OAUTH_URI = oauthURI || '';

    CONFIG.API_BPMN_URI = bpmnURI || '';
    CONFIG.API_SOCKET_URI = socketURI || '';
    CONFIG.NOTIFICATION_URI = notificationURI || '';
    CONFIG.REPORT_URI = reportURI || '';
    CONFIG.PUBLIC_KEY_NOTIFICATION = publickKeyNotification || '';
}
export const setAuthenProvider = (auth: IAuthenProvider): void => {
    AUTHENTICATION = auth
}
export const getAuthenProvider = (): IAuthenProvider => {
    return AUTHENTICATION;
}
export function setAuthe(): string {
    return String(CONFIG.APP_NAME)
}

export function getAppName(): string {
    return String(CONFIG.APP_NAME)
}
export function getAppVersion(): string {
    return String(CONFIG.APP_VERSION)
}

export function getAppURL(): string {
    return String(CONFIG.APP_URL)
}

export function getApiURI(): string {
    return String(CONFIG.API_URI)
}

export function getApiUacURI(): string {
    return String(CONFIG.API_UAC_URI)
}

export function getApiOauthURI(): string {
    return String(CONFIG.API_OAUTH_URI)
}

export function getApiBPMNURI(): string {
    return String(CONFIG.API_BPMN_URI)
}

export function getApiSocketURI(): string {
    return String(CONFIG.API_SOCKET_URI)
}

export function getApiNotificationURI(): string {
    return String(CONFIG.NOTIFICATION_URI)
}
export function getApiReportURI(): string {
    return String(CONFIG.REPORT_URI)
}

export function getApiPublicKeyNotification(): string {
    return String(CONFIG.PUBLIC_KEY_NOTIFICATION)
}
