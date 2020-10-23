import {
  fetchJson,
  getApiURI,
  getAppName, GET_LIST
} from '@dgtx/coreui';
import {IResource} from "../../registry";

// import {
//   // getDataSection_067_190510_013_STORE_FRONT_ATTR_ANNO,
//   // dataSection_165_v1,
//   // dataSection_040,
//   // data_huy_section,
//   data_checkbox_section
// } from '../../mockAPI';
// import { dataSection_040 } from '../../mockAPI/qc/dataSection_040'

const SECTION_ALL_APPROVE_QC_RESOURCE = "section_all_approve_qc";

const SectionAllApproveQCResource: IResource = (
  type: string,
  resource: string,
  params: any
): Promise<any> => {
  switch (type) {
    case GET_LIST: {
      // return Promise.resolve({
      //   status: 400,
      //   headers: {},
      //   json: data_checkbox_section()
      // });
      const {projectId, layoutName} = params;
      if (projectId) {
        return fetchJson(`${getApiURI()}/apps/${getAppName()}/projects/${projectId}/section-definitions?layout_name=${layoutName}&attributes=position,visible,disable,double_typing`)
      } else {
        return Promise.reject(`projectId undefined`)
      }
    }
    default:
      return Promise.reject(`${SECTION_ALL_APPROVE_QC_RESOURCE} Not support ${type}`);
  }
};

export {SectionAllApproveQCResource, SECTION_ALL_APPROVE_QC_RESOURCE};

