import { fetchJson, getApiURI, getAppName, GET_LIST, UPDATE } from "@dgtx/ui-core";
import { BPMN_ENDPOINT } from '../../../../config';
// import {dataQC_sort} from '../../mockAPI';
import { IResource } from "../../registry";
const TASKS_QC_RESOURCE = "tasks_qc";

const TasksQCResource: IResource = (
  type: string,
  resource: string,
  params: any
): Promise<any> => {
  switch (type) {
    case GET_LIST: {
      // return Promise.resolve({
      //   status: 400,
      //   headers: {},
      //   json: dataQC_sort(),
      // });
      // return Promise.resolve({
      //   status: 400,
      //   headers: {},
      //   json: dataQC_HSunlife(),
      // });
      const {projectId, processKey, taskId, taskClaim, userName} = params;
      if (projectId && processKey && taskId && taskClaim && userName) {
        return fetchJson(`${BPMN_ENDPOINT}/apps/${getAppName()}/projects/${projectId}/process-definition/key/${processKey}/tasks/key/${taskId}/claim?maxResult=${taskClaim}`,
          {method: 'PATCH', body: JSON.stringify({user_name: userName})});
      } else {
        return Promise.reject(`params undefined: ${params}`);
      }
    }
    case UPDATE: {
      const {projectId, documentsId, records} = params;
      if (projectId && documentsId && records) {
        return fetchJson(`${getApiURI()}/apps/${getAppName()}/projects/${projectId}/documents?ids=${documentsId}&attributes=qc`,
          {method: 'PATCH', body: JSON.stringify(records)})
      } else {
        return Promise.reject(`params undefined: ${params}`);
      }
    }
    default:
      return Promise.reject(`${TASKS_QC_RESOURCE} Not support ${type}`);
  }
};

export { TasksQCResource, TASKS_QC_RESOURCE };

