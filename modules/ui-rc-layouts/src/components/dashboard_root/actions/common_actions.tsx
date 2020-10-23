import {
  NAME_REDUCER,
  UNMOUNT,
  PATH_TO_STORE_REDUX,
  SET_KEYBOARD_DASHBOARD_ROOT,
  PATH_TO_STORE_REDUX_T_LAYOUTS,
  SET_REF_CONTAINER_DASHBOARD_ROOT,
  POSTFIX_ID_REF_APP
} from '../constants';
import { get, isEmpty } from 'lodash';
import { setOpenLeftMenu } from '../../../layouts';

export const executeActionReducer = (type: string, payload: any) => {
  return { type, payload, meta: { resource: NAME_REDUCER } };
};
export const unmount = () => async (dispatch: any) => {
  dispatch(executeActionReducer(UNMOUNT, {}));
};

export const setRefContainer = (refContainer: any) => async (dispatch: any) => {
  if (get(refContainer, 'current.children', null)) {
    dispatch(executeActionReducer(SET_REF_CONTAINER_DASHBOARD_ROOT, { refContainer }));
  }
}

export const setKeyboard = (event: any, history: any) => async (dispatch: any, getState: any) => {
  const state = get(getState(), PATH_TO_STORE_REDUX, {});
  const stateTLayouts = get(getState(), PATH_TO_STORE_REDUX_T_LAYOUTS, {});
  const routers = stateTLayouts.routers;
  const cols = stateTLayouts.cols;
  const selectedApp = state.selectedApp;
  const refContainer = state.refContainer;
  const keyCode = event.keyCode;
  let payload: any = {};
  if (keyCode === 13 && !isEmpty(selectedApp)) {
    history.push(selectedApp.path);
    // redirect(selectedApp.path)
    dispatch(setOpenLeftMenu(false, selectedApp));
    return;
  }
  if ([37, 38, 39, 40].includes(keyCode)) {
    // routers = routers.filter((r:any)=> r.app_name !== "home")
    const newSelectedApp = getIndexNetByKeycode({ keyCode, routers, indexPresent: !selectedApp ? -1 : selectedApp.index, cols })
    if (!isEmpty(newSelectedApp)) {
      let id = `${newSelectedApp.tabIndex}${POSTFIX_ID_REF_APP}`
      const cardTag = getIndexTargetById(refContainer, id);
      if (cardTag) {
        cardTag.focus();
        cardTag.scrollIntoView({
          behavior: "smooth", // smooth auto
          block: "center",
          inline: "center"
        });
        payload.selectedApp = newSelectedApp;
        dispatch(executeActionReducer(SET_KEYBOARD_DASHBOARD_ROOT, payload));
      }
    }
  }
};

function getIndexTargetById(refContainer: any, id: string) {
  let outPut: any = null;
  const childrens: any = Array.from(refContainer.current.children);
  for (let index = 0; index < childrens.length; index++) {
    const cardTag = getCardWapperTag(refContainer, index);
    if (cardTag && cardTag.getAttribute("id") === id) {
      outPut = cardTag;
      break;
    }
  }
  return outPut;
}

function getCardWapperTag(refContainer: any, indexChildren: number) {
  if (get(refContainer, `current.children.${indexChildren}.children.0`, null)) {
    return refContainer.current.children[indexChildren].children[0];
  }
  return null;
}

interface IGetIndex {
  keyCode: number;
  routers: any[];
  indexPresent: number;
  cols: number;
}

function getIndexNetByKeycode(input: IGetIndex) {
  let { keyCode, routers, indexPresent, cols } = input;
  let outPut: any = null;
  let indexNext: any = null;
  const routersLength = routers.length - 1;
  if (indexPresent < 0) {
    return routers[1];
  }
  switch (keyCode) {
    case 37: { // left
      indexNext = indexPresent - 1;
      if (routers[indexNext]) {
        outPut = routers[indexNext];
      } else {
        outPut = routers[routersLength];
      }
      break;
    }
    case 38: { // up
      indexNext = indexPresent - cols;
      if (routers[indexNext]) {
        outPut = routers[indexNext];
      }
      //  else {
      //   outPut = routers[routersLength];
      // }
      break;
    }
    case 39: { // right
      indexNext = indexPresent + 1;
      if (routers[indexNext]) {
        outPut = routers[indexNext];
      } else {
        outPut = routers[1];
      }
      break;
    }
    case 40: { // down
      indexNext = indexPresent + cols;
      if (routers[indexNext]) {
        outPut = routers[indexNext];
      }
      // else {
      //   outPut = routers[1];
      // }
      break;
    }
    default:
      break;
  }
  if (outPut && outPut.app_name === "home") {
    outPut = routers[1];
  }
  return outPut;
}
