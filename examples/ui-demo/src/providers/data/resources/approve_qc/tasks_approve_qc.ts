import {
    fetchJson,

    getApiURI,
    getAppName, GET_LIST,

    UPDATE
} from "@dgtx/ui-core";
import { BPMN_ENDPOINT } from "../../../../config";
import { IResource } from "../../registry";

const TASKS_APPROVE_QC_RESOURCE = "tasks_approve_qc";

const TasksApproveQCResource: IResource = (
  type: string,
  resource: string,
  params: any
): Promise<any> => {
  switch (type) {
    case GET_LIST: {

      const {projectId, taskId, userName} = params;

      //  return Promise.resolve({
      //   status: 400,
      //   headers: {},
      //   json: data_checkbox_approve(),
      // });
      if (taskId && projectId && userName) {
        return fetchJson(`${BPMN_ENDPOINT}/apps/${getAppName()}/projects/${projectId}/process-definition/key/qc/tasks/key/${taskId}/claim`,
          {method: 'PATCH', body: JSON.stringify({user_name: userName})})
      } else {
        return Promise.reject(`params undefined: ${params}`);
      }
    }
    case UPDATE: {
      const {projectId, documentsId, records} = params;
      if (projectId && documentsId && records) {
        return fetchJson(
          `${getApiURI()}/apps/${getAppName()}/projects/${projectId}/documents?ids=${documentsId}&attributes=qc`,
          {method: "PATCH", body: JSON.stringify(records)}
        );
      } else {
        return Promise.reject(`params undefined: ${params}`);
      }
    }
    default:
      return Promise.reject(`${TASKS_APPROVE_QC_RESOURCE} Not support ${type}`);
  }
};

export { TasksApproveQCResource, TASKS_APPROVE_QC_RESOURCE };

