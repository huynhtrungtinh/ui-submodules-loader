export interface IProvider {
    readonly state: object | any;
    readonly actions?: object | any;
}

export type IResourceProvider = (type: string, resource: string, params: string) => Promise<any>;

export interface IResourceRegistries {
    [key: string]: IResourceProvider
}
export interface IInitConfig {
    appName?: string;
    appVersion?: string;
    appURL?: string;
    apiURL?: string;
    uacURL?: string;
    oauthURI?: string;
    bpmnURI?: string;
    socketURI?: string;
    notificationURI?: string;
    reportURI?: string;
    trainingURI?: string;
    publickKeyNotification?: string;
    resourceRegistries: IResourceRegistries;
}

export interface ICurrentUser {
    username: string;
    displayName: string;
    email: string;
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
