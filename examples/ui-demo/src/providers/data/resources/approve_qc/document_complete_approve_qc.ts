import {
    fetchJson,
    getAppName, UPDATE
} from '@dgtx/ui-core';
import { BPMN_ENDPOINT } from "../../../../config";
import { IResource } from "../../registry";
const DOCUMENT_COMPLETE_APPROVE_QC_RESOURCE = "document_complete_approve_qc";

const DocumentCompleteApproveQCResource: IResource = (type: string, resource: string, params: any): Promise<any> => {
    switch (type) {
        case UPDATE: {
            // return Promise.resolve(
            //     {
            //         status: 400,
            //         headers: {},
            //         json: []
            //     }
            // )
            const { projectId, dataComplete } = params;
            if (projectId && dataComplete) {
                return fetchJson(`${BPMN_ENDPOINT}/apps/${getAppName()}/projects/${projectId}/tasks/complete`,
                    { method: 'PATCH', body: JSON.stringify(dataComplete) });
            } else {
                return Promise.reject(`params undefined: ${params}`);
            }
        }
        default:
            return Promise.reject(`${DOCUMENT_COMPLETE_APPROVE_QC_RESOURCE} Not support ${type}`);
    }
}

export {
    DocumentCompleteApproveQCResource,
    DOCUMENT_COMPLETE_APPROVE_QC_RESOURCE
};

