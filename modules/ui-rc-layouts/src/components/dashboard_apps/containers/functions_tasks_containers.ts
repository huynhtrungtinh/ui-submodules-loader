import { get, cloneDeep } from 'lodash';
import { PATH_TO_STORE_REDUX, PATH_TO_STORE_REDUX_T_LAYOUTS } from '../constants';
import { FunctionsTasksComponent } from '../components'
import { PageDecorator } from '@dgtx/coreui';
import {
  getFunctionsTasks, setKeyboardFunctionsTasks,
  setKeyUpSearchFunctionsTasks, setSearchFunctionsTasks,
  setRefreshInstancesFunctionsTasks
} from '../actions'
import reducers from '../reducers';

const mapStateToProps = (state: any) => {
  let stateRedux = get(state, `${PATH_TO_STORE_REDUX}`, {});
  let stateFunctions = stateRedux.functionsTasks || {};
  let stateTLayouts = get(state, `${PATH_TO_STORE_REDUX_T_LAYOUTS}`, {});
  console.log('============FunctionsTasksComponent==========');
  console.log('disabledRefresh: ', stateFunctions.disabledRefresh);
  console.log('====================================');
  return {
    functionsView: stateFunctions.functionsView,
    searchKeyWords: stateFunctions.searchKeyWords,
    disabledRefresh: cloneDeep(stateFunctions.disabledRefresh),
    tabIndexIcon: cloneDeep(stateTLayouts.tabIndexIcon),
    substrMax: stateTLayouts.substrMax,
    breakpoints: stateTLayouts.breakpoints,
    projectId:  get(stateTLayouts, 'projectSelected.id', null)
  };
};
const mapDispatchToProps = () => {
  return {
    getData: getFunctionsTasks,
    setKeyboard: setKeyboardFunctionsTasks,
    setSearch: setSearchFunctionsTasks,
    setKeyUpSearch: setKeyUpSearchFunctionsTasks,
    setRefreshInstances: setRefreshInstancesFunctionsTasks
  };
};

export default PageDecorator({
  resources: [reducers],
  actions: mapDispatchToProps(),
  mapState: (state: any) => mapStateToProps(state)
})(FunctionsTasksComponent);
