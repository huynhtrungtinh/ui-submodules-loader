import {fetchJson, getApiURI, getAppName, GET_LIST} from '@dgtx/coreui';
// import {dataSection_sort} from '../../mockAPI';
import {IResource} from "../../registry";

const SECTION_ALL_QC_RESOURCE = "section_all_qc";

const SectionAllQCResource: IResource = (
  type: string,
  resource: string,
  params: any
): Promise<any> => {
  switch (type) {
    case GET_LIST: {
      // return Promise.resolve({
      //   status: 400,
      //   headers: {},
      //   json: dataSection_sort()
      // });
      // return Promise.resolve({
      //   status: 400,
      //   headers: {},
      //   json: dataSection_148()
      // });
      const {projectId, layoutName} = params;
      if (projectId) {
        return fetchJson(`${getApiURI()}/apps/${getAppName()}/projects/${projectId}/section-definitions?layout_name=${layoutName}&attributes=position,visible,disable,double_typing`)
      } else {
        return Promise.reject(`projectId undefined`)
      }
    }
    default:
      return Promise.reject(`${SECTION_ALL_QC_RESOURCE} Not support ${type}`);
  }
};

export {SectionAllQCResource, SECTION_ALL_QC_RESOURCE};

