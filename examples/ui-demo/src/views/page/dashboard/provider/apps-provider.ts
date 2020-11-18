import {GET, IInputProvider, IProviderOutPut} from '@dgtx/ui-scl';
import {getCustomType} from '@dgtx/ui-utils';
const APPS_RESOURCE = "apps-dashbard";
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
                method: 'GET'
            }
        case getCustomType('DELETE'):
            return {
                uri: `${apiURI.API_UAC_URI}/apps`,
                type: 'json',
                body: null,
                method: 'GET'
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

