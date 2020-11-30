import {get, isEmpty, orderBy} from 'lodash';
import {updateBreadcrumbs} from '../../../layouts';
import {PATH_TO_STORE_REDUX, PATH_TO_STORE_REDUX_T_LAYOUTS, POSTFIX_ID_REF_FUNCTION, SET_GET_DATA_FOR_READY_FUNCTION, SET_KEYBOARD_FUNCTION, SET_REF_CONTAINER_FUNCTION, SET_SEARCH_FUNCTION} from '../constants';
import {callAPIGetFunctions} from './call_api';
import {executeActionReducer} from './common_actions';

export const setRefContainerFunctions = (refContainer: any) => async (dispatch: any, getState: any) => {
  if (refContainer.current && Array.from(refContainer.current.children)) {
    const state = get(getState(), PATH_TO_STORE_REDUX, {});
    let functions = state.functions || {};
    functions.refContainer = refContainer;
    dispatch(executeActionReducer(SET_REF_CONTAINER_FUNCTION, {functions}));
  }
}

export const getFunctions = () => async (dispatch: any, getState: any) => {
  const state = get(getState(), PATH_TO_STORE_REDUX, {});
  const stateTLayouts = get(getState(), PATH_TO_STORE_REDUX_T_LAYOUTS, {});
  let routeFocus: any = stateTLayouts.routeFocus || {};
  // let projectId: any = stateTLayouts.projectId;
  let functions: any = state.functions || {};
  let payload: any = state.functions || {};
  if (stateTLayouts.functionsParent && stateTLayouts.functionsParent.length > 0) {
    payload.functionsParent = stateTLayouts.functionsParent;
    payload.functionsView = stateTLayouts.functionsParent;
    dispatch(executeActionReducer(SET_GET_DATA_FOR_READY_FUNCTION, {functions: payload}));
  } else {
    if (functions.functionsParent && functions.functionsParent.length === 0) {
      const dataAPI: any = await callAPIGetFunctions(routeFocus.app_name);
      if (dataAPI.error) {
        console.log('get contacts data is error.');
        payload.isReady = false;
      } else {
        payload.functionsParent = dataAPI.data;
        payload.functionsView = dataAPI.data;
      }
      dispatch(executeActionReducer(SET_GET_DATA_FOR_READY_FUNCTION, {functions: payload}));
    }
  }
};

export const setKeyboardFunctions = (event: any) => async (dispatch: any, getState: any) => {
  const state = get(getState(), PATH_TO_STORE_REDUX, {});
  const stateTLayouts = get(getState(), PATH_TO_STORE_REDUX_T_LAYOUTS, {});
  const cols = stateTLayouts.cols;
  const isSideBarOpen = stateTLayouts.isSideBarOpen;
  if (isSideBarOpen) {
    return;
  }
  const functions = state.functions || {};
  const functionsView = functions.functionsView || [];
  const selectedFunctions = functions.selectedFunctions;
  const refContainer = functions.refContainer;
  const keyCode = event.keyCode;
  let payload: any = state.functions || {};
  // if (keyCode === 13 && !isEmpty(selectedProject)) {
  //   dispatch(updateBreadcrumbs({
  //     type: "project",
  //     data: {
  //       name: selectedProject.id,
  //       display_name: selectedProject.name,
  //       path: `projects/${selectedProject.id}`,
  //       index: 1,
  //     }
  //   }))
  //   return;
  // }
  if ([37, 38, 39, 40].includes(keyCode)) {
    let indexPresent = -1;
    if (selectedFunctions && selectedFunctions.name) {
      for (let index = 0; index < functionsView.length; index++) {
        const element = functionsView[index];
        if (element.name === selectedFunctions.name) {
          indexPresent = index;
          break;
        }
      }
    }
    const newFunc = getIndexNetByKeycode({keyCode, datas: functionsView, indexPresent, cols})
    if (!isEmpty(newFunc)) {
      let id = `${newFunc.name}${POSTFIX_ID_REF_FUNCTION}`
      const cardTag = getIndexTargetById(refContainer, id);
      if (cardTag) {
        cardTag.focus();
        cardTag.scrollIntoView({
          behavior: "smooth", // smooth auto
          block: "center",
          inline: "center"
        });
        payload.selectedFunctions = newFunc;
        dispatch(executeActionReducer(SET_KEYBOARD_FUNCTION, {functions: payload}));
      }
    }
  }
};

export const setClickFunctions = (project: any) => async (dispatch: any, getState: any) => {
  dispatch(updateBreadcrumbs({
    type: "function",
    data: {
      name: project.id,
      display_name: project.name,
      path: "",
      index: 1,
    }
  }))
}

export const setSearchFunctions = (searchKeyWords: any) => async (dispatch: any, getState: any) => {
  const state = get(getState(), PATH_TO_STORE_REDUX, {});
  const functions = state.functions || {};
  const functionsParent = functions.functionsParent;
  let payload: any = state.functions || {};
  payload.searchKeyWords = searchKeyWords;
  if (!searchKeyWords || searchKeyWords.length === 0) {
    payload.functionsView = functionsParent;
  }
  dispatch(executeActionReducer(SET_SEARCH_FUNCTION, {functions: payload}));
}

export const setKeyUpSearchFunctions = (event: any) => async (dispatch: any, getState: any) => {
  const state = get(getState(), PATH_TO_STORE_REDUX, {});
  const stateTLayouts = get(getState(), PATH_TO_STORE_REDUX_T_LAYOUTS, {});
  const isSideBarOpen = stateTLayouts.isSideBarOpen;
  if (isSideBarOpen) {
    return;
  }
  const keyCode = event.keyCode;
  if (keyCode === 13) {
    const functions = state.functions || {};
    let payload: any = state.functions || {};
    const functionsParent = functions.functionsParent || [];
    const searchKeyWords = functions.searchKeyWords || "";
    let newRowsTable = null;
    if (searchKeyWords && searchKeyWords.length > 0) {
      const newSearchKeyWords = searchKeyWords.toUpperCase();
      newRowsTable = functionsParent.filter((f2: any) => f2.display_name.toUpperCase().search(newSearchKeyWords) !== -1);
    } else {
      newRowsTable = functionsParent;
    }
    payload.functionsView = newRowsTable;
    dispatch(executeActionReducer(SET_SEARCH_FUNCTION, {functions: payload}));
  }
}

function getIndexTargetById(refContainer: any, id: string) {
  let outPut: any = null;
  const childrens: any = Array.from(refContainer.current.children);
  const childrens2: any = childrens[0].children;
  for (let index = 0; index < childrens2.length; index++) {
    const cardTag = childrens2[index].children[0];
    if (cardTag && cardTag.getAttribute("id") === id) {
      outPut = cardTag;
      break;
    }
  }
  return outPut;
}

interface IGetIndex {
  keyCode: number;
  datas: any[];
  indexPresent: number;
  cols: number;
}

function getIndexNetByKeycode(input: IGetIndex) {
  let {keyCode, datas, indexPresent, cols} = input;
  let outPut: any = null;
  let indexNext: any = null;
  const datasLength = datas.length - 1;
  if (indexPresent < 0) {
    return datas[0];
  }
  switch (keyCode) {
    case 37: { // left
      indexNext = indexPresent - 1;
      if (datas[indexNext]) {
        outPut = datas[indexNext];
      } else {
        outPut = datas[datasLength];
      }
      break;
    }
    case 38: { // up
      indexNext = indexPresent - cols;
      if (datas[indexNext]) {
        outPut = datas[indexNext];
      }
      break;
    }
    case 39: { // right
      indexNext = indexPresent + 1;
      if (datas[indexNext]) {
        outPut = datas[indexNext];
      } else {
        outPut = datas[0];
      }
      break;
    }
    case 40: { // down
      indexNext = indexPresent + cols;
      if (datas[indexNext]) {
        outPut = datas[indexNext];
      }
      break;
    }
    default:
      break;
  }
  return outPut;
}

export function convertDataFunctions(datas: any) {
  return orderBy(datas, ["display_name"]);
}
