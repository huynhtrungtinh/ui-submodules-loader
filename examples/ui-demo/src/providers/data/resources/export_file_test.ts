import {GET, IResourceProvider} from '@dgtx/ui-scl';
import {fetchJson, getApiTrainingURI} from '@dgtx/ui-utils';

const GET_FILE_TEST_RESOURCE = "get_file_test";
const getFileTestResource: IResourceProvider = (type: string, resource: string, params: any): Promise<any> => {
  switch (type) {
    case GET:
      const {projectId = '5de0a1527dabcc001e27c39f'} = params;
      return fetchJson(`${getApiTrainingURI()}/apps/production-admin/projects/${projectId}/export?from_date=2020-10-01&to_date=2020-11-04&fields=date,assignee,section,pass`)
    default:
      return Promise.reject(`projectProvider Not support ${type}`)
  }
}

export {getFileTestResource, GET_FILE_TEST_RESOURCE};

