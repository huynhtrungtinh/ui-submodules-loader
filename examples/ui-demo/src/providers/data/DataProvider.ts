import { getResourceRegistry } from './registry'

const DataProvider = (type: string, resource: string, params: any): Promise<any> => {
  return getResourceRegistry(resource)(type, resource, params);
};
export {
  DataProvider
}