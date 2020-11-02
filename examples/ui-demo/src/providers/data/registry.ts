import {ProjectResource, PROJECT_RESOURCE} from './resources';
export type IResource = (type: string, resource: string, params: string) => Promise<any>;

interface IResourceRegistries {
  [key: string]: IResource
}


const ResourceRegistries: IResourceRegistries = {
  [PROJECT_RESOURCE]: ProjectResource
};

export const registryResource = (name: string, resource: IResource): void => {
  ResourceRegistries[name] = resource;
}
export const unregistryResource = (name: string): void => {
  delete ResourceRegistries[name];
}

export const getResourceRegistries = (): IResourceRegistries => {
  return ResourceRegistries;
}
export const getResourceRegistry = (name: string): IResource => {
  if (ResourceRegistries[name]) {
    return ResourceRegistries[name];
  }
  return (type: string, resource: string, params: string): Promise<any> => {
    return Promise.reject(`Resource:"${resource}" has not registed!`)
  }
}
