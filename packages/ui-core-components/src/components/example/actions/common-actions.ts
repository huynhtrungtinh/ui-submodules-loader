import {NAME_REDUCER, UNMOUNT} from '../constants';

export const executeActionReducer = (type: string, payload: any) => {
  return {type, payload, meta: {resource: NAME_REDUCER}};
};

export const unmount = () => async (dispatch: any) => {
  dispatch(executeActionReducer(UNMOUNT, {}));
};

export const getDataForReady = () => async (dispatch: any, getState: any) => {

}


