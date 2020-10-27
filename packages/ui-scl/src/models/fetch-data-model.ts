
export const CRUD_GET_LIST = '@DGS/API/CRUD/GET_LIST';
export const CRUD_GET_LIST_LOADING = '@DGS/API/CRUD/GET_LIST/LOADING';
export const CRUD_GET_LIST_FAILURE = '@DGS/API/CRUD/GET_LIST/FAILURE';
export const CRUD_GET_LIST_SUCCESS = '@DGS/API/CRUD/GET_LIST/SUCCESS';

export const CRUD_GET_ONE = '@DGS/API/CRUD/GET_ONE';
export const CRUD_GET_ONE_LOADING = '@DGS/API/CRUD/GET_ONE/LOADING';
export const CRUD_GET_ONE_FAILURE = '@DGS/API/CRUD/GET_ONE/FAILURE';
export const CRUD_GET_ONE_SUCCESS = '@DGS/API/CRUD/GET_ONE/SUCCESS';

export const CRUD_GET_MANY = '@DGS/API/CRUD/GET_MANY';
export const CRUD_GET_MANY_LOADING = '@DGS/API/CRUD/GET_MANY/LOADING';
export const CRUD_GET_MANY_FAILURE = '@DGS/API/CRUD/GET_MANY/FAILURE';
export const CRUD_GET_MANY_SUCCESS = '@DGS/API/CRUD/GET_MANY/SUCCESS';

export const CRUD_GET_COUNT = '@DGS/API/CRUD/GET_COUNT';
export const CRUD_GET_COUNT_LOADING = '@DGS/API/CRUD/GET_COUNT/LOADING';
export const CRUD_GET_COUNT_FAILURE = '@DGS/API/CRUD/GET_COUNT/FAILURE';
export const CRUD_GET_COUNT_SUCCESS = '@DGS/API/CRUD/GET_COUNT/SUCCESS';

export const CRUD_GET_MANY_REFERENCE = '@DGS/API/CRUD/GET_MANY_REFERENCE';
export const CRUD_GET_MANY_REFERENCE_LOADING =
  '@DGS/API/CRUD/GET_MANY_REFERENCE/LOADING';
export const CRUD_GET_MANY_REFERENCE_FAILURE =
  '@DGS/API/CRUD/GET_MANY_REFERENCE/FAILURE';
export const CRUD_GET_MANY_REFERENCE_SUCCESS =
  '@DGS/API/CRUD/GET_MANY_REFERENCE/SUCCESS';

export const CRUD_CREATE = '@DGS/API/CRUD/CREATE';
export const CRUD_CREATE_LOADING = '@DGS/API/CRUD/CREATE/LOADING';
export const CRUD_CREATE_FAILURE = '@DGS/API/CRUD/CREATE/FAILURE';
export const CRUD_CREATE_SUCCESS = '@DGS/API/CRUD/CREATE/SUCCESS';

export const CRUD_UPDATE = '@DGS/API/CRUD/UPDATE';
export const CRUD_UPDATE_LOADING = '@DGS/API/CRUD/UPDATE/LOADING';
export const CRUD_UPDATE_FAILURE = '@DGS/API/CRUD/UPDATE/FAILURE';
export const CRUD_UPDATE_SUCCESS = '@DGS/API/CRUD/UPDATE/SUCCESS';
export const CRUD_UPDATE_OPTIMISTIC = '@DGS/API/CRUD/UPDATE/OPTIMISTIC';

export const CRUD_UPDATE_MANY = '@DGS/API/CRUD/UPDATE/MANY';
export const CRUD_UPDATE_MANY_LOADING = '@DGS/API/CRUD/UPDATE/MANY/LOADING';
export const CRUD_UPDATE_MANY_FAILURE = '@DGS/API/CRUD/UPDATE/MANY/FAILURE';
export const CRUD_UPDATE_MANY_SUCCESS = '@DGS/API/CRUD/UPDATE/MANY/SUCCESS';
export const CRUD_UPDATE_MANY_OPTIMISTIC = '@DGS/API/CRUD/UPDATE/MANY/OPTIMISTIC';

export const CRUD_DELETE = '@DGS/API/CRUD/DELETE';
export const CRUD_DELETE_LOADING = '@DGS/API/CRUD/DELETE/LOADING';
export const CRUD_DELETE_FAILURE = '@DGS/API/CRUD/DELETE/FAILURE';
export const CRUD_DELETE_SUCCESS = '@DGS/API/CRUD/DELETE/SUCCESS';
export const CRUD_DELETE_OPTIMISTIC = '@DGS/API/CRUD/DELETE/OPTIMISTIC';

export const CRUD_DELETE_MANY = '@DGS/API/CRUD/DELETE/MANY';
export const CRUD_DELETE_MANY_LOADING = '@DGS/API/CRUD/DELETE/MANY/LOADING';
export const CRUD_DELETE_MANY_FAILURE = '@DGS/API/CRUD/DELETE/MANY/FAILURE';
export const CRUD_DELETE_MANY_SUCCESS = '@DGS/API/CRUD/DELETE/MANY/SUCCESS';
export const CRUD_DELETE_MANY_OPTIMISTIC = '@DGS/API/CRUD/DELETE/MANY/OPTIMISTIC';


export type NotificationLevelType = 'error' | 'warning' | 'info' | 'important';

export interface NotificationType {
  body?: string | any,
  level?: NotificationLevelType,
  messageArgs?: object | any,
}
export interface MetaDataFetchType {
  resource?: string,
  fetch?: string,
  keyId?: string,
  onFailure?: OnFailureType | ((getState: any) => OnFailureType),
  onSuccess?: OnSuccessType | ((getState: any) => OnSuccessType),
  refresh?: boolean,
  cancelPrevious?: boolean
}
export interface DataActionResult {
  type: string,
  payload: object,
  meta: MetaDataFetchType
}

export interface OnFailureType {
  notification: NotificationType
}


export interface OnSuccessType {
  notification?: NotificationType,
  getResult?: ((getState: any) => object),
  basePath?: string,
  redirectTo?: 'edit' | 'show' | string,
  unselectAll?: boolean
}

export interface DataFetchOptions {
  keyId?: string,
  onFailure?: OnFailureType | any,
  onSuccess?: OnSuccessType | any,
  refresh?: boolean,
  redirectTo?: 'edit' | 'show' | string,
}

export const GET_ONE = '@DGS/DATA_FETCH/GET_ONE';
export const GET_LIST = '@DGS/DATA_FETCH/GET_LIST';
export const GET_MANY = '@DGS/DATA_FETCH/GET_MANY';
export const GET_COUNT = '@DGS/DATA_FETCH/GET_COUNT';
export const GET_MANY_REFERENCE = '@DGS/DATA_FETCH/GET_MANY_REFERENCE';

export const CREATE = '@DGS/DATA_FETCH/CREATE';
export const CREATE_MANY = '@DGS/DATA_FETCH/CREATE_MANY';

export const UPDATE = '@DGS/DATA_FETCH/UPDATE';
export const UPDATE_MANY = '@DGS/DATA_FETCH/UPDATE_MANY';

export const DELETE = '@DGS/DATA_FETCH/DELETE';
export const DELETE_MANY = '@DGS/DATA_FETCH/DELETE_MANY';

export interface IUserInfo {
  displayName: string;
  email: string;
  username: string;
  role: 'admin' | 'teacher' | 'student';
}
