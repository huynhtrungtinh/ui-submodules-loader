import {get} from 'lodash';
import {I18n} from 'react-redux-i18n';
import {APPS, IApps, IFunction, ILeftData, IProject, KEY_TRANSLATE, NAME_REDUCER, OPERATION_KEY, PATH_TO_STORE_REDUX, PROJECTS_KEY, SET_BREAKPOINT, SET_DATA_READY, UNMOUNT} from '../constants';
import {callAPIGetApps, callAPIGetProjectsOperation, callAPIGetProjectsTraining, callAPIGetScope} from './call-api';

export const executeActionReducer = (type: string, payload: any) => {
  return {type, payload, meta: {resource: NAME_REDUCER}};
};

export const unmount = () => async (dispatch: any) => {
  dispatch(executeActionReducer(UNMOUNT, {}));
};

export const setBreakpoints = (width: 'xs' | 'sm' | 'md' | 'lg' | 'xl', size: {height: 0, width: 0}) => async (dispatch: any, getState: any) => {
  let payload: any = {
    width: size.width,
    height: size.height,
    breakpoint: width,
    isReady: true
  };
  dispatch(executeActionReducer(SET_BREAKPOINT, payload));
}

export const getDataForReady = ({version = "0.0.1"}) => async (dispatch: any, getState: any) => {
  let payload: any = {}
  const apps: any = await dispatch(callAPIGetApps());
  const scope: any = await dispatch(callAPIGetScope());
  if (scope.error || apps.error) {
    console.log('get contacts data is error.');
  } else {
    console.log('====================================');
    console.log('apps.data: ', apps.data);
    console.log('====================================');
    const appFinal: any = [];
    apps.data.map((a: any) => {
      if (APPS.includes(a.app_name)) {
        appFinal.push(a);
      }
    })
    console.log('appFinal: ', appFinal);
    const convert1: any = convertFunction2TreeView(appFinal, scope.data);
    payload.leftMenuData = convert1.data;
    payload.leftMenuDataSearch = convert1.data;
    payload.leftMenuLastNodeId = convert1.ids;
    dispatch(executeActionReducer(SET_DATA_READY, payload));
    dispatch(getDataOperation());
  }
}

export const getDataOperation = () => async (dispatch: any, getState: any) => {
  const state = get(getState(), PATH_TO_STORE_REDUX, {});
  const leftMenuData = state.leftMenuData || [];
  const leftMenuLastNodeId = state.leftMenuLastNodeId;
  const projects: any = await dispatch(callAPIGetProjectsOperation());
  let payload: any = {}
  if (projects.error) {
    console.log('get projects data is error.');
  } else {
    const convert2: any = convertProjectsOperation2TreeView(leftMenuData, projects.data, leftMenuLastNodeId)
    payload.leftMenuData = convert2.data;
    payload.leftMenuDataSearch = convert2.data;
    payload.leftMenuLastNodeId = convert2.ids;
    dispatch(executeActionReducer(SET_DATA_READY, payload));
    dispatch(getDataTraining());
  }
}

export const getDataTraining = () => async (dispatch: any, getState: any) => {
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
    dispatch(executeActionReducer(SET_DATA_READY, payload));
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
          "id": `${ids++}`,
          "pathFocus": [...operation.pathFocus, 'children', index],
          "children": [],
          "info": values.length
        }
        values.map((p: IProject, iProj: any) => {
          children.children.push(
            {
              "root_app": p.id,
              "display_root_app": p.name,
              "name": p.id,
              "display_name": p.name,
              "path": PROJECTS_KEY,
              "pathFocus": [...children.pathFocus, 'children', iProj],
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
        "root_app": values.id,
        "display_root_app": values.name,
        "name": values.id,
        "display_name": values.name,
        "path": null,
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

function convertFunction2TreeView(apps: IApps[], datas: IFunction[]) {
  let outPut: any = {
    data: [],
    ids: 0
  };
  let ids = apps.length + 1;
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
        "children": [],
        "pathFocus": [index]
      }
    )
    if (item[0]) {
      let newItem: any = []
      item.filter((i: IFunction, iFunc: any) => {
        newItem.push(
          {
            ...i,
            "pathFocus": [index, "children", iFunc],
            "id": `${ids++}`,
            "children": []
          }
        )
      });
      outPut.data[index].children = newItem;
    }
  })
  outPut.ids = ids;
  return outPut;
}
