import { refreshToken } from '../utils'
import { userLogout } from './oauthAction'
let isRefreshIn = false;
let actionsIn: any[] = [];
export const isRefresh = () => {
    return isRefreshIn;
}
const setRefresh = (isRefresh: boolean) => {
    isRefreshIn = isRefresh;
}


const addAction = (action: any): void => {
    actionsIn = [...actionsIn, action]
}
const getActions = () => {
    return actionsIn;
}
const clearActions = () => {
    actionsIn = []
}

const addAwaitRefresh = (action: any) => (dispatch: any) => {
    addAction(action)
    if (!isRefresh()) {
        setRefresh(true);
        refreshToken().then(() => {
            setRefresh(false);
            getActions().map(item => {
                dispatch(item)
            });
            clearActions()
        }).catch(() => {
            dispatch(userLogout())
        })
    }
}

export {
    addAwaitRefresh
}