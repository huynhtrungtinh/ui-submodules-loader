import {api} from '@dgtx/ui-core';
import {IFetchJsonOutPut} from '@dgtx/ui-scl';
import {get} from 'lodash';
import {APPS_RESOURCE, CONTACT_INFO_RESOURCE, FUNCTIONS_RESOURCE, PROJECTS_OPERATION_RESOURCE, PROJECTS_TRAINING_RESOURCE, SCOPE_RESOURCE} from '../provider';

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

export const callAPIGetScope = () => async (dispatch: any) => {
    return new Promise((resolve) => {
        dispatch(
            api.get(
                SCOPE_RESOURCE,
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

export const callAPIGetFunctions = () => async (dispatch: any) => {
    return new Promise((resolve) => {
        dispatch(
            api.get(
                FUNCTIONS_RESOURCE,
                {},
                (res: IFetchJsonOutPut) => {
                    resolve({error: null, data: get(res, 'result.data', [])});
                }
            )
        );
    });
}
