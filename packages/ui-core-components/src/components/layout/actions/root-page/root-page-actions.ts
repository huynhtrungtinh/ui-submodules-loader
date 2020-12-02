import {contantsTable} from '@dgtx/ui-scl';
import {get} from 'lodash';
import {COLUMNS_PROJECT, PATH_TO_STORE_REDUX, SET_BACK_PROJECT_TABLE, SET_DATA_PROJECT_TABLE, SET_ROW_SELECTED_PROJECT_TABLE, SET_TAB_INDEX_PROJECT_TABLE} from '../../constants';
import {callAPIGetFunctionsOperation} from '../call-api';
import {executeActionReducer} from '../common-actions';
import {convertFunctions2ProjectData} from './root-page-utils';

export const getDataRootPage = () => async (dispatch: any, getState: any) => {
  const state = get(getState(), PATH_TO_STORE_REDUX, {});
  const rowsTraining = state.rowsProjectTrainingParent || [];
  const rowsOperator = state.rowsProjectOperatorParent || [];
  const isSelectedTab = state.isSelectedTab;
  const page = state.pageProject;
  const rowsPerPage = state.rowsPerPageProject || contantsTable.ROWS_PER_PAGE_OPTIONS[0];
  let payload: any = {};
  // rowsProjectParent: [],
  // rowsProjectView: [],
  console.log('=======getDataTableProject==========');
  console.log();
  console.log('====================================');
  if (isSelectedTab === 0) {
    payload.rowsProjectParent = rowsTraining;
    payload.rowsProjectView = rowsTraining.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
    payload.columnProject = [COLUMNS_PROJECT[0]];
  } else if (isSelectedTab === 1) {
    payload.rowsProjectParent = rowsOperator;
    payload.rowsProjectView = rowsOperator.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
    payload.columnProject = COLUMNS_PROJECT;
  }
  dispatch(executeActionReducer(SET_DATA_PROJECT_TABLE, payload));
}

export const setTabIndex = (index: any) => async (dispatch: any, getState: any) => {
  const state = get(getState(), PATH_TO_STORE_REDUX, {});
  const rowsTraining = state.rowsProjectTrainingParent || [];
  const rowsOperator = state.rowsProjectOperatorParent || [];
  const isSelectedTab = state.isSelectedTab;
  console.log('=========setTabIndex================');
  console.log('index: ', index);
  console.log('isSelectedTab: ', isSelectedTab);
  console.log('====================================');
  if (isSelectedTab === index) {return;}
  const page = state.pageProject;
  const rowsPerPage = state.rowsPerPageProject || contantsTable.ROWS_PER_PAGE_OPTIONS[0];
  let payload: any = {};
  if (index === 0) {
    payload.rowsProjectParent = rowsTraining;
    payload.rowsProjectView = rowsTraining.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
    payload.columnProject = [COLUMNS_PROJECT[0]];
    payload.isSelectedTab = index;
    payload.rowsProjectSelected = {};
  } else if (index === 1) {
    payload.rowsProjectParent = rowsOperator;
    payload.rowsProjectView = rowsOperator.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
    payload.columnProject = COLUMNS_PROJECT;
    payload.isSelectedTab = index;
    payload.rowsProjectSelected = {};
  }
  dispatch(executeActionReducer(SET_TAB_INDEX_PROJECT_TABLE, payload));
}

export const setClickItemOprTrai = (row: any, history: any) => async (dispatch: any, getState: any) => {
  const state = get(getState(), PATH_TO_STORE_REDUX, {});
  const rowsTraining = state.rowsProjectTrainingParent || [];
  const rowsOperator = state.rowsProjectOperatorParent || [];
  const isSelectedTab = state.isSelectedTab;
  const sideBarDataSearch = state.sideBarDataSearch || [];
  console.log('=========setClickItemOprTrai=====');
  console.log('row: ', row);
  console.log('history: ', history);
  console.log('rowsTraining: ', rowsTraining);
  console.log('rowsOperator: ', rowsOperator);
  console.log('isSelectedTab: ', isSelectedTab);
  console.log('=================================');
  // history.push(`/projects/${row.name}`)
  let payload: any = {};
  let project: any = null;
  payload.rowsProjectSelected = row;
  if (isSelectedTab === 0) {
    project = rowsTraining[row.indexItem];
  } else if (isSelectedTab === 1) {
    project = rowsOperator[row.indexItem];
  }
  console.log('project: ', project);
  if (project) {
    const rootApp = sideBarDataSearch[project.pathFocus[0]];
    const functions: any = await dispatch(callAPIGetFunctionsOperation(project.name, rootApp.name));
    console.log('functions: ', functions);
    if (functions.error) {
      console.log('get functions data is error.');
    } else {
      const dataFinal = convertFunctions2ProjectData(functions.data, project.name);
      console.log('dataFinal: ', dataFinal);
      row.children = dataFinal;
    }
  }
  dispatch(executeActionReducer(SET_ROW_SELECTED_PROJECT_TABLE, payload));
}

export const setBackOprTrai = () => async (dispatch: any, getState: any) => {
  let payload: any = {};
  payload.rowsProjectSelected = {};
  dispatch(executeActionReducer(SET_BACK_PROJECT_TABLE, payload));
}

