import {GET, IInputProvider, IProviderOutPut} from '@dgtx/ui-scl';
import {getScope} from '../mokup';
// import {fetchJson, getApiUacURI} from '@dgtx/ui-utils';
// import {getScope} from '../mokup';

const SCOPE_RESOURCE = "scope-root";
const scopeResource = (input: IInputProvider): IProviderOutPut => {
    const {type, resource, params, apiURI} = input;
    console.log('====scope-provider=========scope-root===============');
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
                    data: getScope(),
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

export {scopeResource, SCOPE_RESOURCE};

