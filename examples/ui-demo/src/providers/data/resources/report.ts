import { IResource } from "../registry";
import {
  GET_LIST,
  fetchJson,
  getApiURI
} from "@dgtx/coreui";

const REPORT_RESOURCE = "report";
const ReportResource: IResource = (
  type: string,
  resource: string,
  params: any
): Promise<any> => {
  switch (type) {
    case GET_LIST:
      return fetchJson(
        `${getApiURI()}/monitor/projects/${params.projectName}/reports${
          params.queries ? "?" + params.queries : ""
        }`
      )
        .then(function(res) {
          return res;
        })
        .catch(function(res) {
          return [];
        });
    default:
      return Promise.reject(`projectProvider Not support ${type}`);
  }
};

export { ReportResource, REPORT_RESOURCE };
