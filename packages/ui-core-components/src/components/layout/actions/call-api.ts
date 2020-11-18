import {api} from '@dgtx/ui-core';
import {IFetchJsonOutPut} from '@dgtx/ui-scl';
import {get} from 'lodash';
import {APPS_RESOURCE, CONTACT_INFO_RESOURCE, FUNCTIONS_RESOURCE, PROJECTS_RESOURCE, SCOPE_RESOURCE} from '../provider';

export const callAPIGetContactInfo = () => async (dispatch: any) => {
    console.log('===========callAPIGetContactInfo==========');
    return new Promise((resolve) => {
        dispatch(
            api.get(
                CONTACT_INFO_RESOURCE,
                {},
                (res: IFetchJsonOutPut) => {
                    console.log('===== onSuccess ==============');
                    console.log('res: ', res);
                    console.log('res: ', get(res, 'result.data', []));
                    resolve({error: null, data: get(res, 'result.data', [])});
                }
            )
        );
    });
}

export const callAPIGetScope = () => async (dispatch: any) => {
    console.log('===========callAPIGetScope==========');
    return new Promise((resolve) => {
        dispatch(
            api.get(
                SCOPE_RESOURCE,
                {},
                (res: IFetchJsonOutPut) => {
                    console.log('===== onSuccess ==============');
                    console.log('res: ', res);
                    console.log('res.result.data: ', get(res, 'result.data', []));
                    resolve({error: null, data: get(res, 'result.data', [])});
                }
            )
        );
    });
}

export const callAPIGetApps = () => async (dispatch: any) => {
    console.log('===========callAPIGetApps==========');
    return new Promise((resolve) => {
        dispatch(
            api.get(
                APPS_RESOURCE,
                {},
                (res: IFetchJsonOutPut) => {
                    console.log('===== onSuccess ==============');
                    console.log('res: ', res);
                    console.log('res.result.data: ', get(res, 'result.data', []));
                    resolve({error: null, data: get(res, 'result.data', [])});
                }
            )
        );
    });
}

export const callAPIGetProjects = () => async (dispatch: any) => {
    console.log('===========callAPIGetProjects==========');
    return new Promise((resolve) => {
        dispatch(
            api.get(
                PROJECTS_RESOURCE,
                {},
                (res: IFetchJsonOutPut) => {
                    console.log('===== onSuccess ==============');
                    console.log('res: ', res);
                    console.log('res.result.data: ', get(res, 'result.data', []));
                    resolve({error: null, data: get(res, 'result.data', [])});
                }
            )
        );
    });
}

export const callAPIGetFunctions = () => async (dispatch: any) => {
    console.log('===========callAPIGetFunctions==========');
    return new Promise((resolve) => {
        dispatch(
            api.get(
                FUNCTIONS_RESOURCE,
                {},
                (res: IFetchJsonOutPut) => {
                    console.log('===== onSuccess ==============');
                    console.log('res: ', res);
                    console.log('res.result.data: ', get(res, 'result.data', []));
                    resolve({error: null, data: get(res, 'result.data', [])});
                }
            )
        );
    });
}
