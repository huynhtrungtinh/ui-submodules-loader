import {cloneDeep, get, orderBy, set} from 'lodash';
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
  console.log('leftMenuItem: ', leftMenuItem);
  if (get(leftMenuItem, 'data.path', '') === PROJECTS_KEY && get(leftMenuItem, 'data.children.length', 0) === 0) {
    console.log('==========setClickLeftMenuItem==========');
    const functions: any = await dispatch(callAPIGetFunctions());
    if (functions.error) {
      console.log('get functions data is error.');
    } else {
      console.log('functions: ', functions);
      const convert = convertFunctions2TreeView(leftMenuDataSearch, leftMenuItem.data.pathFocus, functions.data, leftMenuLastNodeId);
      console.log('leftMenuItem: ', leftMenuItem);
      console.log('nodeId: ', nodeId);
      console.log('leftMenuLastNodeId: ', leftMenuLastNodeId);
      console.log('convert: ', convert);
      console.log('====================================');
      // payload.leftMenuData = convert.data;
      payload.leftMenuDataSearch = convert.data;
      payload.leftMenuLastNodeId = convert.ids;
      dispatch(executeActionReducer(SET_CLICK_LEFT_MENU_ITEM, payload));
    }
  }
  // let test: any = [];
  // for (let index = 0; index < 100; index++) {
  //   test.push({
  //     "customer_id": "5e04623c37dee202b0256e68",
  //     "customer_name": "CÔNG TY TNHH BẢO HIỂM NHÂN THỌ SUN LIFE VIỆT NAM",
  //     "id": `${index}`,
  //     "name": `${index}`
  //   })
  // }
  // console.log('testtesttesttest: ', JSON.stringify(test));

}

function convertFunctions2TreeView(leftMenuData: ILeftData[], path: string[], functions: IFunction[], ids: number) {
  console.log('==========convertFunctions2TreeView=======');
  console.log('leftMenuData: ', leftMenuData);
  console.log('functions: ', functions);
  console.log('ids: ', ids);
  console.log('path: ', path);
  console.log('====================================');
  //   display_name: "",
  // display_root_scope: "",
  // name: "",
  // path: "",
  // path_prefix: "",
  // root_scope: "",
  // type: ""
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

  console.log('scopes: ', scopes);
  const scopesKey = Object.keys(scopes);

  let newFunctions: any = []
  let idChild = ids + scopesKey.length;
  for (let index = 0; index < scopesKey.length; index++) {
    const key = scopesKey[index];
    const values = scopes[key];
    if (values[0]) {
      console.log('values: ', values);
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
  console.log('===========setSearchLeftMenu=======');
  console.log('name: ', name);
  console.log('value: ', value);
  const state = get(getState(), PATH_TO_STORE_REDUX, {});
  const leftMenuData = state.leftMenuData || [];
  let payload: any = {};
  payload[name] = value;
  if (value && value.length === 0) {
    payload.leftMenuDataSearch = leftMenuData;
  } else {
    const foundData = findTreeItemLisByName(leftMenuData, value);
    console.log('foundData: ', foundData);
    const newTreeData = createTreeMenuByPathFocus(cloneDeep(leftMenuData), foundData)
    console.log('newTreeData: ', newTreeData);
    console.log('====================================');
    // payload.leftMenuDataSearch = foundData;
  }
  dispatch(executeActionReducer(SET_SEARCH_LEFT_MENU, payload));
}

function findTreeItemLisByName(data: ILeftData[], name: string, nextData?: any) {
  let outPut: any = nextData || {};
  if (data.length === 0) {
    return [];
  }
  for (let index = 0; index < data.length; index++) {
    const element: ILeftData = data[index];
    if (element.display_name.toLocaleLowerCase().search(name.toLocaleLowerCase()) !== -1) {
      if (!element.pathFocus.join(',')) {
        outPut[element.pathFocus.join(',')] = {};
      }
      outPut[element.pathFocus.join(',')] = element.pathFocus;
    } else {
      let newItem: any = findTreeItemLisByName(element.children, name, outPut);
      if (newItem.length > 0) {
        outPut = {...outPut, ...newItem};
      }
    }
  }
  return outPut;
}

function createTreeMenuByPathFocus(data: ILeftData[], pathFocus: any) {
  let outPut: any = [];
  console.log('============createTreeMenuByPathFocus===============');
  console.log('data: ', data);
  console.log('pathFocus: ', pathFocus);
  const pathFocusArry = Object.keys(pathFocus);
  let indexNewTree: any = -1;
  for (let i = 0; i < pathFocusArry.length; i++) {
    const key = pathFocusArry[i];
    const values = pathFocus[key];
    const treeItemRoot = cloneDeep(get(data, [values[0]]));
    treeItemRoot.children = [];
    console.log('treeItemRoot: ', treeItemRoot);
    let path = cloneDeep(treeItemRoot.pathFocus);
    // console.log('path: ', cloneDeep(path));
    for (let j = 0; j < values.length; j++) {
      const value = values[j];
      const valuePre = values[j - 1];
      if (valuePre === 'children' && j > 0) {
        const pathPre = cloneDeep(path);
        path.push(valuePre);
        path.push(value);
        const treeItemSub1 = get(data, pathPre);
        const treeItemSub2 = get(data, path);
        const isNewItem = findTreeItemByNodeId(cloneDeep(outPut), treeItemSub2.id);
        if (!isNewItem.data) {
          // console.log('isNewItem: ', isNewItem);
          // console.log('path: ', cloneDeep(path));
          console.log('===========================');
          console.log('treeItemSub1: ', treeItemSub1);
          console.log('treeItemSub2: ', treeItemSub2);
          console.log('===========================');
          treeItemSub2.children = [];
          treeItemSub2.pathFocus = [];

        }
      } else if (j === 0) {
        const isNewItem = outPut.find((i: any) => i.id === treeItemRoot.id)
        if (!isNewItem) {
          outPut.push(treeItemRoot);
          indexNewTree = indexNewTree + 1;
          treeItemRoot.pathFocus = [indexNewTree];
        }
      }
    }
  }
  console.log('outPut: ', outPut);
  return outPut;
}
