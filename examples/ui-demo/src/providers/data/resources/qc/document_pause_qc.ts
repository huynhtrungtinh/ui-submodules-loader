import {fetchJson, getApiURI, getAppName, GET_LIST, UPDATE} from '@dgtx/coreui';
import {IResource} from "../../registry";
const DOCUMENT_PAUSE_QC_RESOURCE = "document_pause_qc";

const DocumentPauseQCResource: IResource = (type: string, resource: string, params: any): Promise<any> => {
    switch (type) {
        case GET_LIST: {
            return Promise.resolve({
                status: 200,
                headers: {},
                json: {}
            });
            const {projectId, userName, taskIds, taskDefinitionKey} = params;
            if (projectId && userName && taskIds && taskDefinitionKey) {
                return fetchJson(`${getApiURI()}/apps/${getAppName()}/projects/${projectId}/qc-pause/${userName}/lasted/${taskIds}/${taskDefinitionKey}`, {method: 'GET'});
            } else {
                return Promise.reject(`params undefined: ${params}`);
            }
        }
        case UPDATE: {
            const {projectId, userName, data} = params;
            if (projectId && userName && data) {
                return fetchJson(`${getApiURI()}/apps/${getAppName()}/projects/${projectId}/qc-pause/${userName}`,
                    {method: 'POST', body: JSON.stringify(data)});
            } else {
                return Promise.reject(`params undefined: ${params}`);
            }
        }
        default:
            return Promise.reject(`${DOCUMENT_PAUSE_QC_RESOURCE} Not support ${type}`);
    }
}

export {DocumentPauseQCResource, DOCUMENT_PAUSE_QC_RESOURCE};

