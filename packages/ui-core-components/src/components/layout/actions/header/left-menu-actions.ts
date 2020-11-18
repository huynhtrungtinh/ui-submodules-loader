import {get, orderBy, set} from 'lodash';
import {IFunction, ILeftData, PATH_TO_STORE_REDUX, PROJECTS_KEY, SET_CLICK_LEFT_MENU_ITEM, SET_OPEN_LEFT_MENU} from '../../constants';
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
  const leftMenuData = state.leftMenuData || [];
  const leftMenuLastNodeId = state.leftMenuLastNodeId || 1;
  const leftMenuItem = findTreeItemByNodeId(leftMenuData, nodeId);
  let payload: any = {};
  console.log('leftMenuItem: ', leftMenuItem);
  if (get(leftMenuItem, 'data.path', '') === PROJECTS_KEY && get(leftMenuItem, 'data.children.length', 0) === 0) {
    console.log('==========setClickLeftMenuItem==========');
    const functions: any = await dispatch(callAPIGetFunctions());
    if (functions.error) {
      console.log('get functions data is error.');
    } else {
      console.log('functions: ', functions);
      const convert = convertFunctions2TreeView(leftMenuData, leftMenuItem.path, functions.data, leftMenuLastNodeId);
      console.log('leftMenuItem: ', leftMenuItem);
      console.log('nodeId: ', nodeId);
      console.log('leftMenuLastNodeId: ', leftMenuLastNodeId);
      console.log('convert: ', convert);
      console.log('====================================');
      payload.leftMenuData = convert.data;
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
        "info": values.length,
        "children": []
      }
      orderBy(values, ["sub_scope"]).map((f: IFunction) => {
        console.log('values: ', values);
        let ff: any = {
          ...f,
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
