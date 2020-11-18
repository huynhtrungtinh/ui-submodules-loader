import {GET, IInputProvider, IProviderOutPut} from '@dgtx/ui-scl';
import {getContactInfo} from '../mokup';
const CONTACT_INFO_RESOURCE = "contact-info-root";
const contactInfoResource = (input: IInputProvider): IProviderOutPut => {
    const {type, resource, params, apiURI} = input;
    console.log('====contactInfoResource===============');
    console.log('type: ', type);
    console.log('resource: ', resource);
    console.log('params: ', params);
    console.log('apiURI: ', apiURI);
    console.log('====================================');
    switch (type) {
        case GET:
            return {
                uri: `${apiURI.API_UAC_URI}/apps`,
                type: 'json',
                body: null,
                method: 'GET',
                response: {
                    blod: null,
                    data: getContactInfo(),
                    headers: null,
                    response: null,
                    status: 200
                }
            }
        default:
            return {
                uri: '',
                response: {
                    blod: null,
                    data: [],
                    headers: null,
                    response: null,
                    status: 200
                }
            }
    }
}
export {contactInfoResource, CONTACT_INFO_RESOURCE};

