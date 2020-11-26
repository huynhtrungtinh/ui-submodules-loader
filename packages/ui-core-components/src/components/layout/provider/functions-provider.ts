import {GET, IInputProvider, IProviderOutPut} from '@dgtx/ui-scl';
import {PROJECTS_OPERATION_KEY, PROJECTS_TRAINING_KEY} from '../constants';
import {getFunctionsOperation, getFunctionsTraining} from '../mokup';
const FUNCTIONS_RESOURCE = "functions-root";
const functionsResource = (input: IInputProvider): IProviderOutPut => {
    const {type, params = {}, apiURI} = input;
    const {appName} = params;
    switch (type) {
        case GET:
            if (appName === PROJECTS_OPERATION_KEY) {
                return {
                    uri: `${apiURI.API_UAC_URI}/apps`,
                    type: 'json',
                    body: null,
                    method: 'GET',
                    response: {
                        blod: null,
                        data: getFunctionsOperation(),
                        headers: null,
                        response: null,
                        status: 200
                    }
                }
            } else if (PROJECTS_TRAINING_KEY) {
                return {
                    uri: '',
                    response: {
                        blod: null,
                        data: getFunctionsTraining(),
                        headers: null,
                        response: null,
                        status: 200
                    }
                }
            }
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

