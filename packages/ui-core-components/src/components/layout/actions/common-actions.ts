import {get} from 'lodash';
import {NAME_REDUCER, PATH_TO_STORE_REDUX, SET_BREAKPOINT, UNMOUNT} from '../constants';

export const executeActionReducer = (type: string, payload: any) => {
  return {type, payload, meta: {resource: NAME_REDUCER}};
};

export const unmount = () => async (dispatch: any) => {
  dispatch(executeActionReducer(UNMOUNT, {}));
};

export const setBreakpoints = (width: 'xs' | 'sm' | 'md' | 'lg' | 'xl', size: {height: 0, width: 0}) => async (dispatch: any, getState: any) => {
  console.log('=========setBreakpoints=============');
  console.log('width: ', width);
  console.log('size: ', size);
  console.log('====================================');
  let payload: any = {
    width: size.width,
    height: size.height,
    breakpoint: width,
    isReady: true
  };

  dispatch(executeActionReducer(SET_BREAKPOINT, payload));
}

export const getDataForReady = ({version = "0.0.1"}) => async (dispatch: any, getState: any) => {
  const state = get(getState(), PATH_TO_STORE_REDUX, {});
  const routeFocus = state.routeFocus;
}
