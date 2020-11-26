import {GET, IInputProvider, IProviderOutPut} from '@dgtx/ui-scl';
import {getFunctionOtherApps} from '../mokup';

const OTHER_APPS_RESOURCE = "other-apps-root";
const otherAppsResource = (input: IInputProvider): IProviderOutPut => {
    const {type, apiURI} = input;
    switch (type) {
        case GET:
            return {
                uri: `${apiURI.API_UAC_URI}/apps`,
                type: 'json',
                body: null,
                method: 'GET',
                response: {
                    blod: null,
                    data: getFunctionOtherApps(),
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

export {otherAppsResource, OTHER_APPS_RESOURCE};

