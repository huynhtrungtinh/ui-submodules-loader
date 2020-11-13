import {api} from '@dgtx/ui-core';
import {get} from 'lodash';
import {getContactInfo} from '../mokup';

export const callAPIGetContactInfo = () => async (dispatch: any) => {
    console.log('===========callAPIGetContactInfo==========');
    return new Promise((resolve) => {
        dispatch(
            api.get(
                'contact_info',
                {},
                (res: any) => {
                    console.log('=====onSuccess==============');
                    console.log('res: ', res);
                    console.log('res: ', get(res, 'result.data', []));
                    resolve({error: null, data: getContactInfo()});
                }
            )
        );
    });
}
