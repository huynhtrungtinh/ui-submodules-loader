
import {config} from '@dgtx/ui-utils';

const ACCESS_TOKEN_KEY = 'access_token';
const REFRESH_TOKEN_KEY = 'refresh_token';
const DEFAULT_USER_AGENT = 'Mozilla/5.0 (Windows NT 6.``1``) AppleWebKit/537.2 (KHTML, like Gecko) Safari/537.2';
const USER_AGENT = typeof navigator !== 'undefined' ? navigator.userAgent : DEFAULT_USER_AGENT;

class HttpError extends Error {
    status: any;
    body: null;
    constructor(message: any, status: any, body = null) {
        super(message);
        this.message = message;
        this.status = status;
        this.body = body;
        this.name = this.constructor.name;
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, this.constructor);
        } else {
            this.stack = new Error(message).stack;
        }
    }
}

const fetchJson = (url: any, options: any) => {
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
    const token = localStorage.getItem(ACCESS_TOKEN_KEY)
    if (token) {
        requestHeaders.set('Authorization', `Bearer ${token}`);
    }
    return fetch(url, {...options, headers: requestHeaders})
        .then(response =>
            response.text().then(text => ({
                status: response.status,
                statusText: response.statusText,
                headers: response.headers,
                body: text,
            }))
        )
        .then(({status, statusText, headers, body}: any): any => {
            let json;
            try {
                json = JSON.parse(body);
            } catch (e) {
                // not json, no big deal
                console.log('e: ', e);
            }
            if (status < 200 || status >= 300) {
                return Promise.reject(new HttpError(
                    (json && json.message) || statusText,
                    status,
                    json
                ));
            }
            return {status, headers, body, json};
        });
};

async function refreshToken() {
    const data: any = new URLSearchParams();
    data.append("client_id", "elrond");
    data.append("client_secret", "HiEldrond");
    data.append("grant_type", "refresh_token");
    data.append("refresh_token", localStorage.getItem(ACCESS_TOKEN_KEY));
    const option = {
        method: "POST",
        headers: new Headers({
            "user-agent": USER_AGENT,
            "Content-type": "application/x-www-form-urlencoded;charset=UTF-8"
        }),
        body: data
    }
    try {
        const result = await fetchJson(`${config.getApiOauthURI()}/token`, option);

        if (result.status === 200) {
            const access_token = result.json.access_token
            const refresh_token = result.json.refresh_token
            localStorage.setItem(ACCESS_TOKEN_KEY, access_token);
            localStorage.setItem(REFRESH_TOKEN_KEY, refresh_token);
        }
        return result;
    } catch (e) {
        console.log('e: ', e);
    }
    return null;
}
export {refreshToken, fetchJson, ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY};

