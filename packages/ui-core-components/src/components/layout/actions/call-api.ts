import {api} from '@dgtx/ui-core';
import {IFetchJsonOutPut} from '@dgtx/ui-scl';
import {get} from 'lodash';
import {setShowAlert} from '../../alert';
import {APPS_RESOURCE, CONTACT_INFO_RESOURCE, FUNCTIONS_RESOURCE, OTHER_APPS_RESOURCE, PROJECTS_OPERATION_RESOURCE, PROJECTS_TRAINING_RESOURCE} from '../provider';

export const callAPIGetContactInfo = () => async (dispatch: any) => {
    return new Promise((resolve) => {
        dispatch(
            api.get(
                CONTACT_INFO_RESOURCE,
                {},
                (res: IFetchJsonOutPut) => {
                    resolve({error: null, data: get(res, 'result.data', [])});
                }
            )
        );
    });
}

export const callAPIGetFunctionOtherApp = () => async (dispatch: any) => {
    return new Promise((resolve) => {
        dispatch(
            api.get(
                OTHER_APPS_RESOURCE,
                {},
                (res: IFetchJsonOutPut) => {
                    resolve({error: null, data: get(res, 'result.data', [])});
                }
            )
        );
    });
}

export const callAPIGetApps = () => async (dispatch: any) => {
    return new Promise((resolve) => {
        dispatch(
            api.get(
                APPS_RESOURCE,
                {},
                (res: IFetchJsonOutPut) => {
                    resolve({error: null, data: get(res, 'result.data', [])});
                }
            )
        );
    });
}

export const callAPIGetProjectsOperation = () => async (dispatch: any) => {
    return new Promise((resolve) => {
        dispatch(
            api.get(
                PROJECTS_OPERATION_RESOURCE,
                {},
                (res: IFetchJsonOutPut) => {
                    resolve({error: null, data: get(res, 'result.data', [])});
                }
            )
        );
    });
}

export const callAPIGetProjectsTraining = () => async (dispatch: any) => {
    return new Promise((resolve) => {
        dispatch(
            api.get(
                PROJECTS_TRAINING_RESOURCE,
                {},
                (res: IFetchJsonOutPut) => {
                    resolve({error: null, data: get(res, 'result.data', [])});
                }
            )
        );
    });
}

export const callAPIGetFunctionsOperation = (projectId: string | null, type: string) => async (dispatch: any) => {
    if (!projectId) {
        dispatch(setShowAlert('ProjectId is null', 'error'))
        return new Promise((resolve) => {
            resolve({
                error: {
                    code: 400,
                    messageViewClient: 'ProjectId is null',
                    messageFromServer: 'ProjectId is null',
                }
            });
        })
    }
    return new Promise((resolve) => {
        dispatch(
            api.get(
                FUNCTIONS_RESOURCE,
                {appName: type},
                (res: IFetchJsonOutPut) => {
                    resolve({error: null, data: get(res, 'result.data', [])});
                }
            )
        );
    });
}

