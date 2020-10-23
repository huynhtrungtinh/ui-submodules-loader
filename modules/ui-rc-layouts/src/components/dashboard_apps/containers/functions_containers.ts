import { get, cloneDeep } from 'lodash';
import { PATH_TO_STORE_REDUX, PATH_TO_STORE_REDUX_T_LAYOUTS } from '../constants';
import { FunctionsComponent } from '../components'
import { PageDecorator } from '@dgtx/coreui';
import {
  getFunctions, setKeyboardFunctions, setRefContainerFunctions,
  setKeyUpSearchFunctions, setSearchFunctions
} from '../actions'
import reducers from '../reducers';

const mapStateToProps = (state: any) => {
  let stateRedux = get(state, `${PATH_TO_STORE_REDUX}`, {});
  let stateFunctions = stateRedux.functions || {};
  let stateTLayouts = get(state, `${PATH_TO_STORE_REDUX_T_LAYOUTS}`, {});
  return {
    functionsView: stateFunctions.functionsView,
    searchKeyWords: stateFunctions.searchKeyWords,
    tabIndexIcon: cloneDeep(stateTLayouts.tabIndexIcon),
    substrMax: stateTLayouts.substrMax,
    breakpoints: stateTLayouts.breakpoints,
    projectId:  get(stateTLayouts, 'projectSelected.id', null),
    
  };
};
const mapDispatchToProps = () => {
  return {
    getData: getFunctions,
    setKeyboard: setKeyboardFunctions,
    setRefContainer: setRefContainerFunctions,
    setSearch: setSearchFunctions,
    setKeyUpSearch: setKeyUpSearchFunctions,
  };
};

export default PageDecorator({
  resources: [reducers],
  actions: mapDispatchToProps(),
  mapState: (state: any) => mapStateToProps(state)
})(FunctionsComponent);
