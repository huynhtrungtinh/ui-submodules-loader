import { PageDecorator } from '@dgtx/ui-core';
import { cloneDeep, get } from 'lodash';
import {
    getFunctionsTasks, setKeyboardFunctionsTasks,
    setKeyUpSearchFunctionsTasks,
    setRefreshInstancesFunctionsTasks, setSearchFunctionsTasks
} from '../actions';
import { FunctionsTasksComponent } from '../components';
import { PATH_TO_STORE_REDUX, PATH_TO_STORE_REDUX_T_LAYOUTS } from '../constants';
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
