export interface IProvider {
    readonly state: object | any;
    readonly actions?: object | any;
}

export type IDoLogin = (username: string, password: string) => any | null;
export type IDoRefresh = (refreshToken: string) => any | null;
export type IDoLogout = () => any | null;
export type IGetResourceAccess = () => any | null;
export interface IAuthenProvider {
    doLogin: IDoLogin | null,
    doRefresh: IDoRefresh | null,
    doLogout: IDoLogout | null,
    getResourceAccess: IGetResourceAccess | null,
    getUserInfo: IGetResourceAccess | null,
}

export interface IInitConfig {
    appName?: string,
    appVersion?: string,
    appURL?: string,
    apiURL?: string,
    uacURL?: string,
    oauthURI?: string,
    bpmnURI?: string,
    socketURI?: string,
    notificationURI?: string,
    reportURI?: string,
    publickKeyNotification?: string,
}

export interface ICurrentUser {
    username: string,
    displayName: string,
    email: string,
}

export class CurrentUserEntity implements ICurrentUser {
    displayName: string;
    email: string;
    username: string;

    constructor(props?: ICurrentUser) {
        if (props) {
            this.username = props.username;
            this.displayName = props.displayName;
            this.email = props.email;
        } else {
            this.username = '';
            this.displayName = '';
            this.email = '';
        }
    }
}
