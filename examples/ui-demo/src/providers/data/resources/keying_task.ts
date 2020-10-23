import {fetchJson, getAppName, GET_ONE, UPDATE} from "@dgtx/coreui";
import {BPMN_ENDPOINT} from "../../../config";
import {IResource} from "../registry";

const KEYING_TASK_RESOURCE = "keying_task";
const KeyingResource: IResource = (type, resource, params: any) => {
  switch (type) {
    case GET_ONE: {
      const {projectId, taskKeyDef, username} = params;
      // return Promise.resolve(
      //   {
      //     status: 200,
      //     headers: {},
      //     json: getTask3()
      //   }
      // )
      // return fetchJson(`${BPMN_ENDPOINT}/apps/${getAppName()}/projects/${'5d67510d3fa8a9001ed3c23f'}/process-definition/key/start/tasks/key/${'Form_1'}/claim`,
      //   { method: 'PATCH', body: JSON.stringify({ user_name: username }) })

      return fetchJson(
        `${BPMN_ENDPOINT}/apps/${getAppName()}/projects/${projectId}/process-definition/key/start/tasks/key/${taskKeyDef}/claim`,
        {method: "PATCH", body: JSON.stringify({user_name: username})}
      );
    }
    case UPDATE: {
      const {projectId, taskId, data} = params;
      return fetchJson(
        `${BPMN_ENDPOINT}/apps/${getAppName()}/projects/${projectId}/tasks/${taskId}/complete`,
        {method: "PATCH", body: JSON.stringify(data)}
      );
      // return fetchJson(`${BPMN_ENDPOINT}/apps/${APP_NAME}/projects/${projectId}/tasks/${taskId}/complete--test-failed`, { method: 'PATCH', body: JSON.stringify(data) })
    }
    default:
      break;
  }
  return Promise.reject(
    `Provider ${resource} method:${type} not yet supported!`
  );
};

export {KeyingResource, KEYING_TASK_RESOURCE};

