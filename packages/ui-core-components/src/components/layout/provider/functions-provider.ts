import {GET, IInputProvider, IProviderOutPut} from '@dgtx/ui-scl';
import {getFunctions} from '../mokup';
const FUNCTIONS_RESOURCE = "functions-root";
const functionsResource = (input: IInputProvider): IProviderOutPut => {
    const {type, resource, params, apiURI} = input;
    console.log('====functionsResource===============');
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
                    data: getFunctions(),
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
export {functionsResource, FUNCTIONS_RESOURCE};

