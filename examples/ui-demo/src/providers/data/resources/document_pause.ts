import {
  GET_ONE,
  UPDATE,
  fetchJson,
  getAppName,
  getApiURI
} from '@dgtx/coreui';
import { IResource } from "../registry";
const DOCUMENT_PAUSE_RESOURCE = "document_pause";
const DocumentPauseResource: IResource = (type, resource, params: any) => {
  switch (type) {
    case GET_ONE: {
      const { projectId, taskId, username } = params;
      return fetchJson(`${getApiURI()}/apps/${getAppName()}/projects/${projectId}/document-pause/${taskId}/${username}/lasted-bk`, { method: 'GET' });
    }
    case UPDATE: {
      const { projectId, taskId, username, data } = params;
      return fetchJson(`${getApiURI()}/apps/${getAppName()}/projects/${projectId}/document-pause/${taskId}/${username}`,
        { method: 'POST', body: JSON.stringify(data) });
    }
    default:
      break;
  }
  return Promise.reject(`Provider ${resource} method:${type} not yet supported!`)
};


export { DocumentPauseResource, DOCUMENT_PAUSE_RESOURCE };
