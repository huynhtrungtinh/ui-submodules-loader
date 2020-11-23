import {GET, IInputProvider, IProviderOutPut} from '@dgtx/ui-scl';
import {getProjects} from '../mokup';
const PROJECTS_RESOURCE = "projects-root";
const projectsResource = (input: IInputProvider): IProviderOutPut => {
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
                    data: getProjects(),
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
export {projectsResource, PROJECTS_RESOURCE};

