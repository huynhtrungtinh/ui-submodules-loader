import {api, setAuthLogout} from '@dgtx/ui-core';
import {IFetchJsonOutPut} from '@dgtx/ui-scl';
import {get} from 'lodash';
import {NAME_REDUCER, UNMOUNT} from './dashboard-constants';

export const executeActionReducer = (type: string, payload: any) => {
  return {type, payload, meta: {resource: NAME_REDUCER}};
};

export const unmount = () => async (dispatch: any) => {
  dispatch(executeActionReducer(UNMOUNT, {}));
};

export const setLogout = () => async (dispatch: any, getState: any) => {
  const response = await dispatch(setAuthLogout());
  console.log('response: ', response);
  console.log('====================================');
  // if (response.status === 200) {

  // }
}

export const callAPIGetApps = () => async (dispatch: any) => {
  console.log('============callAPIGetApps==========');
  return new Promise((resolve) => {
    dispatch(
      api.get(
        'apps',
        {},
        (res: IFetchJsonOutPut) => {
          console.log('=====onSuccess==============');
          console.log('apps');
          console.log('res: ', res);
          resolve({error: null, data: get(res, 'result.json', {})});
        }
      )
    );
  });
}

export const callAPIGetFile = () => async (dispatch: any) => {
  console.log('============callAPIGetFile==========');
  return new Promise((resolve) => {
    dispatch(
      api.get(
        'get_file_test',
        {},
        (res: IFetchJsonOutPut) => {
          console.log('=====onSuccess==============');
          console.log('apps');
          console.log('res: ', res);
          resolve({error: null, data: get(res, 'result.json', {})});
        }
      )
    );
  });
}

export const callAPIGetFile2 = () => async (dispatch: any) => {
  console.log('============callAPIGetFile2==========');
  return new Promise((resolve) => {
    dispatch(
      api.get(
        'export_file_test_2',
        {},
        (res: IFetchJsonOutPut) => {
          console.log('=====onSuccess==============');
          console.log('apps');
          console.log('res: ', res);
          resolve({error: null, data: get(res, 'result.json', {})});
        }
      )
    );
  });
}
