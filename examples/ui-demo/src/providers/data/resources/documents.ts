import {fetchJson, getApiURI, getAppName, UPDATE} from "@dgtx/coreui";
const DOCUMENTS_RESOURCE = "documents";
const DocumentsResource = (type: string, resource: string, params: any) => {
  switch (type) {
    case UPDATE: {
      const {projectId, documentId, records} = params;
      console.log("=========complete================");
      console.log("records: ", JSON.stringify(records));
      console.log("=================================");
      // return Promise.resolve(
      //   {
      //     status: 200,
      //     headers: {},
      //     json: {}
      //   }
      // )
      return fetchJson(`${getApiURI()}/apps/${getAppName()}/projects/${projectId}/documents?id=${documentId}&multiple=true`,
        {method: 'PATCH', body: JSON.stringify(records)});
    }
    default:
      break;
  }
  return Promise.reject(
    `Provider ${resource} method:${type} not yet supported!`
  );
};

export {DOCUMENTS_RESOURCE, DocumentsResource};

