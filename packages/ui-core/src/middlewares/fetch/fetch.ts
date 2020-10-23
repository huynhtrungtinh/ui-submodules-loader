
import { FETCH_START, FETCH_ERROR, FETCH_END, addAwaitRefresh, isRefresh } from '../../actions'
import { convertHTTPResponse } from '../../utils';
export default (dataProvider: any) => ({ dispatch, getState }: any) => (next: any) => (action: any) => {
    if (!dataProvider) {
        console.warn('api needed dataProvider');
        return () => null;
    }
    if (action.type.indexOf('@DGS/API') > -1
        && ['LOADING', 'FAILURE', 'SUCCESS'].every(item => (action.type.indexOf(item) === -1))) {
        if (isRefresh()) {
            dispatch(addAwaitRefresh(action))
        } else {
            const {
                type,
                payload,
                meta: { fetch: fetchMeta, onSuccess, onFailure, ...meta },
            } = action;
            const restType = fetchMeta;
            dispatch({ type: FETCH_START })
            dispatch({ type: `${type}/LOADING` })
            dataProvider(restType, meta.resource, payload).then(async (response: any) => {
                response = convertHTTPResponse(response, meta)
                let onSuccessIn = onSuccess;
                if (typeof onSuccess === 'function') {
                    onSuccessIn = onSuccess({ dispatch, getState, result: response })
                    if (onSuccessIn instanceof Promise) {
                        onSuccessIn = {}
                    }
                }
                dispatch({
                    type: `${type}/SUCCESS`,
                    payload: response,
                    requestPayload: payload,
                    meta: {
                        ...meta,
                        ...onSuccessIn,
                        fetchResponse: restType,
                        fetchStatus: FETCH_END,
                    },
                })
                dispatch({ type: FETCH_END })
            }).catch((error: any) => {
                if (error.status === 401) {
                    dispatch(addAwaitRefresh(action))
                    dispatch({ type: FETCH_END })
                } else {
                    // if (error.status === 404) {
                    //     let onSuccessIn = onSuccess;
                    //     if (typeof onSuccess === 'function') {
                    //         onSuccessIn = onSuccess({ dispatch, getState, result: [] })
                    //         if (onSuccessIn instanceof Promise) {
                    //             onSuccessIn = {}
                    //         }
                    //     }
                    //     dispatch({
                    //         type: `${type}/SUCCESS`,
                    //         payload: { json: [] },
                    //         requestPayload: payload,
                    //         meta: {
                    //             ...meta,
                    //             ...onSuccessIn,
                    //             fetchResponse: restType,
                    //             fetchStatus: FETCH_END,
                    //         }
                    //     })
                    // } else {
                        let onFailureIn = onFailure;
                        if (typeof onFailure === 'function') {
                            onFailureIn = onFailure({ dispatch, getState, result: error })
                            if (onFailureIn instanceof Promise) {
                                onFailureIn = {}
                            }
                        }
                        dispatch({
                            type: `${type}/FAILURE`,
                            error: error.message ? error.message : error,
                            payload: error.body ? error.body : null,
                            requestPayload: payload,
                            meta: {
                                ...meta,
                                ...onFailure,
                                fetchResponse: restType,
                                fetchStatus: FETCH_ERROR,
                            }
                        })
                    // }
                    dispatch({ type: FETCH_END })
                }
            })
        }
    } else {
        return next(action);
    }
}