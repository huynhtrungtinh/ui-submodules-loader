import {IResourceRegistries} from '@dgtx/ui-scl';
import {appsResource, APPS_RESOURCE} from './apps-provider';
import {contactInfoResource, CONTACT_INFO_RESOURCE} from './contact-info-provider';
import {functionsResource, FUNCTIONS_RESOURCE} from './functions-provider';
import {projectsOperationResource, PROJECTS_OPERATION_RESOURCE} from './projects-operation-provider';
import {projectsTrainingResource, PROJECTS_TRAINING_RESOURCE} from './projects-training-provider';
import {scopeResource, SCOPE_RESOURCE} from './scope-provider';
const LAYOUT_ROOT_PROVIDER_RESOURCE: IResourceRegistries = {
  [CONTACT_INFO_RESOURCE]: contactInfoResource,
  [SCOPE_RESOURCE]: scopeResource,
  [APPS_RESOURCE]: appsResource,
  [PROJECTS_OPERATION_RESOURCE]: projectsOperationResource,
  [PROJECTS_TRAINING_RESOURCE]: projectsTrainingResource,
  [FUNCTIONS_RESOURCE]: functionsResource,
};
function getLayoutRootProvider(): object {
  return LAYOUT_ROOT_PROVIDER_RESOURCE
}
export {getLayoutRootProvider, CONTACT_INFO_RESOURCE, SCOPE_RESOURCE, APPS_RESOURCE, PROJECTS_OPERATION_RESOURCE, PROJECTS_TRAINING_RESOURCE, FUNCTIONS_RESOURCE};
export default getLayoutRootProvider;
