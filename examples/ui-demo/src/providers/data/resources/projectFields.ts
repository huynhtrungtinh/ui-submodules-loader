import { IResource } from "../registry";
import {
  GET_LIST,
  fetchJson,
  getApiURI,
} from '@dgtx/coreui';

const PROJECT_FIELDS_RESOURCE = "project_fields";
const ProjectFieldsResource: IResource = (type: string, resource: string, params: any): Promise<any> => {
  switch (type) {
    case GET_LIST:
      return fetchJson(`${getApiURI()}/monitor/projects/${params.projectName}/configs/fields`)
    default:
      return Promise.reject(`projectProvider Not support ${type}`)
  }
}

export {
  ProjectFieldsResource,
  PROJECT_FIELDS_RESOURCE
}
