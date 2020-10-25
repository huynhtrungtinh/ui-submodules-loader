import {
    UPDATE
} from "@dgtx/ui-core";
import { IResource } from "../registry";
// import { BPMN_ENDPOINT } from '../../../config';
const SAVE_APPROVE_QC_RESOURCE = "save_approve_qc";
const SaveApproveQCResource: IResource = (type: string, resource: string, params: any): Promise<any> => {
    // const projectId = "342434234";
    switch (type) {
        case UPDATE: {
            // return fetchJson(`${BPMN_ENDPOINT}/apps/${getAppName()}/projects/${projectId}/tasks/complete`,
            //     { method: 'PATCH', body: JSON.stringify(params.dataSave) });
            // break;
        }
        default:
            return Promise.reject(`${SAVE_APPROVE_QC_RESOURCE} Not support ${type}`)
    }
}

export {
    SAVE_APPROVE_QC_RESOURCE,
    SaveApproveQCResource
};

