import {
    fetchJson,

    getApiURI,
    getAppName, GET_LIST,

    UPDATE
} from "@dgtx/ui-core";
import { BPMN_ENDPOINT } from '../../../../config';
import { IResource } from "../../registry";
const TASKS_CLASSIFY_BATCH_RESOURCE = "task_classify_batch";

const TasksClassifyBatchResource: IResource = (type: string, resource: string, params: any): Promise<any> => {
  switch (type) {
    case GET_LIST: {
      const { projectId, processKey, taskDefKey, taskClaim, userName } = params;
      if (projectId && processKey && taskDefKey && taskClaim && userName) {
        return fetchJson(`${BPMN_ENDPOINT}/apps/${getAppName()}/projects/${projectId}/process-definition/key/${processKey}/tasks/key/${taskDefKey}/claim?maxResult=${taskClaim}`,
          { method: 'PATCH', body: JSON.stringify({ user_name: userName }) });
      } else {
        return Promise.reject(`params undefined: ${params}`);
      }
    }
    case UPDATE: {
      const { projectId, documentsId, records } = params;
      if (projectId && documentsId && records) {
        return fetchJson(`${getApiURI()}/apps/${getAppName()}/projects/${projectId}/documents?ids=${documentsId}&attributes=qc`,
          { method: 'PATCH', body: JSON.stringify(records) })
      } else {
        return Promise.reject(`params undefined: ${params}`);
      }
    }
    default:
      return Promise.reject(`${TASKS_CLASSIFY_BATCH_RESOURCE} Not support ${type}`);
  }
};

export { TasksClassifyBatchResource, TASKS_CLASSIFY_BATCH_RESOURCE };
