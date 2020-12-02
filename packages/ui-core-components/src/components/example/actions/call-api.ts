import {api} from '@dgtx/ui-core';
import {IFetchJsonOutPut} from '@dgtx/ui-scl';
import {get} from 'lodash';
import {APPS_RESOURCE} from '../provider';

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
