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

export interface IMeta {
    resource: string,
    [key: string]: any
}

export interface IAction {
    readonly type: string;
    readonly payload?: any;
    readonly meta: IMeta
}
export declare interface TypedAction<T extends string> extends IAction {
    readonly type: T;
}
export type ActionCreator = TypedAction<string> | IAction | any;

export interface Props<T> {
    _as: 'props';
    _p: T;
}

export interface ActionReducer<T, V extends IAction = IAction> {
    (state: T | undefined, action: V): T;
}
