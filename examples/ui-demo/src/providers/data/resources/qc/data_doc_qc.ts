import { fetchJson, getApiURI, getAppName, GET_LIST } from '@dgtx/ui-core';
// import {dataDoc_sort} from '../../mockAPI';
import { IResource } from "../../registry";

const DATA_DOC_QC_RESOURCE = "data_doc_qc";

const DataDocQCResource: IResource = (type: string, resource: string, params: any): Promise<any> => {
    switch (type) {
        case GET_LIST: {
            // return Promise.resolve(
            //     {
            //         status: 200,
            //         headers: {},
            //         json: dataDoc_sort()
            //     }
            // )
            // return Promise.resolve(
            //     {
            //         status: 200,
            //         headers: {},
            //         json: dataDoc_148()
            //     }
            // )
            const {projectId, docIds} = params;
            if (projectId && docIds) {
                return fetchJson(`${getApiURI()}/apps/${getAppName()}/projects/${projectId}/data-doc?docs=${docIds}`, {method: 'GET'});
            } else {
                return Promise.reject(`params undefined: ${params}`);
            }
        }
        default:
            return Promise.reject(`${DATA_DOC_QC_RESOURCE} Not support ${type}`);
    }
}

export { DataDocQCResource, DATA_DOC_QC_RESOURCE };

