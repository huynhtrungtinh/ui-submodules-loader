import {getApiUacURI} from '@dgtx/ui-utils';
import axios from 'axios';

export const callAPIGetInfoContact = async () => {
    return await axios.get(`${getApiUacURI()}/gui-configurations/info-contact`)
        .then((res: {data: any;}) => {
            console.log('res: ', res)
            return {error: null, data: res.data || {}}
        })
        .catch((error: any) => {
            console.log('error: ', error)
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
            return {error: null, data: []}
        });
};
