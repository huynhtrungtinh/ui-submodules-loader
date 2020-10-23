import {fetchJson, getApiURI, getAppName, GET_LIST} from '@dgtx/coreui';
import {IResource} from "../../registry";

const MAX_CLAIM_QC_RESOURCE = "max_claim_task_qc";

const MaxLengthQCResource: IResource = (
  type: string,
  resource: string,
  params: any
): Promise<any> => {
  switch (type) {
    case GET_LIST: {
      return Promise.resolve({
        status: 200,
        headers: {},
        json: {"max_claim_task_qc": 50}
      });
      const {projectId} = params;
      if (projectId) {
        return fetchJson(`${getApiURI()}/apps/${getAppName()}/projects/${projectId}/max-claim-task-qc`)
      } else {
        return Promise.reject(`projectId undefined`)
      }
    }
    default:
      return Promise.reject(`${MAX_CLAIM_QC_RESOURCE} Not support ${type}`);
  }
};

export {MaxLengthQCResource, MAX_CLAIM_QC_RESOURCE};

