import { IResource } from "../registry";
import {
  GET_LIST,
  fetchJson,
  getApiURI,
} from '@dgtx/coreui';

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
}
