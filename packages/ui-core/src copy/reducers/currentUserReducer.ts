import { ICurrentUser, CurrentUserEntity } from '../models'
import {  USER_LOGIN_SUCCESS, USER_LOGOUT, USER_INIT } from '../actions/oauthAction';

class CurrentUserState {
    user: ICurrentUser;
    isInited: boolean;
    isChecking: boolean;
    isAuthenticated: boolean;
    isRefreshing: boolean;
    constructor(props?: ICurrentUser) {
        this.user = new CurrentUserEntity(props),
        this.isInited = false;
        this.isChecking = false;
        this.isAuthenticated = false;
        this.isRefreshing = false;
    }
}
export default (state: CurrentUserState = new CurrentUserState(), action: { type: string, payload?: ICurrentUser }) => {
    switch (action.type) {
        case USER_INIT:
            return {
                ...state,
                isInited:true,
                isAuthenticated:true,
                user:action.payload
            }
        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload,
            };
        case USER_LOGOUT:
            return new CurrentUserEntity()
        default:
            return state
    }

};