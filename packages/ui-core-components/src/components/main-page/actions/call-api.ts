import {api} from '@dgtx/ui-core';
import {IFetchJsonOutPut} from '@dgtx/ui-scl';
import {get} from 'lodash';
import {SCOPE_RESOURCE} from '../provider';
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


