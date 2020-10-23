import {
  fetchJson,
  getAppName,
  GET_LIST,
  getApiURI,
} from "@dgtx/coreui";
import { IResource } from "../registry";
const PROJECT_LABEL_RESOURCE = "project_labels";
const ProjectLabelResource: IResource = (type, resource, params: any) => {
  switch (type) {
    case GET_LIST: {
      const { projectId } = params;
      return fetchJson(
        `${getApiURI()}/apps/${getAppName()}/projects/${projectId}/labels`
      );
    }
    default:
      break;
  }
  return Promise.reject(
    `Provider ${resource} method:${type} not yet supported!`
  );
};

export { ProjectLabelResource, PROJECT_LABEL_RESOURCE };
