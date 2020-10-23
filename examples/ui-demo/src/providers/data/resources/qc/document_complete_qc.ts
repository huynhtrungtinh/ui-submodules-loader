import { IResource } from "../../registry";
import {
    UPDATE,
    fetchJson,
    getAppName,
} from '@dgtx/coreui';
import { BPMN_ENDPOINT } from "../../../../config";
const DOCUMENT_COMPLETE_QC_RESOURCE = "document_complete_qc";

const DocumentCompleteQCResource: IResource = (type: string, resource: string, params: any): Promise<any> => {
    switch (type) {
        case UPDATE: {
            // return Promise.resolve({
            //     status: 200,
            //     headers: {},
            //     json: {}
            //    });
            // return Promise.resolve({
            //     status: 200,
            //     headers: {},
            //     json: {
            //         "d6c08374-4f20-11ea-924b-02426b6f7e3f": {
            //             "error": {
            //                 "name": "NotFound",
            //                 "code": 404
            //             },
            //             "result": null
            //         },
            //         "d74bd3e7-4f20-11ea-924b-02426b6f7e3f": {
            //             "error": {
            //                 "name": "NotFound",
            //                 "code": 404
            //             },
            //             "result": null
            //         },
            //         "d760e29d-4f20-11ea-924b-02426b6f7e3f": {
            //             "error": {
            //                 "name": "NotFound",
            //                 "code": 404
            //             },
            //             "result": null
            //         }
            //     }
            // });
            const { projectId, dataComplete } = params;
            if (projectId && dataComplete) {
                return fetchJson(`${BPMN_ENDPOINT}/apps/${getAppName()}/projects/${projectId}/tasks/complete`,
                    { method: 'PATCH', body: JSON.stringify(dataComplete) });
            } else {
                return Promise.reject(`params undefined: ${params}`);
            }
        }
        default:
            return Promise.reject(`${DOCUMENT_COMPLETE_QC_RESOURCE} Not support ${type}`);
    }
}

export {
    DocumentCompleteQCResource,
    DOCUMENT_COMPLETE_QC_RESOURCE
}
