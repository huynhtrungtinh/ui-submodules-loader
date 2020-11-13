import {IResourceRegistries} from '@dgtx/ui-scl';
import {contactInfoResource, CONTACT_INFO_RESOURCE} from './contact-info';
const LAYOUT_ROOT_PROVIDER_RESOURCE: IResourceRegistries = {
  [CONTACT_INFO_RESOURCE]: contactInfoResource,
};
function getLayoutRootProvider(): object {
  return LAYOUT_ROOT_PROVIDER_RESOURCE
}
export {getLayoutRootProvider};
export default getLayoutRootProvider;
