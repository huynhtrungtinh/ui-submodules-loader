import {getLayoutRootProvider} from '@dgtx/ui-core-components';
import {IResourceRegistries} from '@dgtx/ui-scl';
import {appsResource, APPS_RESOURCE} from './apps';
import {getFileTestResource, GET_FILE_TEST_RESOURCE} from './export_file_test';
import {getFileTest2Resource, GET_FILE_TEST_2_RESOURCE} from './export_file_test_2';

export const RESOURCE_REGISTRIES: IResourceRegistries = {
  [APPS_RESOURCE]: appsResource,
  [GET_FILE_TEST_RESOURCE]: getFileTestResource,
  [GET_FILE_TEST_2_RESOURCE]: getFileTest2Resource,
  ...getLayoutRootProvider()
};

