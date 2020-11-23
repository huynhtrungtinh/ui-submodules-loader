import {get, orderBy, set} from 'lodash';
import {IFunction, ILeftData, PATH_TO_STORE_REDUX, PROJECTS_KEY, SET_CLICK_LEFT_MENU_ITEM, SET_OPEN_LEFT_MENU, SET_SEARCH_LEFT_MENU} from '../../constants';
import {callAPIGetFunctions} from '../call-api';
import {executeActionReducer} from '../common-actions';
export const setOpenLeftMenu = (isOpen?: Boolean, route?: any) => async (dispatch: any, getState: any) => {
  const state = get(getState(), PATH_TO_STORE_REDUX, {});
  const routeFocus = state.routeFocus;
  let payload: any = {
    isLeftMenuOpen: false,
  };
  if (isOpen) {
    payload.isLeftMenuOpen = true;
  }
  if (!route) {
    payload.routeFocus = routeFocus;
  } else {
    payload.routeFocus = route;
  }
  dispatch(executeActionReducer(SET_OPEN_LEFT_MENU, payload));
};

export const setClickLeftMenuItem = (nodeId: any) => async (dispatch: any, getState: any) => {
  const state = get(getState(), PATH_TO_STORE_REDUX, {});
  const leftMenuDataSearch = state.leftMenuDataSearch || [];
  const leftMenuLastNodeId = state.leftMenuLastNodeId || 1;
  const leftMenuItem = findTreeItemByNodeId(leftMenuDataSearch, nodeId);
  let payload: any = {};
  if (get(leftMenuItem, 'data.path', '') === PROJECTS_KEY && get(leftMenuItem, 'data.children.length', 0) === 0) {
    const functions: any = await dispatch(callAPIGetFunctions());
    if (functions.error) {
      console.log('get functions data is error.');
    } else {
      const convert = convertFunctions2TreeView(leftMenuDataSearch, leftMenuItem.data.pathFocus, functions.data, leftMenuLastNodeId);
      payload.leftMenuDataSearch = convert.data;
      payload.leftMenuLastNodeId = convert.ids;
      dispatch(executeActionReducer(SET_CLICK_LEFT_MENU_ITEM, payload));
    }
  }
}

function convertFunctions2TreeView(leftMenuData: ILeftData[], path: string[], functions: IFunction[], ids: number) {
  let outPut: any = {
    data: leftMenuData,
    ids: 0
  };
  let scopes: any = {}
  functions.map((f: IFunction) => {
    if (!scopes[f.root_scope]) {
      scopes[f.root_scope] = [];
    }
    scopes[f.root_scope].push(f)
  })

  const scopesKey = Object.keys(scopes);

  let newFunctions: any = []
  let idChild = ids + scopesKey.length;
  for (let index = 0; index < scopesKey.length; index++) {
    const key = scopesKey[index];
    const values = scopes[key];
    if (values[0]) {
      let childrens: any = {
        "root_scope": values[0].root_scope,
        "display_root_scope": values[0].display_root_scope,
        "name": values[0].root_scope,
        "display_name": values[0].display_root_scope,
        "path": null,
        "id": `${ids++}`,
        "pathFocus": [...path, 'children', index],
        "info": values.length,
        "children": []
      }
      orderBy(values, ["sub_scope"]).map((f: IFunction, iFunc: any) => {
        let ff: any = {
          ...f,
          "pathFocus": [...childrens.pathFocus, 'children', iFunc],
          "id": `${idChild++}`,
          "children": []
        }
        if (f.type === "workflow") {
          ff.info = 100000
        }
        childrens.children.push(ff);
      })
      newFunctions.push(childrens)
    }
  }
  outPut.ids = ids;
  set(outPut.data, [...path, 'children'], newFunctions)
  set(outPut.data, [...path, 'info'], newFunctions.length)
  return outPut;
}

function findTreeItemByNodeId(data: ILeftData[], nodeId: string, path?: string[]) {
  let outPut: any = {
    path: path || [],
    data: null,
  };
  for (let index = 0; index < data.length; index++) {
    const element: ILeftData = data[index];
    if (!element) {continue;}
    if (!path) {
      outPut.path = [];
      outPut.path.push(index);
    }
    if (element.id === nodeId) {
      outPut.data = element;
      if (path) {
        outPut.path.push('children');
        outPut.path.push(index);
      }
      break;
    } else {
      if (path && path[0]) {
        outPut.path.push('children');
        outPut.path.push(index);
      }
      let newItem: any = findTreeItemByNodeId(element.children, nodeId, outPut.path);
      if (newItem.data) {
        outPut = newItem;
        break;
      } else {
        if (path && path[1]) {
          outPut.path.pop();
          outPut.path.pop();
        }
      }
    }
  }
  return outPut;
}

export const setSearchLeftMenu = (name: string, value: string) => async (dispatch: any, getState: any) => {
  const state = get(getState(), PATH_TO_STORE_REDUX, {});
  const leftMenuData = state.leftMenuData || [];
  let payload: any = {};
  payload[name] = value;
  if (value && value.length === 0) {
    payload.leftMenuDataSearch = leftMenuData;
  } else {
    // const menuData = cloneMenuData(cloneDeep(leftMenuData));
    // const treeItemList = findTreeItemListByName({data: leftMenuData, nextData: menuData, name: value});
    // payload.leftMenuDataSearch = treeItemList;
  }
  dispatch(executeActionReducer(SET_SEARCH_LEFT_MENU, payload));
}

// interface IFindTreeItemListByName {
//   data: ILeftData[];
//   name: string;
//   nextData?: any;
// }

// function findTreeItemListByName(input: IFindTreeItemListByName) {
//   const {data, name, nextData} = input;
//   let outPut: any = nextData;
//   if (data.length === 0) {
//     return [];
//   }
//   for (let index = 0; index < data.length; index++) {
//     const element: ILeftData = data[index];
//     if (element.display_name.toLocaleLowerCase().search(name.toLocaleLowerCase()) !== -1) {
//       set(outPut, element.pathFocus, element);
//       break;
//     } else {
//       let newItem: any = findTreeItemListByName({data: element.children, name, nextData: outPut});
//       if (newItem.length > 0) {
//         outPut = newItem;
//       } else {
//         if (element.pathFocus[element.pathFocus.length - 1] !== 'children') {
//           // deletePropertyPath(nextData, element.pathFocus);
//           set(nextData, element.pathFocus, null)
//         }
//       }
//     }
//   }
//   return outPut;
// }

// function cloneMenuData(data: ILeftData[], nextData?: ILeftData[]) {
//   let outPut: any = nextData || data;
//   if (data.length === 0) {
//     return [];
//   }
//   for (let index = 0; index < data.length; index++) {
//     const element: ILeftData = data[index];
//     if (element.children.length > 0) {
//       set(outPut, [...element.pathFocus, "children"], []);
//     }
//   }
//   return outPut;
// }

// function convert(data: ILeftData[], nextData?: ILeftData[]) {
//   let outPut: any = nextData || data;
//   if (data.length === 0) {
//     return [];
//   }
//   for (let index = 0; index < data.length; index++) {
//     const element: ILeftData = data[index];
//     if (element.children.length > 0) {
//       set(outPut, [...element.pathFocus, "children"], []);
//     }
//   }
//   return outPut;
// }

