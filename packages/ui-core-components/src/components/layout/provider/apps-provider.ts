import {GET, IInputProvider, IProviderOutPut} from '@dgtx/ui-scl';
import {getApps} from '../mokup';
const APPS_RESOURCE = "apps-root";
const appsResource = (input: IInputProvider): IProviderOutPut => {
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
                    data: getApps(),
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
export {appsResource, APPS_RESOURCE};

