export const KEY_TRANSLATE = 'push_notifications';
export const LOCAL_STORAGE_STATUS_NOTIFICATION = 'status_notification';
export interface IItemNotifications{
    type: string;
    name: string;
    id: string;
}

export interface ICheckedNotifications{
    checked: boolean;
    type: string;
    name: string;
    id: string;
}

export interface IParams {
   [key: string]: any
}

export interface IActionsCreator {
    params: IParams;
    state: any;
}

export interface IMeta {
    resource: string;
    [key: string]: any;
}

export interface IAction {
    readonly type: string;
    readonly payload?: any;
    readonly meta: IMeta;
}