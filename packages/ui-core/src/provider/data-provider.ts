
import {IInputProvider, IProviderOutPut, IResourceProvider, IResourceRegistries} from '@dgtx/ui-scl';
import {config, fetchJson} from '@dgtx/ui-utils';
class DataProvider {
  private static instance: DataProvider;
  private resourceRegistries: IResourceRegistries;

  constructor() {
    console.log('DataProvider: ', DataProvider);
    this.resourceRegistries = {}
  }

  public static getInstance(): DataProvider {
    if (!DataProvider.instance) {
      DataProvider.instance = new DataProvider();
    }
    return DataProvider.instance;
  }

  public setResourceRegistries(dataProvider: IResourceRegistries = {}) {
    if (typeof dataProvider === 'object' && Object.keys(dataProvider).length > 0) {
      Object.keys(dataProvider).map((key: string) => {
        const resource = dataProvider[key];
        this.resourceRegistries[key] = resource;
      });
    }
    return this.resourceRegistries;
  }

  public getResourceRegistry(name: string): IResourceProvider {
    const resourceRegistries: IResourceRegistries = this.resourceRegistries;
    if (resourceRegistries[name]) {
      return resourceRegistries[name];
    }
    return (input: IInputProvider): IProviderOutPut => {
      return {
        uri: '',
        response: {
          blod: null,
          data: [],
          headers: null,
          response: null,
          status: 200
        }
      }
    }
  }

  public getDataProvider(type: string, resource: string, params: any): Promise<any> {
    console.log('======getDataProvider===============');
    console.log('getResourceRegistry: ', this.resourceRegistries);
    console.log('type: ', type);
    console.log('resource: ', resource);
    // console.log('params: ', this.getResourceRegistry(resource)(type, resource, params));
    console.log('====================================');
    const configReq: IProviderOutPut = this.getResourceRegistry(resource)({type, apiURI: config.getConfig(), resource, params});
    console.log('configReq: ', configReq);
    return fetchJson(
      configReq.uri,
      {
        method: configReq.method || 'GET',
        isFile: (configReq.type && configReq.type === 'file') ? true : false,
        body: configReq.body,
        response: configReq.response
      }
    );
  }
}
export {DataProvider};
export default DataProvider
