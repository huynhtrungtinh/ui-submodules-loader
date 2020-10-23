import { get, cloneDeep } from 'lodash';
import { PATH_TO_STORE_REDUX, PATH_TO_STORE_REDUX_T_LAYOUTS } from '../constants';
import { TableProjectsComponent } from '../components'
import { PageDecorator } from '@dgtx/coreui';
import {
  getProjects, setKeyboardProjects, setRefContainerProjects, setClickProject, setSearchProject,
  setKeyUpSearchProjects, setViewProjects, setSortProjects, setPageProjects, setRowsPerPageProjects
} from '../actions'
import reducers from '../reducers';

const mapStateToProps = (state: any) => {
  let stateRedux = get(state, `${PATH_TO_STORE_REDUX}`, {});
  let stateProjects = stateRedux.projects || {};
  let stateTLayouts = get(state, `${PATH_TO_STORE_REDUX_T_LAYOUTS}`, {});
  return {
    rows: stateProjects.projectsView,
    isSort: stateProjects.isSort,
    isView: stateProjects.isView,
    columns: stateProjects.columnProject,
    page: stateProjects.page,
    rowsPerPage: stateProjects.rowsPerPage,
    searchKeyWords: stateProjects.searchKeyWords,
    tabIndexNext: cloneDeep(stateTLayouts.tabIndexIcon.tabIndexNext),
    tabIndexIcon: cloneDeep(stateTLayouts.tabIndexIcon),
    substrMax: stateTLayouts.substrMax,
    cols: stateTLayouts.cols,
  };
};
const mapDispatchToProps = () => {
  return {
    getData: getProjects,
    setKeyboard: setKeyboardProjects,
    setRefContainer: setRefContainerProjects,
    setClick: setClickProject,
    setSearch: setSearchProject,
    setKeyUpSearch: setKeyUpSearchProjects,
    setView: setViewProjects,
    setSort: setSortProjects,
    setPage: setPageProjects,
    setRowsPerPage: setRowsPerPageProjects,
  };
};

export default PageDecorator({
  resources: [reducers],
  actions: mapDispatchToProps(),
  mapState: (state: any) => mapStateToProps(state)
})(TableProjectsComponent);
