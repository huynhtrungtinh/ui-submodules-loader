import {CREATE, CRUD_CREATE, CRUD_DELETE, CRUD_GET_COUNT, CRUD_GET_LIST, CRUD_GET_MANY, CRUD_GET_ONE, CRUD_UPDATE, DataActionResult, DataFetchOptions, DELETE, GET_COUNT, GET_LIST, GET_MANY, GET_ONE, UPDATE} from '@dgtx/ui-scl';

export const crudGetList = (resource: string, params: object | any, options: DataFetchOptions | any): DataActionResult => ({
    type: CRUD_GET_LIST,
    payload: params,
    meta: {
        resource,
        fetch: GET_LIST,
        keyId: options && options.keyId || undefined,
        onSuccess: options && options.onSuccess || {},
        onFailure: options && options.onFailure ? options.onFailure : {
            notification: {
                body: 'dgs.notification.http_error',
                level: 'warning'
            }
        },
        refresh: options && options.refresh || true
    }
})

export const crudGetMany = (resource: string, params: object, options: DataFetchOptions): DataActionResult => ({
    type: CRUD_GET_MANY,
    payload: params,
    meta: {
        resource,
        fetch: GET_MANY,
        keyId: options && options.keyId || undefined,
        onSuccess: options && options.onSuccess,
        onFailure: options && options.onFailure ? options.onFailure : {
            notification: {
                body: 'dgs.notification.items_doesnt_exist',
                level: 'warning'
            }
        },
        refresh: options ? options.refresh : true
    }
});

export const crudGetCount = (resource: string, params: object, options: DataFetchOptions): DataActionResult => ({
    type: CRUD_GET_COUNT,
    payload: params,
    meta: {
        resource,
        fetch: GET_COUNT,
        keyId: options && options.keyId || undefined,
        onSuccess: options && options.onSuccess,
        onFailure: options && options.onFailure ? options.onFailure : {
            notification: {
                body: 'dgs.notification.items_doesnt_exist',
                level: 'warning'
            }
        },
        refresh: options ? options.refresh : true
    }
});


export const crudGetOne = (resource: string, params: object, options: DataFetchOptions): DataActionResult => ({
    type: CRUD_GET_ONE,
    payload: params,
    meta: {
        resource,
        fetch: GET_ONE,
        keyId: options && options.keyId || undefined,
        onSuccess: options && options.onSuccess,
        onFailure: options && options.onFailure ? options.onFailure : {
            notification: {
                body: 'dgs.notification.item_doesnt_exist',
                level: 'warning'
            }
        },
        refresh: options ? options.refresh : true
    }
});

export const crudCreate = (resource: string, params: object, options: DataFetchOptions = {redirectTo: 'edit'}) => ({
    type: CRUD_CREATE,
    payload: params,
    meta: {
        resource,
        fetch: CREATE,
        keyId: options && options.keyId || undefined,
        onSuccess: options && options.onSuccess ? options.onSuccess : {
            notification: {
                body: 'dgs.notification.created',
                level: 'info',
                messageArgs: {
                    smart_count: 1,
                },
            },
            getResult: options.onSuccess && options.onSuccess ? options.onSuccess.getResult && options.onSuccess.getResult : null,
            redirectTo: options.onSuccess ? options.onSuccess.redirectTo : null,
            basePath: options.onSuccess ? options.onSuccess.basePath : null,
        },
        onFailure: options && options.onFailure ? options.onFailure : {
            notification: {
                body: 'dgs.notification.http_error',
                level: 'warning',
            },
        },
    },
})


export const crudUpdate = (resource: string, params: object, options: DataFetchOptions): DataActionResult => ({
    type: CRUD_UPDATE,
    payload: params,
    meta: {
        resource,
        fetch: UPDATE,
        keyId: options && options.keyId || undefined,
        onSuccess: options && options.onSuccess ? options.onSuccess : {
            notification: {
                body: 'dgs.notification.updated',
                level: 'info',
                messageArgs: {
                    smart_count: 1,
                }
            }
        },
        onFailure: options && options.onFailure ? options.onFailure : {
            notification: {
                body: 'dgs.notification.http_error',
                level: 'warning',
            },
        },
    },
})


export const crudDelete = (resource: string, params: object, options: DataFetchOptions): DataActionResult => ({
    type: CRUD_DELETE,
    payload: params,
    meta: {
        resource,
        fetch: DELETE,
        keyId: options && options.keyId || undefined,
        onSuccess: options && options.onSuccess ? options.onSuccess : {
            notification: {
                body: 'dgs.notification.deleted',
                level: 'info',
                messageArgs: {
                    smart_count: 1,
                }
            }
        },
        onFailure: options && options.onFailure ? options.onFailure : {
            notification: {
                body: 'dgs.notification.http_error',
                level: 'warning',
            },
        },
    },
})
