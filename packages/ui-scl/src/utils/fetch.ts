import {getAccessToken} from '../utils';
import {HttpError} from './HttpError';

interface Options {
    method?: 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE' | string,
    body?: FormData | string,
    headers?: Headers
}

export const fetchJson = async (url: string, options: Options = {method: 'GET'}, ignoreToken: boolean = false) => {
    const requestHeaders =
        options.headers ||
        new Headers({
            Accept: 'application/json',
        });
    if (
        !requestHeaders.has('Content-Type') &&
        !(options && options.body && options.body instanceof FormData)
    ) {
        requestHeaders.set('Content-Type', 'application/json');
    }
    const token = getAccessToken()
    if (token && !ignoreToken) {
        requestHeaders.set('Authorization', `Bearer ${token}`);
    }
    const requestInit: RequestInit =
    {
        ...options,
        body: options.body,
        headers: requestHeaders,
        method: options.method,

    }
    const response = await fetch(url, requestInit)
    const textIn = await response.text();
    let json;
    try {
        json = JSON.parse(textIn);
    } catch (e) {
        // not json, no big deal
    }
    if (response.status < 200 || response.status >= 300) {
        throw new HttpError(
            (json && json.message) || response.statusText,
            response.status,
            json
        )
    }
    return {
        status: response.status,
        headers: response.headers,
        body: textIn,
        json
    };

};


const isValidObject = (value: any) => {
    if (!value) {
        return false;
    }
    const isArray = Array.isArray(value);
    const isBuffer = Buffer && Buffer.isBuffer(value);
    const isObject =
        Object.prototype.toString.call(value) === '[object Object]';
    const hasKeys = !!Object.keys(value).length;

    return !isArray && !isBuffer && isObject && hasKeys;
};

export const flattenObject = (value: any, path: any[] = []): any => {
    if (isValidObject(value)) {
        return Object.assign(
            {},
            ...Object.keys(value).map(key =>
                flattenObject(value[key], path.concat([key]))
            )
        );
    } else {
        return path.length ? {[path.join('.')]: value} : value;
    }
};

interface IResponse {
    status: number,
    headers: any,
    body: string,
    json?: any,
    data?: any,
}

export const convertHTTPResponse = (response: IResponse, meta: any): IResponse => {
    const {headers, json, body, status} = response;
    let data = json;
    if (json) {
        if (Array.isArray(json) && json.length > 0) {
            if (!json[0].id) {
                if (typeof json[0] !== 'object') {
                    data = json.map((item, id) => ({id, item}))
                } else {
                    if (meta.keyId) {
                        data = json.map((item) => ({id: item[meta.keyId], ...item}))
                    } else {
                        data = json.map((item, id) => ({id, ...item}))
                    }
                }
            } else if (meta.keyId) {
                data = json.map((item: any) => ({...item, id: item[meta.keyId], _id: item.id}))
            }
        }
    }
    return {
        status,
        headers,
        data,
        json: data,
        body,
    }
};
