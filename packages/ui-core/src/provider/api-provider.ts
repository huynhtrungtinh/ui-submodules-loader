import {CREATE, CRUD_CREATE, CRUD_DELETE, CRUD_GET, CRUD_UPDATE, DataActionResult, DELETE, GET, UPDATE} from '@dgtx/ui-scl';

function onResponseDefault(): any {return "Function onResponse is not defined"}

const api = {
    get: (resource: string, params: object | any, onResponse: Function): DataActionResult => ({
        type: CRUD_GET,
        payload: params,
        meta: {
            resource,
            fetch: GET,
            onResponse: onResponse || onResponseDefault
        }
    }),
    create: (resource: string, params: object, onResponse: Function): DataActionResult => ({
        type: CRUD_CREATE,
        payload: params,
        meta: {
            resource,
            fetch: CREATE,
            onResponse: onResponse || onResponseDefault
        }
    }),
    update: (resource: string, params: object, onResponse: Function): DataActionResult => ({
        type: CRUD_UPDATE,
        payload: params,
        meta: {
            resource,
            fetch: UPDATE,
            onResponse: onResponse || onResponseDefault
        }
    }),
    delete: (resource: string, params: object, onResponse: Function): DataActionResult => ({
        type: CRUD_DELETE,
        payload: params,
        meta: {
            resource,
            fetch: DELETE,
            onResponse: onResponse || onResponseDefault
        }
    }),
    custom: (resource: string, params: object, onResponse: Function, typeCustom: string): DataActionResult => ({
        type: typeCustom,
        payload: params,
        meta: {
            resource,
            fetch: typeCustom,
            onResponse: onResponse || onResponseDefault
        }
    })
}

export {api};
export default api;

