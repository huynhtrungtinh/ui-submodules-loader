import {PATH_TO_STORE_AUTH} from '@dgtx/ui-scl';
import {get} from 'lodash';
import {I18n} from 'react-redux-i18n';
import {match} from 'react-router-dom';
import {APPS, IApps, IFunction, ILeftData, IProject, KEY_TRANSLATE, MATCH_DEFAULT, NAME_REDUCER, OPERATION_KEY, PATH_TO_STORE_REDUX, PROJECTS_OPERATION_KEY, PROJECTS_TRAINING_KEY, SET_BREAKPOINT, SET_DATA_OPERATION, SET_DATA_READY, SET_DATA_TRAINING, UNMOUNT} from '../constants';
import {callAPIGetApps, callAPIGetFunctionOtherApp, callAPIGetProjectsOperation, callAPIGetProjectsTraining} from './call-api';
import {addTreeItemByTreeNode, createBreadcrumbsByTreeNode, findTreeItemByName} from './header';

export const executeActionReducer = (type: string, payload: any) => {
  return {type, payload, meta: {resource: NAME_REDUCER}};
};

export const unmount = () => async (dispatch: any) => {
  dispatch(executeActionReducer(UNMOUNT, {}));
};

export const setBreakpoints = (width: 'xs' | 'sm' | 'md' | 'lg' | 'xl', size: {height: 0, width: 0}) => async (dispatch: any, getState: any) => {
  const authentication = get(getState(), PATH_TO_STORE_AUTH, {});
  const {isAuthenticated = false, isCheckToken = false} = authentication || {};
  if (!isAuthenticated || !isCheckToken) {
    return;
  }
  let payload: any = {
    width: size.width,
    height: size.height,
    breakpoint: width,
    isReady: true
  };
  dispatch(executeActionReducer(SET_BREAKPOINT, payload));
}
interface IGetDataForReady {
  version: string;
  match: match;
  history: any
}
export const getDataForReady = (input: IGetDataForReady) => async (dispatch: any, getState: any) => {
  const authentication = get(getState(), PATH_TO_STORE_AUTH, {});
  const {isAuthenticated = false, isCheckToken = false} = authentication || {};
  const state = get(getState(), PATH_TO_STORE_REDUX, {});
  const leftMenuData = state.leftMenuData || [];
  if (!isAuthenticated || !isCheckToken || leftMenuData.length > 0) {
    return;
  }
  const {version = "0.0.1", match = MATCH_DEFAULT} = input;

  if (leftMenuData.length > 0) {return;}
  let payload: any = {};
  const apps: any = await dispatch(callAPIGetApps());
  const appFinal: any = [];
  if (apps.error) {
    console.log('get contacts data is error.');
  } else {
    APPS.map((appName: any) => {
      const a = apps.data.find((app: any) => app.app_name === appName);
      if (a) {
        appFinal.push(a);
      }
    })
    console.log('====================================');
    const otherApp: any = await dispatch(callAPIGetFunctionOtherApp());
    if (otherApp.error) {
      console.log('get contacts data is error.');
      dispatch(getDataOperation(match, history));
    } else {
      console.log('apps.data: ', apps.data);
      console.log('====================================');
      console.log('appFinal: ', appFinal);
      const convert1: any = convertFunctionOtherApp2TreeView(appFinal, otherApp.data);
      payload.leftMenuData = convert1.data;
      payload.leftMenuDataSearch = convert1.data;
      payload.leftMenuLastNodeId = convert1.ids;
      payload.routers = convert1.routers;
      dispatch(executeActionReducer(SET_DATA_READY, payload));
      dispatch(getDataOperation(match, history));
    }
  }
}

export const getDataOperation = (match: match, history: any) => async (dispatch: any, getState: any) => {
  const state = get(getState(), PATH_TO_STORE_REDUX, {});
  const leftMenuData = state.leftMenuData || [];
  const leftMenuLastNodeId = state.leftMenuLastNodeId;
  const projects: any = await dispatch(callAPIGetProjectsOperation());
  let payload: any = {}
  if (projects.error) {
    console.log('get projects data is error.');
    dispatch(getDataTraining(match, history));
  } else {
    const convert2: any = convertProjectsOperation2TreeView(leftMenuData, projects.data, leftMenuLastNodeId)
    payload.leftMenuData = convert2.data;
    payload.leftMenuDataSearch = convert2.data;
    payload.leftMenuLastNodeId = convert2.ids;
    payload.isReady = true;
    dispatch(executeActionReducer(SET_DATA_OPERATION, payload));
    dispatch(getDataTraining(match, history));
  }
}

export const getDataTraining = (match: match, history: any) => async (dispatch: any, getState: any) => {
  const state = get(getState(), PATH_TO_STORE_REDUX, {});
  const leftMenuData = state.leftMenuData || [];
  const leftMenuLastNodeId = state.leftMenuLastNodeId;
  const projects: any = await dispatch(callAPIGetProjectsTraining());
  let payload: any = {}
  if (projects.error) {
    console.log('get projects data is error.');
  } else {
    const convert2: any = convertProjectsTraining2TreeView(leftMenuData, projects.data, leftMenuLastNodeId)
    payload.leftMenuData = convert2.data;
    payload.leftMenuDataSearch = convert2.data;
    payload.leftMenuLastNodeId = convert2.ids;
    dispatch(executeActionReducer(SET_DATA_TRAINING, payload));
    dispatch(getDataByPathName(match, history))
  }
}

function convertProjectsOperation2TreeView(leftMenuData: ILeftData[], projects: IProject[], ids: number) {
  let outPut: any = {
    data: leftMenuData,
    ids: 0
  };
  const operation: any = leftMenuData.find((i: ILeftData) => i.name === OPERATION_KEY);
  const operationIndex: any = leftMenuData.findIndex((i: ILeftData) => i.name === OPERATION_KEY);
  if (operation) {
    let customers: any = {}
    projects.map((p: IProject) => {
      if (!customers[p.customer_id]) {
        customers[p.customer_id] = [];
      }
      customers[p.customer_id].push(p)
    })
    const customersKey = Object.keys(customers);
    let idChild = ids + customersKey.length;
    for (let index = 0; index < customersKey.length; index++) {
      const key = customersKey[index];
      const values = customers[key];
      if (values[0]) {
        let children: any = {
          "root_app": values[0].customer_id,
          "display_root_app": values[0].customer_name,
          "name": values[0].customer_id,
          "display_name": values[0].customer_name,
          "path": null,
          "nodeIds": [`${operation.id}`, `${ids}`],
          "id": `${ids++}`,
          "pathFocus": [...operation.pathFocus, 'children', index],
          "children": [],
          "info": values.length
        }
        values.map((p: IProject, iProj: any) => {
          children.children.push(
            {
              "root_app": values[0].customer_id,
              "display_root_app": values[0].customer_name,
              "name": p.id,
              "display_name": p.name,
              "path": PROJECTS_OPERATION_KEY,
              "pathFocus": [...children.pathFocus, 'children', iProj],
              "nodeIds": [...children.nodeIds, `${idChild}`],
              "id": `${idChild++}`,
              "children": []
            }
          )
        })
        operation.children.push(children)
      }
    }
    outPut.ids = idChild;
    outPut.data[operationIndex] = operation;
  }
  return outPut;
}

function convertProjectsTraining2TreeView(leftMenuData: ILeftData[], projects: IProject[], ids: number) {
  let outPut: any = {
    data: leftMenuData,
    ids: 0
  };
  const training: any = leftMenuData.find((i: ILeftData) => i.name === "training");
  const trainingIndex: any = leftMenuData.findIndex((i: ILeftData) => i.name === "training");
  if (training) {
    for (let index = 0; index < projects.length; index++) {
      const values = projects[index];
      let children: any = {
        "root_app": training.root_app,
        "display_root_app": training.display_name,
        "name": values.id,
        "display_name": values.name,
        "path": PROJECTS_TRAINING_KEY,
        "nodeIds": [...training.nodeIds, `${ids}`],
        "id": `${ids++}`,
        "pathFocus": [...training.pathFocus, 'children', index],
        "children": [],
      }
      training.children.push(children)
    }
    outPut.ids = ids;
    outPut.data[trainingIndex] = training;
  }
  return outPut;
}

function convertFunctionOtherApp2TreeView(apps: IApps[], datas: IFunction[]) {
  let outPut: any = {
    data: [],
    routers: {},
    ids: 0
  };
  let ids = apps.length + 1;
  const pathPrefix = getPathPrefix();
  apps.map((app: IApps, index: any) => {
    let item = datas.filter((i: IFunction) => i.root_app === app.app_name);
    outPut.data.push(
      {
        "root_app": app.app_name,
        "display_root_app": app.display_name || I18n.t(`${KEY_TRANSLATE}.${app.app_name}`),
        "name": app.app_name,
        "display_name": app.display_name || I18n.t(`${KEY_TRANSLATE}.${app.app_name}`),
        "path": null,
        "id": `${index + 1}`,
        "nodeIds": [`${index + 1}`],
        "children": [],
        "pathFocus": [index]
      }
    )
    if (item[0]) {
      let newItem: any = [];
      item.filter((i: IFunction, iFunc: any) => {
        let pathItem = mergePath({path1: i.path_prefix, path2: i.path, appName: app.app_name, pathPrefix});
        newItem.push(
          {
            ...i,
            "path": pathItem,
            "pathFocus": [index, "children", iFunc],
            "nodeIds": [`${index + 1}`, `${ids++}`],
            "id": `${ids++}`,
            "children": []
          }
        )
        if (!outPut.routers[app.app_name]) {
          outPut.routers[app.app_name] = []
        }
        outPut.routers[app.app_name].push(pathItem);
      });
      outPut.data[index].children = newItem;
    }
  })
  outPut.ids = ids;
  return outPut;
}

export function getHref(path: string) {
  const baseHref = window.location.origin;
  return `${baseHref}${path}`;
}

export function getPathPrefix() {
  const pathName = window.location.pathname;
  console.log('==========getPathPrefix==========');
  console.log('pathName: ', pathName);
  let pathArr = pathName.split("/");
  console.log('====================================');
  return pathArr[0] !== "" ? pathArr[0] : pathArr[1];
}
interface IMergePath {
  path1: string | undefined;
  path2: string;
  projectId?: string;
  appName?: string;
  pathPrefix?: string;
}
export function mergePath(input: IMergePath) {
  let {path1, path2, projectId, appName = "", pathPrefix = null} = input;
  let outPut: string = "";
  if (!path1) {
    path1 = appName;
  }
  let path1Arr = path1.split("/");
  let path2Arr = path2.split("/");
  if (!pathPrefix) {
    for (let i = 0; i < path1Arr.length; i++) {
      const element = path1Arr[i];
      if (element !== "") {
        outPut = outPut + "/" + element;
      }
    }
  } else {
    outPut = "/" + appName;
  }
  if (process.env["NODE_ENV"] !== "production") {
    outPut = "/" + appName;
  }
  for (let j = 0; j < path2Arr.length; j++) {
    const element = path2Arr[j];
    if (element !== "") {
      if (element === ':projectId') {
        outPut = outPut + "/" + projectId;
      } else {
        outPut = outPut + "/" + element;
      }
    }
  }
  outPut = outPut + "/";
  return outPut;
}

export const getDataByPathName = (match: match, history: any) => async (dispatch: any, getState: any) => {
  const state = get(getState(), PATH_TO_STORE_REDUX, {});
  const leftMenuData = state.leftMenuData || [];
  console.log('========getDataByPathName===========');
  console.log('leftMenuData: ', leftMenuData);
  console.log('match: ', match);
  console.log('history: ', history);
  console.log('====================================');
  const projectId = get(match, 'params.projectId', null);
  const appName = get(match, 'params.appName', null);
  const taskKeyDef = get(match, 'params.taskKeyDef', null);
  const pathName = get(match, 'url', '');
  const pathRoute = get(match, 'path', '');
  let functionName: any = taskKeyDef;
  if (projectId && appName) {
    console.log('projectId && appName: ', projectId, appName);
    const treeNode: any = findTreeItemByNameVsRootApp(leftMenuData, projectId, appName);
    await dispatch(addTreeItemByTreeNode(treeNode));
    console.log('treeNode: ', treeNode);
    if (!functionName) {
      functionName = findFunctionNameByPathName(pathName, pathRoute, ":projectId")
    }
    const newLeftMenuData = get(getState(), `${PATH_TO_STORE_REDUX}.leftMenuData`, []);
    const newTreeNode = get(newLeftMenuData, treeNode.pathFocus)
    console.log('newTreeNode: ', newTreeNode);
    console.log('functionName: ', functionName);
    const lastChild = findTreeItemByName(newTreeNode.children, functionName);
    console.log('lastChild: ', lastChild);
    dispatch(createBreadcrumbsByTreeNode(lastChild.data))
  } else if (appName) {
    functionName = findFunctionNameByPathName(pathName, pathRoute, ":appName")
    console.log('functionName: ', functionName);
    console.log('appName: ', appName);
    const treeNode: any = findTreeItemByNameVsRootApp(leftMenuData, functionName, appName);
    // await dispatch(addTreeItemByTreeNode(treeNode));
    console.log('treeNode: ', treeNode);
  }
}

export function findFunctionNameByPathName(pathName: string, pathRoute: string, findKey: string) {
  const pathNameKeys = pathName.split("/");
  const pathRouteKeys = pathRoute.split("/");
  let outPut: any = null;
  for (let index = 0; index < pathNameKeys.length; index++) {
    if (pathRouteKeys[index] === findKey) {
      outPut = pathNameKeys[index + 1];
      break;
    }
  }
  return outPut;
}

export function findTreeItemByNameVsRootApp(data: ILeftData[], projectId: string, appName?: string) {
  let outPut: any = null;
  let items: any = data;
  if (appName) {
    const app: any = data.find((app: any) => app.root_app === appName);
    items = app.children;
  }
  for (let index = 0; index < items.length; index++) {
    const item = items[index];
    if (item.name === projectId) {
      outPut = item;
      break;
    } else if (item.children.length > 0) {
      outPut = findTreeItemByNameVsRootApp(item.children, projectId);
      if (outPut) {
        break;
      }
    }
  }
  return outPut;
}
