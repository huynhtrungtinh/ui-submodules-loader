import {GET, IResourceProvider} from '@dgtx/ui-scl';
import {fetchJson, getApiUacURI} from '@dgtx/ui-utils';

const APPS_RESOURCE = "apps";
const appsResource: IResourceProvider = (type: string, resource: string, params: any): Promise<any> => {
  switch (type) {
    case GET:
      return fetchJson(`${getApiUacURI()}/apps`)
    default:
      return Promise.reject(`projectProvider Not support ${type}`)
  }
}

export {appsResource, APPS_RESOURCE};

