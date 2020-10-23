import {
  PATH_TO_STORE_REDUX,
  PATH_TO_STORE_REDUX_T_LAYOUTS,
  POSTFIX_ID_REF_PROJECT,
  SET_GET_DATA_FOR_READY_PROJECT,
  SET_KEYBOARD_PROJECT,
  SET_REF_CONTAINER_PROJECT,
  SET_SEARCH_PROJECT,
  SET_VIEW_PROJECT,
  SET_SORT_PROJECT,
  ROWS_PER_PAGE_OPTIONS,
  SET_PAGE_PROJECT,
  SET_ROWS_PER_PAGE_PROJECT
} from '../constants';
import { callAPIGetProjects } from './call_api';
import { get, isEmpty, orderBy } from 'lodash';
import { updateBreadcrumbs } from '../../../layouts';
import { executeActionReducer } from './common_actions';

export const setRefContainerProjects = (refContainer: any) => async (dispatch: any, getState: any) => {
  if (refContainer.current && Array.from(refContainer.current.children)) {
    const state = get(getState(), PATH_TO_STORE_REDUX, {});
    let projects = state.projects || {};
    projects.refContainer = refContainer;
    dispatch(executeActionReducer(SET_REF_CONTAINER_PROJECT, { projects }));
  }
}

export const getProjects = () => async (dispatch: any, getState: any) => {
  const state = get(getState(), PATH_TO_STORE_REDUX, {});
  const stateTLayouts = get(getState(), PATH_TO_STORE_REDUX_T_LAYOUTS, {});
  const routeFocus: any = stateTLayouts.routeFocus || {};
  let payload: any = state.projects || {};
  let projects: any = state.projects || {};
  if (projects.projectsParent && projects.projectsParent.length === 0) {
    const dataAPI: any = await callAPIGetProjects(routeFocus.app_name);
    if (dataAPI.error) {
      console.log('get contacts data is error.');
      payload.isReady = false;
    } else {
      payload.projectsParent = dataAPI.data;
      payload.projectsView = dataAPI.data;
    }
    dispatch(executeActionReducer(SET_GET_DATA_FOR_READY_PROJECT, { projects: payload }));
  }
};

export const setKeyboardProjects = (event: any, history: any) => async (dispatch: any, getState: any) => {
  const state = get(getState(), PATH_TO_STORE_REDUX, {});
  const stateTLayouts = get(getState(), PATH_TO_STORE_REDUX_T_LAYOUTS, {});
  const cols = stateTLayouts.cols;
  const isLeftMenuOpen = stateTLayouts.isLeftMenuOpen;
  if (isLeftMenuOpen) {
    return;
  }
  const projects = state.projects || {};
  const projectsView = projects.projectsView || [];
  const selectedProject = projects.selectedProject;
  const refContainer = projects.refContainer;
  const keyCode = event.keyCode;
  let payload: any = state.projects || {};
  if (keyCode === 13 && !isEmpty(selectedProject)) {
    dispatch(updateBreadcrumbs({
      type: "project",
      data: {
        name: selectedProject.id,
        display_name: selectedProject.name,
        path: `/projects/${selectedProject.id}`,
        index: 1,
      },
      history
    }))
    return;
  }
  if ([37, 38, 39, 40].includes(keyCode)) {
    const newProject = getIndexNetByKeycode({ keyCode, datas: projectsView, indexPresent: (selectedProject && selectedProject.index >= 0) ? selectedProject.index : -1, cols })
    if (!isEmpty(newProject)) {
      let id = `${newProject.id}${POSTFIX_ID_REF_PROJECT}`
      const cardTag = getIndexTargetById(refContainer, id);
      if (cardTag) {
        cardTag.focus();
        cardTag.scrollIntoView({
          behavior: "smooth", // smooth auto
          block: "center",
          inline: "center"
        });
        payload.selectedProject = newProject;
        dispatch(executeActionReducer(SET_KEYBOARD_PROJECT, { projects: payload }));
      }
    }
  }
};

export const setClickProject = (project: any, history: any) => async (dispatch: any, getState: any) => {
  dispatch(updateBreadcrumbs({
    type: "project",
    data: {
      name: project.id,
      display_name: project.name,
      path: `/projects/${project.id}`,
      index: 1,
    },
    history
  }))
}

export const setSearchProject = (searchKeyWords: any) => async (dispatch: any, getState: any) => {
  const state = get(getState(), PATH_TO_STORE_REDUX, {});
  const projects = state.projects || {};
  const projectsParent = projects.projectsParent;
  let payload: any = state.projects || {};
  payload.searchKeyWords = searchKeyWords;
  if (!searchKeyWords || searchKeyWords.length === 0) {
    payload.projectsView = projectsParent;
  }
  dispatch(executeActionReducer(SET_SEARCH_PROJECT, { projects: payload }));
}

export const setKeyUpSearchProjects = (event: any) => async (dispatch: any, getState: any) => {
  const state = get(getState(), PATH_TO_STORE_REDUX, {});
  const stateTLayouts = get(getState(), PATH_TO_STORE_REDUX_T_LAYOUTS, {});
  const isLeftMenuOpen = stateTLayouts.isLeftMenuOpen;
  if (isLeftMenuOpen) {
    return;
  }
  const keyCode = event.keyCode;
  if (keyCode === 13) {
    const projects = state.projects || {};
    let payload: any = state.projects || {};
    const projectsParent = projects.projectsParent || [];
    const searchKeyWords = projects.searchKeyWords || "";
    let newRowsTable = null;
    if (searchKeyWords && searchKeyWords.length > 0) {
      const newSearchKeyWords = searchKeyWords.toUpperCase();
      newRowsTable = projectsParent.filter((i: any) =>
        i.name.toUpperCase().search(newSearchKeyWords) !== -1 ||
        i.id.toUpperCase().search(newSearchKeyWords) !== -1 ||
        i.customer_name.toUpperCase().search(newSearchKeyWords) !== -1 ||
        i.customer_id.toString().search(newSearchKeyWords) !== -1
      );
    } else {
      newRowsTable = projectsParent;
    }
    payload.projectsView = newRowsTable;
    dispatch(executeActionReducer(SET_SEARCH_PROJECT, { projects: payload }));
  }
}

export const setViewProjects = (type: any, value: any) => async (dispatch: any, getState: any) => {
  const state = get(getState(), PATH_TO_STORE_REDUX, {});
  let payload: any = state.projects || {};
  payload[type] = value;
  dispatch(executeActionReducer(SET_VIEW_PROJECT, { projects: payload }));
}

export const setSortProjects = (column: any) => async (dispatch: any, getState: any) => {
  const state = get(getState(), PATH_TO_STORE_REDUX, {});
  let projects: any = state.projects || {};
  let columnProject: any = projects.columnProject || [];
  let payload: any = state.projects || {};
  let page: any = projects.page || 0;
  let rowsPerPage: any = projects.rowsPerPage || ROWS_PER_PAGE_OPTIONS[0];
  let sortDirection: any = "none";
  let sortColumnCurrent = columnProject.filter((c: any) => c.sortColumn && c.id !== column.id)[0];
  switch (columnProject[column.index].sortDirection) {
    case "none": {
      sortDirection = "asc";
      columnProject[column.index].sortColumn = true;
      columnProject[column.index].sortDirection = sortDirection;
      break;
    }
    case "asc": {
      sortDirection = "desc";
      columnProject[column.index].sortColumn = true;
      columnProject[column.index].sortDirection = sortDirection;
      break;
    }
    case "desc": {
      sortDirection = "none";
      columnProject[column.index].sortColumn = false;
      columnProject[column.index].sortDirection = sortDirection;
      break;
    }
    default:
      break;
  }
  if (sortColumnCurrent) {
    columnProject[sortColumnCurrent.index].sortColumn = false;
    columnProject[sortColumnCurrent.index].sortDirection = "none";
    payload.projectsView = orderBy(state.projects.projectsView, [column.id], sortDirection);
  } else if (sortDirection === "none") {
    payload.projectsView = state.projects.projectsParent.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
  } else {
    payload.projectsView = orderBy(state.projects.projectsView, [column.id], sortDirection);
  }
  payload.columnProject = columnProject;
  dispatch(executeActionReducer(SET_SORT_PROJECT, { projects: payload }));
}

export const setPageProjects = (value: any) => async (dispatch: any, getState: any) => {
  const state = get(getState(), PATH_TO_STORE_REDUX, {});
  let payload: any = state.projects || {};
  payload.page = value;
  dispatch(executeActionReducer(SET_PAGE_PROJECT, { projects: payload }));
}

export const setRowsPerPageProjects = ( value: any) => async (dispatch: any, getState: any) => {
  const state = get(getState(), PATH_TO_STORE_REDUX, {});
  let payload: any = state.projects || {};
  payload.rowsPerPage = value;
  dispatch(executeActionReducer(SET_ROWS_PER_PAGE_PROJECT, { projects: payload }));
}

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
  datas: any[];
  indexPresent: number;
  cols: number;
}

function getIndexNetByKeycode(input: IGetIndex) {
  let { keyCode, datas, indexPresent, cols } = input;
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

export function convertDataProjects(datas: any) {
  let outPut: any = [];
  datas.map((d: any, index: any) => {
    outPut.push({
      ...d,
      index
    })
  })
  return orderBy(outPut, ["name"])
}


