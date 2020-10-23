import { doLogin, clearToken, redirectApp } from "../utils";
import { push } from 'connected-react-router'
import { getAuthenProvider } from '../constants';

export const USER_LOGIN = '@DGS/OAUTH/USER_LOGIN';
export const USER_INIT = '@DGS/OAUTH/USER_INIT';
export const USER_LOGIN_LOADING = '@DGS/OAUTH/USER_LOGIN_LOADING';
export const USER_LOGIN_FAILURE = '@DGS/OAUTH/USER_LOGIN_FAILURE';
export const USER_LOGIN_SUCCESS = '@DGS/OAUTH/USER_LOGIN_SUCCESS';

export const USER_LOGOUT = '@DGS/OAUTH/USER_LOGOUT';

export interface DataAuthActionResult {
    type: string,
    payload: object,
    meta: object
}

export const setUserCurrent = (user: any) => ({
    type: USER_INIT,
    payload: user
})

export const userLogin = (user: any, pathName: string, redirectTo: string) => async (dispatch: any) => {
    try {
        dispatch({ type: USER_LOGIN_LOADING, pathName })
        const responseData = await doLogin(user.username.toLowerCase(), user.password);
        dispatch({ type: USER_LOGIN_SUCCESS, payload: responseData.data })
        dispatch(push(redirectTo))
    } catch (error) {
        dispatch({ type: USER_LOGIN_FAILURE, payload: error })
        return error;
    }
}

export const userLogout = (redirectTo?: string) => async (dispatch: any) => {
    const authenProvider = getAuthenProvider()
    if (authenProvider.doLogout) {
        try {
            await authenProvider.doLogout()
        } catch (error) {
            console.log('==========authenProvider.doLogout==========================');
            console.log(error);
            console.log('====================================');
        }
    }
    clearToken();
    dispatch({ type: USER_LOGOUT })
    if (redirectTo) {
        dispatch(push(redirectTo))
    } else {
        redirectApp('/signin')
    }
}

