import { get, cloneDeep } from 'lodash';
import { PATH_TO_STORE_REDUX, PATH_TO_STORE_REDUX_T_LAYOUTS } from '../constants';
import { ProjectsComponent } from '../components'
import { PageDecorator } from '@dgtx/coreui';
import {
  getProjects, setKeyboardProjects, setRefContainerProjects, setClickProject, setSearchProject,
  setKeyUpSearchProjects, setViewProjects
} from '../actions'
import reducers from '../reducers';

const mapStateToProps = (state: any) => {
  let stateRedux = get(state, `${PATH_TO_STORE_REDUX}`, {});
  let stateProjects = stateRedux.projects || {};
  let stateTLayouts = get(state, `${PATH_TO_STORE_REDUX_T_LAYOUTS}`, {});
  return {
    projectsView: stateProjects.projectsView,
    isSort: stateProjects.isSort,
    isView: stateProjects.isView,
    searchKeyWords: stateProjects.searchKeyWords,
    tabIndexNext: cloneDeep(stateTLayouts.tabIndexIcon.tabIndexNext),
    tabIndexIcon: cloneDeep(stateTLayouts.tabIndexIcon),
    substrMax: stateTLayouts.substrMax,
    breakpoints: stateTLayouts.breakpoints,
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
  };
};

export default PageDecorator({
  resources: [reducers],
  actions: mapDispatchToProps(),
  mapState: (state: any) => mapStateToProps(state)
})(ProjectsComponent);
