import {IResourceProvider, IResourceRegistries} from '@dgtx/ui-scl';
import {getResourceRegistries} from './config';

const registryResource = (name: string, resource: IResourceProvider): void => {
  const resourceRegistries: IResourceRegistries = getResourceRegistries();
  resourceRegistries[name] = resource;
}

const getResourceRegistry = (name: string): IResourceProvider => {
  const resourceRegistries: IResourceRegistries = getResourceRegistries();
  if (resourceRegistries[name]) {
    return resourceRegistries[name];
  }
  return (type: string, resource: string, params: string): Promise<any> => {
    return Promise.reject(`Resource:"${resource}" has not registed!`)
  }
}

const dataProvider = (type: string, resource: string, params: any): Promise<any> => {
  return getResourceRegistry(resource)(type, resource, params);
};

export {registryResource, getResourceRegistry, dataProvider};

