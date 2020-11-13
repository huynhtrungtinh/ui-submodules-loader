
import {FAILURE_KEY, IUserInfoOutPut, REQUEST_KEY, SUCCESS_KEY} from '@dgtx/ui-scl';
import {getAccessToken, getRefreshToken} from '@dgtx/ui-utils';
import {checkTokenExpiration, effectTokenExpiration, fetchEnd, fetchError, fetchStart} from '../../actions';

interface IEffectProvider {
    action: any;
    dispatch: any;
    getState: any;
    dataProvider: any;
}

function effectProvider({action, dispatch, getState, dataProvider}: IEffectProvider) {
    const {
        type,
        payload,
        meta: {fetch: fetchMeta, onResponse, ...meta},
    } = action;
    console.log('======effectProvider===========');
    const restType = fetchMeta;
    dispatch(fetchStart());
    dispatch({type: `${type}/${REQUEST_KEY}`})
    console.log('restType: ', restType);
    console.log('meta.resource: ', meta.resource);
    console.log('payload: ', payload);
    dataProvider(restType, meta.resource, payload).then(async (response: any) => {
        console.log('response: ', response);
        let onResponseIn = onResponse;
        if (typeof onResponseIn === 'function') {
            onResponseIn = onResponse({dispatch, getState, result: response})
            if (onResponseIn instanceof Promise) {
                onResponseIn = {}
            }
        }
        dispatch({
            type: `${type}/${SUCCESS_KEY}`,
            payload: response,
            meta: {
                ...meta,
                ...onResponseIn,
                fetchResponse: restType
            }
        })
        dispatch(fetchEnd());
    }).catch((error: any) => {
        let onResponseIn = onResponse;
        if (typeof onResponseIn === 'function') {
            onResponseIn = onResponse(
                {
                    dispatch, getState, result: {
                        blob: null,
                        data: error,
                        headers: null,
                        response: null,
                        status: 500
                    }
                }
            )
            if (onResponseIn instanceof Promise) {
                onResponseIn = {}
            }
        }
        dispatch({
            type: `${type}/${FAILURE_KEY}`,
            payload: error.body ? error.body : null,
            meta: {
                ...meta,
                ...onResponseIn,
                fetchResponse: restType
            }
        })
        dispatch(fetchError());
    })
    console.log('====================================');
}

const createAPIMiddleware = (dataProvider: any) => ({dispatch, getState}: any) => (next: any) => (action: any) => {
    if (!dataProvider) {
        console.warn('api needed dataProvider');
        return () => null;
    }
    if (action.type.indexOf('@DGS/API') > -1
        && [REQUEST_KEY, SUCCESS_KEY, FAILURE_KEY].every(item => (action.type.indexOf(item) === -1))) {
        const accessToken = getAccessToken();
        const refreshToken = getRefreshToken();
        const tokenExp = checkTokenExpiration(accessToken, refreshToken);
        console.log('tokenExp: ', tokenExp);
        // console.log('dataProvider: ', dataProvider);
        // console.log('tokenExp: ', tokenExp);
        // console.log('action: ', action);
        if (tokenExp.isRefresh || !tokenExp.token) {
            dispatch(effectTokenExpiration(true)).then((res: IUserInfoOutPut) => {
                if (res.status === 200) {
                    effectProvider({action, dispatch, getState, dataProvider});
                }
            });
        } else {
            effectProvider({action, dispatch, getState, dataProvider});
        }
    } else {
        return next(action);
    }
}
export default createAPIMiddleware;
export {createAPIMiddleware};

