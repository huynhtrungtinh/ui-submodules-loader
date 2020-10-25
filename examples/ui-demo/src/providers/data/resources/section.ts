import { fetchJson, getApiURI, getAppName, GET_LIST } from "@dgtx/ui-core";
import { IResource } from "../registry";

const SECTIONS_RESOURCE = "sections";
const SectionsResource: IResource = (
  type: string,
  resource: string,
  params: any
): Promise<any> => {
  switch (type) {
    case GET_LIST: {
      const {projectId, layoutName} = params;
      if (layoutName) {
        // return Promise.resolve({
        //   status: 200,
        //   headers: {},
        //   json: getSections3()
        // });
        return fetchJson(
          `${getApiURI()}/apps/${getAppName()}/projects/${projectId}/section-definitions?layout_name=${layoutName}&attributes=position,visible,disable,double_typing`,
          {method: "GET"}
        );
      }
      break;
    }
    default:
      break;
  }
  return Promise.reject(
    `Provider ${resource} method:${type} not yet supported!`
  );
};

export { SectionsResource, SECTIONS_RESOURCE };

