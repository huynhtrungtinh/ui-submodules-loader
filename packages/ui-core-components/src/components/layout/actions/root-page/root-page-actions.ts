import {contantsTable} from '@dgtx/ui-scl';
import {get} from 'lodash';
import {COLUMNS_PROJECT, PATH_TO_STORE_REDUX, SET_DATA_PROJECT_TABLE, SET_TAB_INDEX_PROJECT_TABLE} from '../../constants';
import {executeActionReducer} from '../common-actions';

export const getDataTableProject = () => async (dispatch: any, getState: any) => {
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
  } else if (index === 1) {
    payload.rowsProjectParent = rowsOperator;
    payload.rowsProjectView = rowsOperator.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
    payload.columnProject = COLUMNS_PROJECT;
    payload.isSelectedTab = index;
  }
  dispatch(executeActionReducer(SET_TAB_INDEX_PROJECT_TABLE, payload));
}

