import {
    fetchJson,
    getAppName, GET_LIST
} from '@dgtx/ui-core';
// import { getHumanTaskApproveQC } from '../../mockAPI/approve_qc'
import { BPMN_ENDPOINT } from '../../../../config';
import { IResource } from "../../registry";
const HUMAN_TASK_APPROVE_QC_RESOURCE = "human_task_approve_qc";

const HumanTaskApproveQCResource: IResource = (type: string, resource: string, params: any): Promise<any> => {
    switch (type) {
        case GET_LIST: {
            // return Promise.resolve(
            //     {
            //         status: 400,
            //         headers: {},
            //         json: getHumanTaskApproveQC()
            //     }
            // )
            const {projectId} = params;
            if (projectId) {
                return fetchJson(`${BPMN_ENDPOINT}/apps/${getAppName()}/projects/${projectId}/human-task?type=qc`,
                    {method: 'GET'})
            } else {
                return Promise.reject(`params undefined: ${params}`);
            }
        }
        default:
            return Promise.reject(`${HUMAN_TASK_APPROVE_QC_RESOURCE} Not support ${type}`)
    }
}

export {
    HumanTaskApproveQCResource,
    HUMAN_TASK_APPROVE_QC_RESOURCE
};

