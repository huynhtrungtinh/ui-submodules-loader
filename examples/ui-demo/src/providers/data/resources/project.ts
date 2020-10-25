import {
    fetchJson,
    getApiURI, GET_LIST
} from '@dgtx/ui-core';
import { IResource } from "../registry";

const PROJECT_RESOURCE = "project";
const ProjectResource: IResource = (type: string, resource: string, params: any): Promise<any> => {
  switch (type) {
    case GET_LIST:
      return fetchJson(`${getApiURI()}/monitor/projects`)
    default:
      return Promise.reject(`projectProvider Not support ${type}`)
  }
}

export {
    ProjectResource,
    PROJECT_RESOURCE
};

