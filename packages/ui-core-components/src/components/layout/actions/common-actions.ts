import {I18n} from 'react-redux-i18n';
import {IApps, IFunction, ILeftData, IProject, KEY_TRANSLATE, NAME_REDUCER, PROJECTS_KEY, SET_BREAKPOINT, SET_DATA_READY, UNMOUNT} from '../constants';
import {callAPIGetApps, callAPIGetProjects, callAPIGetScope} from './call-api';

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
    const convert1: any = convertFunction2TreeView(apps.data, scope.data);
    payload.leftMenuData = convert1.data;
    payload.leftMenuDataSearch = convert1.data;
    dispatch(executeActionReducer(SET_DATA_READY, payload));
    const projects: any = await dispatch(callAPIGetProjects());
    if (projects.error) {
      console.log('get projects data is error.');
    } else {
      const convert2: any = convertProjects2TreeView(payload.leftMenuData, projects.data, convert1.ids)
      payload.leftMenuData = convert2.data;
      payload.leftMenuDataSearch = convert2.data;
      payload.leftMenuLastNodeId = convert2.ids;
      dispatch(executeActionReducer(SET_DATA_READY, payload));
    }
  }
}

function convertProjects2TreeView(leftMenuData: ILeftData[], projects: IProject[], ids: number) {
  let outPut: any = {
    data: leftMenuData,
    ids: 0
  };
  const operation: any = leftMenuData.find((i: ILeftData) => i.name === "operation");
  const operationIndex: any = leftMenuData.findIndex((i: ILeftData) => i.name === "operation");
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
          "root_scope": values[0].customer_id,
          "display_root_scope": values[0].customer_name,
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
              "root_scope": p.id,
              "display_root_scope": p.name,
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


function convertFunction2TreeView(apps: IApps[], datas: IFunction[]) {
  let outPut: any = {
    data: [],
    ids: 0
  };
  let ids = apps.length + 1;
  apps.map((app: IApps, index: any) => {
    let item = datas.filter((i: IFunction) => i.root_scope === app.app_name);
    outPut.data.push(
      {
        "root_scope": app.app_name,
        "display_root_scope": app.display_name || I18n.t(`${KEY_TRANSLATE}.${app.app_name}`),
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
