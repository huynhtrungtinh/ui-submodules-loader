import {fetchJson, getApiURI, getAppName, GET_LIST} from '@dgtx/coreui';
import {IResource} from "../../registry";
const FIELD_ERROR_DEF_QC_RESOURCE = "field_error_definitions_qc";

const FieldErrorDefinitionsQCResource: IResource = (type: string, resource: string, params: any): Promise<any> => {
  switch (type) {
    case GET_LIST: {
      return Promise.resolve({
        status: 200,
        headers: {},
        json: ERROR_LIST
      });
      return fetchJson(`${getApiURI()}/apps/${getAppName()}/error-definitions`)
    }
    default:
      return Promise.reject(`${FIELD_ERROR_DEF_QC_RESOURCE} Not support ${type}`)
  }
}

export {FieldErrorDefinitionsQCResource, FIELD_ERROR_DEF_QC_RESOURCE};

export const ERROR_LIST = [
  {
    "name": "Suggestion",
    "arguments": {},
    "content": "",
    "code": "501",
    "created_date": "2019-06-13T08:48:28.294Z",
    "last_modified": "2019-06-13T08:50:54.117Z",
    "id": "5d020ddc215841001c90df64"
  },
  {
    "name": "100% Empty",
    "arguments": {},
    "content": "",
    "code": "502",
    "created_date": "2019-06-13T08:48:40.761Z",
    "last_modified": "2019-06-13T08:48:40.761Z",
    "id": "5d020de8215841001c90df65"
  },
  {
    "name": "100% Unmatched",
    "arguments": {},
    "content": "",
    "code": "503",
    "created_date": "2019-06-13T08:48:57.235Z",
    "last_modified": "2019-06-13T08:48:57.235Z",
    "id": "5d020df9215841001c90df66"
  },
  {
    "name": "Missing Data",
    "arguments": {},
    "content": "",
    "code": "504",
    "created_date": "2019-06-13T08:49:14.118Z",
    "last_modified": "2019-06-13T08:49:14.118Z",
    "id": "5d020e0ac611720020954119"
  },
  {
    "name": "Misspelling",
    "arguments": {},
    "content": "",
    "code": "506",
    "created_date": "2019-06-13T08:49:26.434Z",
    "last_modified": "2019-06-13T08:49:26.434Z",
    "id": "5d020e16c61172002095411a"
  },
  {
    "name": "Unreadable",
    "arguments": {},
    "content": "",
    "code": "508",
    "created_date": "2019-06-13T08:49:36.173Z",
    "last_modified": "2019-06-13T08:49:36.173Z",
    "id": "5d020e20c61172002095411b"
  },
  {
    "name": "Wrong Field",
    "arguments": {},
    "content": "",
    "code": "509",
    "created_date": "2019-06-13T08:49:47.113Z",
    "last_modified": "2019-06-13T08:49:47.113Z",
    "id": "5d020e2b4a2222001c1af0d1"
  },
  {
    "name": "Wrong format",
    "arguments": {},
    "content": "",
    "code": "510",
    "created_date": "2019-06-13T08:49:56.081Z",
    "last_modified": "2019-06-13T08:49:56.081Z",
    "id": "5d020e34215841001c90df67"
  },
  {
    "name": "Wrong Rule",
    "arguments": {},
    "content": "",
    "code": "512",
    "created_date": "2019-06-13T08:50:09.080Z",
    "last_modified": "2019-06-13T08:50:09.080Z",
    "id": "5d020e41215841001c90df68"
  }
]
