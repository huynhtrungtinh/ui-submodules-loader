import {GET, IInputProvider, IProviderOutPut} from '@dgtx/ui-scl';
import {getProjectsTraining} from '../mokup';
const PROJECTS_TRAINING_RESOURCE = "projects-training-root";
const projectsTrainingResource = (input: IInputProvider): IProviderOutPut => {
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
                    data: getProjectsTraining(),
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
export {projectsTrainingResource, PROJECTS_TRAINING_RESOURCE};

