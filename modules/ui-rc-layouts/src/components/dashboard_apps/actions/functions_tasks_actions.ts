import {cloneDeep, get, isEmpty, orderBy} from 'lodash';
import {updateBreadcrumbs} from '../../../layouts';
import {PATH_TO_STORE_REDUX, PATH_TO_STORE_REDUX_T_LAYOUTS, SET_GET_DATA_FOR_READY_FUNCTION_TASKS, SET_KEYBOARD_FUNCTION_TASKS, SET_REFRESH_INSTANCES_FUNCTION_TASKS, SET_SEARCH_FUNCTION_TASKS, SORT_SOURCE_NAME} from '../constants';
import {callAPIGetFunctionsTasks, callAPIGetInstances} from './call_api';
import {executeActionReducer} from './common_actions';

export const getFunctionsTasks = () => async (dispatch: any, getState: any) => {
  const state = get(getState(), PATH_TO_STORE_REDUX, {});
  const stateTLayouts = get(getState(), PATH_TO_STORE_REDUX_T_LAYOUTS, {});
  let routeFocus: any = stateTLayouts.routeFocus || {};
  let projectId: any = stateTLayouts.projectId;
  let functionsTasks: any = state.functionsTasks || {};
  let payload: any = state.functionsTasks || {};
  if (stateTLayouts.functionsParent && stateTLayouts.functionsParent.length > 0) {
    payload.functionsParent = stateTLayouts.functionsParent;
    payload.functionsView = stateTLayouts.functionsParent;
    dispatch(executeActionReducer(SET_GET_DATA_FOR_READY_FUNCTION_TASKS, {functionsTasks: payload}));
  } else {
    if (functionsTasks.functionsParent && functionsTasks.functionsParent.length === 0) {
      const dataAPI: any = await callAPIGetFunctionsTasks(routeFocus.app_name, projectId);
      if (dataAPI.error) {
        console.log('get contacts data is error.');
        payload.isReady = false;
      } else {
        payload.functionsParent = dataAPI.data;
        payload.functionsView = dataAPI.data;
      }
      dispatch(executeActionReducer(SET_GET_DATA_FOR_READY_FUNCTION_TASKS, {functionsTasks: payload}));
    }
  }
};

export const setKeyboardFunctionsTasks = (event: any) => async (dispatch: any, getState: any) => {
  const state = get(getState(), PATH_TO_STORE_REDUX, {});
  const stateTLayouts = get(getState(), PATH_TO_STORE_REDUX_T_LAYOUTS, {});
  const isSideBarOpen = stateTLayouts.isSideBarOpen;
  if (isSideBarOpen) {
    return;
  }
  const functionsTasks = state.functionsTasks || {};
  const selectedProject = functionsTasks.selectedProject;
  const keyCode = event.keyCode;
  if (keyCode === 13 && !isEmpty(selectedProject)) {
    dispatch(updateBreadcrumbs({
      type: "project",
      data: {
        name: selectedProject.id,
        display_name: selectedProject.name,
        path: `projects/${selectedProject.id}`,
        index: 1,
      }
    }))
  }
};

export const setSearchFunctionsTasks = (searchKeyWords: any) => async (dispatch: any, getState: any) => {
  const state = get(getState(), PATH_TO_STORE_REDUX, {});
  const functionsTasks = state.functionsTasks || {};
  const functionsParent = functionsTasks.functionsParent;
  let payload: any = state.functionsTasks || {};
  payload.searchKeyWords = searchKeyWords;
  if (!searchKeyWords || searchKeyWords.length === 0) {
    payload.functionsView = functionsParent;
  }
  dispatch(executeActionReducer(SET_SEARCH_FUNCTION_TASKS, {functionsTasks: payload}));
}

export const setKeyUpSearchFunctionsTasks = (event: any) => async (dispatch: any, getState: any) => {
  const state = get(getState(), PATH_TO_STORE_REDUX, {});
  const stateTLayouts = get(getState(), PATH_TO_STORE_REDUX_T_LAYOUTS, {});
  const isSideBarOpen = stateTLayouts.isSideBarOpen;
  if (isSideBarOpen) {
    return;
  }
  const keyCode = event.keyCode;
  if (keyCode === 13) {
    const functionsTasks = state.functionsTasks || {};
    let payload: any = state.functionsTasks || {};
    const functionsParent = functionsTasks.functionsParent || [];
    const searchKeyWords = functionsTasks.searchKeyWords || "";
    let newRowsTable = null;
    if (searchKeyWords && searchKeyWords.length > 0) {
      const newSearchKeyWords = searchKeyWords.toUpperCase();
      newRowsTable = [];
      functionsParent.map((f1: any) => {
        const f = f1.filter((f2: any) => f2.display_name.toUpperCase().search(newSearchKeyWords) !== -1);
        if (f[0]) {
          newRowsTable.push(f);
        }
      })
    } else {
      newRowsTable = functionsParent;
    }
    payload.functionsView = newRowsTable;
    dispatch(executeActionReducer(SET_KEYBOARD_FUNCTION_TASKS, {functionsTasks: payload}));
  }
}

export function convertDataFunctionsTasks(datas: any) {
  let outPut: any = [];
  SORT_SOURCE_NAME.map((sourceName: any) => {
    const source = datas.filter((f: any) => f.source_name === sourceName);
    if (source[0]) {
      outPut.push(orderBy(source, ["display_name"]));
    }
  })
  return outPut;
}

export const setRefreshInstancesFunctionsTasks = (sourceName: string) => async (dispatch: any, getState: any) => {
  const state = get(getState(), PATH_TO_STORE_REDUX, {});
  let functionsTasks: any = cloneDeep(state.functionsTasks) || {};
  let functionsParent: any = functionsTasks.functionsParent || [];
  let functionsView: any = functionsTasks.functionsView || [];
  let payload: any = functionsTasks || {};
  const dataAPI: any = await callAPIGetInstances(sourceName);
  if (dataAPI.error) {
    console.log('get contacts data is error.');
    payload.isReady = false;
  } else {
    payload.functionsParent = setInstanceToData(functionsParent, dataAPI.data, sourceName);
    payload.functionsView = setInstanceToData(functionsView, dataAPI.data, sourceName);
    payload.disabledRefresh[sourceName] = true;
  }
  dispatch(executeActionReducer(SET_REFRESH_INSTANCES_FUNCTION_TASKS, {functionsTasks: {...state.functionsTasks, disabledRefresh: {...state.disabledRefresh, [sourceName]: true}}}));
  setTimeout(() => {
    payload.disabledRefresh[sourceName] = false;
    dispatch(executeActionReducer(SET_REFRESH_INSTANCES_FUNCTION_TASKS, {functionsTasks: payload}));
  }, 3000);
}

function setInstanceToData(datas: any[], instances: any, sourceName: string) {
  let outPut: any = datas;
  for (let i = 0; i < datas.length; i++) {
    const element = datas[i];
    if (element[0].source_name === sourceName) {
      for (let j = 0; j < element.length; j++) {
        const item = element[j];
        outPut[i][j].instances = instances[item.name];
      }
      break;
    }
  }
  return outPut;
}
