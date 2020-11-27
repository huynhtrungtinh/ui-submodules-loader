import {redirect} from '@dgtx/ui-utils';
import {cloneDeep, get, orderBy, set} from 'lodash';
import {ADD_TREE_ITEM_BY_TREE_NODE, CREATE_BREADCRUMBS_BY_TREE_NODE, IFunction, ILeftData, OPERATION_KEY, PATH_TO_STORE_REDUX, PROJECTS_OPERATION_KEY, PROJECTS_TRAINING_KEY, SET_CLICK_LEFT_MENU_ITEM, SET_OPEN_LEFT_MENU, SET_SEARCH_LEFT_MENU} from '../../constants';
import {callAPIGetFunctionsOperation} from '../call-api';
import {executeActionReducer, getPathPrefix, mergePath} from '../common-actions';
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

export const setClickLeftMenuItem = (nodeId: any, history: any) => async (dispatch: any, getState: any) => {
  const state = get(getState(), PATH_TO_STORE_REDUX, {});
  const leftMenuDataSearch = state.leftMenuDataSearch || [];
  const leftMenuItem = findTreeItemByNodeId(leftMenuDataSearch, nodeId);
  let payload: any = {};
  console.log('=========setClickLeftMenuItem========');
  console.log('nodeId: ', nodeId);
  console.log('leftMenuItem: ', leftMenuItem);
  console.log('leftMenuDataSearch: ', leftMenuDataSearch);
  payload.leftMenuSelected = leftMenuItem.data;
  const path = get(leftMenuItem, 'data.path', '');
  if (get(leftMenuItem, 'data.children.length', 0) === 0 && [PROJECTS_OPERATION_KEY, PROJECTS_TRAINING_KEY].includes(path)) {
    dispatch(addTreeItemByTreeNode(leftMenuItem.data));
  } else if (path && ![PROJECTS_OPERATION_KEY, PROJECTS_TRAINING_KEY].includes(path)) {
    dispatch(createBreadcrumbsByTreeNode(leftMenuItem.data))
    dispatch(setOpenLeftMenu(false));
    if (!leftMenuItem.data.path_prefix) {
      console.log('==============if======================');
      history.push(leftMenuItem.data.path);
    } else {
      console.log('==============else======================');
      redirect(`${leftMenuItem.data.path}`)
    }
  } else {
    dispatch(executeActionReducer(SET_CLICK_LEFT_MENU_ITEM, payload));
  }
  console.log('====================================');
}

export const addTreeItemByTreeNode = (treeNode: ILeftData) => async (dispatch: any, getState: any) => {
  const state = get(getState(), PATH_TO_STORE_REDUX, {});
  const leftMenuDataSearch = state.leftMenuDataSearch || [];
  let routers = state.routers || {};
  const leftMenuLastNodeId = state.leftMenuLastNodeId;
  const path = get(treeNode, 'path', '');
  let payload: any = {};
  if (get(treeNode, 'children.length', 0) === 0 && [PROJECTS_OPERATION_KEY, PROJECTS_TRAINING_KEY].includes(path)) {
    payload.leftMenuSelected = treeNode;
    const projectId = treeNode.name;
    const projectName = treeNode.display_name;
    console.log('treeNode: ', treeNode);
    const functions: any = await dispatch(callAPIGetFunctionsOperation(projectId, path));
    console.log('functions: ', functions);
    console.log('leftMenuLastNodeId: ', leftMenuLastNodeId);
    if (functions.error) {
      console.log('get functions data is error.');
    } else {
      payload.projectId = projectId;
      payload.projectName = projectName;
      if (path === PROJECTS_OPERATION_KEY) {
        const convertOperation = convertFunctionsOperation2TreeView({
          leftMenuData: leftMenuDataSearch,
          path: treeNode.pathFocus,
          functions: functions.data,
          ids: leftMenuLastNodeId,
          routers,
          projectId, projectName
        });
        console.log(PROJECTS_OPERATION_KEY);
        console.log('convertOperation: ', convertOperation);
        console.log('====================================');
        payload.leftMenuDataSearch = convertOperation.data;
        payload.leftMenuLastNodeId = convertOperation.ids;
        payload.routers = convertOperation.routers;
      } else if (path === PROJECTS_TRAINING_KEY) {
        const convertTraining = convertFunctionsTraining2TreeView({
          leftMenuData: leftMenuDataSearch,
          path: treeNode.pathFocus,
          functions: functions.data,
          ids: leftMenuLastNodeId,
          routers,
          projectId, projectName
        });
        console.log(PROJECTS_TRAINING_KEY);
        console.log('convertTraining: ', convertTraining);
        payload.leftMenuDataSearch = convertTraining.data;
        payload.leftMenuLastNodeId = convertTraining.ids;
        payload.routers = convertTraining.routers;
      }
    }
    dispatch(executeActionReducer(ADD_TREE_ITEM_BY_TREE_NODE, payload));
  }
}

export const createBreadcrumbsByTreeNode = (treeNode: ILeftData) => async (dispatch: any, getState: any) => {
  let payload: any = {};
  payload.breadcrumbsData = createBreadcrumbsData(treeNode);
  payload.leftMenuSelected = treeNode;
  console.log('==========createBreadcrumbsByTreeNode===========');
  console.log('treeNode: ', treeNode);
  console.log('====================================');
  dispatch(executeActionReducer(CREATE_BREADCRUMBS_BY_TREE_NODE, payload));
}

function createBreadcrumbsData(data: ILeftData) {
  let outPut: any = [];
  if (data.projectId) {
    outPut.push({
      name: data.root_app,
      path: "/"
    })
    outPut.push({
      name: data.projectName,
      path: `/${data.root_app}/${data.projectId}/`
    })
    let lastItem = {
      name: data.name,
      path: data.path
    };
    if (data.root_app === OPERATION_KEY) {
      lastItem.name = data.display_name
    }
    outPut.push(lastItem)
  } else {
    outPut.push({
      name: data.root_app,
      path: "/"
    })
    outPut.push({
      name: data.name,
      path: data.path
    })
  }
  return outPut;
}

interface IFunctions2TreeView {
  leftMenuData: ILeftData[];
  path: string[];
  functions: IFunction[];
  ids: number;
  routers: any;
  projectId: string;
  projectName: string;
}
function convertFunctionsOperation2TreeView(input: IFunctions2TreeView) {
  let {leftMenuData = [], path = '', functions = [], ids = 1, routers = {}, projectId, projectName} = input;
  let outPut: any = {
    data: leftMenuData,
    routers,
    ids: 0
  };
  let scopes: any = {}
  functions.map((f: IFunction) => {
    if (!scopes[f.root_app]) {
      scopes[f.root_app] = [];
    }
    scopes[f.root_app].push(f)
  })

  const scopesKey = Object.keys(scopes);
  const parentId = get(leftMenuData, [...path, 'nodeIds'])
  const rootItem = get(leftMenuData, path[0])
  console.log('====================================');
  console.log('path: ', path);
  console.log('rootItem: ', path);
  console.log('parent: ', parent);
  console.log('parentId: ', parentId);
  console.log('====================================');
  const pathPrefix = getPathPrefix();
  let newFunctions: any = []
  let idChild = ids + scopesKey.length;
  for (let index = 0; index < scopesKey.length; index++) {
    const key = scopesKey[index];
    const values = scopes[key];
    if (values[0]) {
      let childrens: any = {
        "root_app": values[0].root_app,
        "display_root_app": values[0].display_root_app,
        "name": values[0].root_app,
        "display_name": values[0].display_root_app,
        "path": null,
        "nodeIds": [...parentId, `${ids}`],
        "id": `${ids++}`,
        "pathFocus": [...path, 'children', index],
        "info": values.length,
        "children": []
      }
      orderBy(values, ["sub_app"]).map((f: IFunction, iFunc: any) => {
        let pathItem = mergePath({path1: f.path_prefix, path2: f.path, projectId, appName: rootItem.name, pathPrefix});
        let ff: any = {
          ...f,
          "root_app": rootItem.name,
          "display_root_app": rootItem.display_name,
          "projectId": projectId,
          "projectName": projectName,
          "path": pathItem,
          "pathFocus": [...childrens.pathFocus, 'children', iFunc],
          "nodeIds": [...childrens.nodeIds, `${idChild}`],
          "id": `${idChild++}`,
          "children": []
        }
        if (f.type === "workflow") {
          ff.info = 100000
        }
        childrens.children.push(ff);
        if (!outPut.routers[rootItem.name]) {
          outPut.routers[rootItem.name] = []
        }
        outPut.routers[rootItem.name].push(pathItem);
      })
      newFunctions.push(childrens)
    }
  }
  outPut.ids = idChild;
  set(outPut.data, [...path, 'children'], newFunctions)
  set(outPut.data, [...path, 'info'], newFunctions.length)
  return outPut;
}

function convertFunctionsTraining2TreeView(input: IFunctions2TreeView) {
  let {leftMenuData = [], path = '', functions = [], ids = 1, routers = {}, projectId, projectName} = input;
  let outPut: any = {
    data: leftMenuData,
    routers,
    ids
  };
  const pathPrefix = getPathPrefix();
  let newFunctions: any = [];
  const parentId = get(leftMenuData, [...path, 'nodeIds'])
  for (let index = 0; index < functions.length; index++) {
    const values = functions[index];
    if (values) {
      let pathItem = mergePath({path1: values.path_prefix, path2: values.path, projectId, appName: values.root_app, pathPrefix});
      let childrens: any = {
        "root_app": values.root_app,
        "display_root_app": values.display_root_app,
        "name": values.name,
        "display_name": values.display_name,
        "path": pathItem,
        "path_prefix": values.path_prefix,
        "projectId": projectId,
        "projectName": projectName,
        "nodeIds": [...parentId, `${ids}`],
        "id": `${ids++}`,
        "pathFocus": [...path, 'children', index],
        "children": []
      }
      newFunctions.push(childrens);
      if (!outPut.routers[values.root_app]) {
        outPut.routers[values.root_app] = []
      }
      outPut.routers[values.root_app].push(pathItem);
    }
  }
  outPut.ids = ids;
  set(outPut.data, [...path, 'children'], newFunctions)
  set(outPut.data, [...path, 'info'], newFunctions.length)
  return outPut;
}

export function findTreeItemByNodeId(data: ILeftData[], nodeId: string, path?: string[]) {
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


export function findTreeItemByName(data: ILeftData[], name: string, path?: string[]) {
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
    if (element.name === name) {
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
      let newItem: any = findTreeItemByName(element.children, name, outPut.path);
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
  const leftMenuData = cloneDeep(state.leftMenuData) || [];
  let leftMenuDataClonelv1 = state.leftMenuDataClonelv1;
  let isReady = state.isReady;
  if (!isReady) {return;}
  let payload: any = {};
  payload[name] = value;
  console.log('====================================');
  console.log('value: ', value);
  console.log('====================================');
  if (value.length === 0) {
    payload.leftMenuDataSearch = leftMenuData;
  } else {
    if (leftMenuDataClonelv1.length === 0) {
      leftMenuDataClonelv1 = cloneMenuData(cloneDeep(leftMenuData));
    }
    const treeItem = findTreeItemByDisplayName({data: cloneDeep(leftMenuData), nextData: leftMenuDataClonelv1, name: value});
    const treeItemFinal = convertTreeItemToLeftData(leftMenuData, treeItem);
    console.log('========setSearchLeftMenu============');
    console.log('treeItem: ', treeItem);
    console.log('treeItemFinal: ', treeItemFinal);
    console.log('====================================');
    payload.leftMenuDataSearch = treeItemFinal;
  }
  dispatch(executeActionReducer(SET_SEARCH_LEFT_MENU, payload));
}

interface IFindTreeItemByName {
  data: ILeftData[];
  name: string;
  nextData?: any;
}

function findTreeItemByDisplayName(input: IFindTreeItemByName) {
  const {data, name, nextData} = input;
  let outPut: any = nextData;
  if (data.length === 0) {
    return [];
  }
  for (let index = 0; index < data.length; index++) {
    const element: ILeftData = data[index];
    if (element.display_name.toLocaleLowerCase().search(name.toLocaleLowerCase()) !== -1) {
      set(outPut, element.pathFocus, {...element});
      if (element.children.length > 0) {
        let newItem: any = findTreeItemByDisplayName({data: element.children, name, nextData: outPut});
        if (newItem.length > 0) {
          outPut = newItem;
        } else {
          if (element.pathFocus[element.pathFocus.length - 1] !== 'children') {
            set(outPut, element.pathFocus, null);
          }
        }
      }
    } else {
      let newItem: any = findTreeItemByDisplayName({data: element.children, name, nextData: outPut});
      if (newItem.length > 0) {
        outPut = newItem;
      } else {
        if (element.pathFocus[element.pathFocus.length - 1] !== 'children') {
          set(outPut, element.pathFocus, null);
        }
      }
    }
  }
  return outPut;
}

function cloneMenuData(data: ILeftData[], nextData?: ILeftData[]) {
  let outPut: any = nextData || data;
  if (data.length === 0) {
    return [];
  }
  for (let index = 0; index < data.length; index++) {
    const element: ILeftData = data[index];
    if (element.children.length > 0) {
      set(outPut, [...element.pathFocus, "children"], []);
    }
  }
  return outPut;
}

function convertTreeItemToLeftData(dataParent: ILeftData[], data: ILeftData[], pathNext?: any[], pathParent?: any[]) {
  let outPut: any = [];
  pathNext = pathNext || [];
  pathParent = pathParent || [];
  let indexNext = 0;
  let parent: any = {}
  for (let i = 0; i < data.length; i++) {
    let element: any = data[i];
    if (!element) {continue;}
    if (element.children.length > 0) {
      parent = {
        ...element,
        children: [],
      };
      if (!element.pathFocus) {
        parent = {
          ...get(dataParent, [...pathParent, 'children', i], {}),
          pathFocus: [...pathNext, 'children', indexNext],
          children: [],
        };
      }
      else if (element.pathFocus.length > 1) {
        parent.pathFocus = [...pathNext, 'children', indexNext];
      } else if (element.pathFocus.length === 1) {
        parent.pathFocus = [indexNext];
      }
      parent.children = convertTreeItemToLeftData(dataParent, element.children, parent.pathFocus, element.pathFocus);
      if (parent.children.length > 0) {
        outPut.push(parent);
        indexNext++;
      }
    } else if (element.pathFocus.length > 1) {
      parent = {...element};
      if (element.pathFocus.length > 1) {
        parent.pathFocus = [...pathNext, 'children', indexNext++];
      } else {
        parent.pathFocus = [indexNext++];
      }
      outPut.push(parent);
    }
  }
  return outPut;
}

