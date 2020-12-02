import {IResourceRegistries} from '@dgtx/ui-scl';
import {appsResource, APPS_RESOURCE} from './apps-provider';
const LAYOUT_ROOT_PROVIDER_RESOURCE: IResourceRegistries = {
  [APPS_RESOURCE]: appsResource,
};
function getLayoutRootProvider(): object {
  return LAYOUT_ROOT_PROVIDER_RESOURCE
}
export {getLayoutRootProvider, APPS_RESOURCE};
export default getLayoutRootProvider;
