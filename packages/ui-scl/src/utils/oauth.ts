import {decode} from 'jws';
import {ACCESS_TOKEN_KEY, getApiOauthURI, getAuthenProvider, REFRESH_TOKEN_KEY, USER_AGENT, USER_METADATA_KEY} from '../constants';
import {CurrentUserEntity} from '../models';
import {fetchJson} from './fetch';
export const AUTH_VERSION = 1;
function getOption(body: any) {
    return {
        method: "POST",
        headers: new Headers({
            "user-agent": USER_AGENT,
            "Content-type": "application/x-www-form-urlencoded;charset=UTF-8"
        }),
        body
    }
}
async function doLogin(username: string, password: string) {
    const authenProvider = getAuthenProvider()
    if (authenProvider.doLogin) {
        const result = await authenProvider.doLogin(username, password)
        setToken(result);
        const {access_token, refresh_token, ...user} = result;
        return {
            access_token,
            refresh_token,
            user,
            data: result
        };
    } else {
        const data = new URLSearchParams();
        data.append('client_id', 'elrond');
        data.append('client_secret', 'HiEldrond');
        data.append('grant_type', 'password');
        data.append('username', username);
        data.append('password', password);
        const result = await fetchJson(`${getApiOauthURI()}/token`, getOption(data));
        setToken(result.json);
        const {access_token, refresh_token, ...user} = result.json;
        return {
            access_token,
            refresh_token,
            user,
            data: result.json
        };
    }
}
async function refreshToken() {
    const authenProvider = getAuthenProvider()
    if (authenProvider.doRefresh) {
        const result = await authenProvider.doRefresh(getRefreshToken() || '');
        setToken(result);
        return result;
    } else {
        const data = new URLSearchParams();
        data.append('client_id', 'elrond');
        data.append('client_secret', 'HiEldrond');
        data.append('grant_type', 'refresh_token');
        data.append('refresh_token', getRefreshToken() || '');
        const result = await fetchJson(`${getApiOauthURI()}/token`, getOption(data));
        setToken(result.json);
        return result;
    }
}
function clearToken() {
    localStorage.removeItem(ACCESS_TOKEN_KEY)
    localStorage.removeItem(REFRESH_TOKEN_KEY)
    localStorage.removeItem(USER_METADATA_KEY)
    return true;
}
function setToken(data: any) {
    if (data) {
        // const { access_token, refresh_token } = data;
        localStorage.setItem(ACCESS_TOKEN_KEY, data.access_token);
        localStorage.setItem(REFRESH_TOKEN_KEY, data.refresh_token);
        // localStorage.setItem(USER_METADATA_KEY, b64EncodeUnicode(JSON.stringify(user)));
        return true;
    }
    return false
}

async function getUserMetaData() {
    const authenProvider = getAuthenProvider()
    if (authenProvider.getUserInfo) {
        try {
            const result = await authenProvider.getUserInfo();
            return new CurrentUserEntity({
                username: result.username,
                displayName: result.displayName,
                email: result.email,
            })

        } catch (error) {
            return new CurrentUserEntity({
                username: '',
                displayName: '',
                email: '',
            })
        }
    } else {
        try {
            let token = getAccessToken() || ''
            let user = JSON.parse(decode(token).payload)
            return new CurrentUserEntity({
                username: user.username,
                displayName: user.displayName,
                email: user.email,
            })
        } catch (error) {
            return null
        }
    }
}
function getAccessToken() {
    return localStorage.getItem(ACCESS_TOKEN_KEY);
}
function getRefreshToken() {
    return localStorage.getItem(REFRESH_TOKEN_KEY);
}

export {getAccessToken, getRefreshToken, getUserMetaData, refreshToken, clearToken, doLogin};

