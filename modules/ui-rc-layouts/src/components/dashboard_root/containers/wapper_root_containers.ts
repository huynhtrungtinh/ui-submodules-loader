import { get, cloneDeep } from 'lodash';
import { 
  // PATH_TO_STORE_REDUX, 
  PATH_TO_STORE_REDUX_T_LAYOUTS } from '../constants';
import { WapperRootComponent } from '../components'
import { PageDecorator } from '@dgtx/coreui';
import reducers from '../reducers';
import { setKeyboard, setRefContainer } from '../actions';
import { setOpenLeftMenu} from '../../../layouts';
const mapStateToProps = (state: any) => {
  // let stateRedux = get(state, `${PATH_TO_STORE_REDUX}`, {});
  let tLayouts = get(state, `${PATH_TO_STORE_REDUX_T_LAYOUTS}`, {});
  return {
    routers: tLayouts.routers,
    tabIndexNext: cloneDeep(tLayouts.tabIndexIcon.tabIndexNext),
  };
};
const mapDispatchToProps = () => {
  return {
    setKeyboard,
    setRefContainer,
    setClickItem: setOpenLeftMenu
  };
};

export default PageDecorator({
  resources: [reducers],
  actions: mapDispatchToProps(),
  mapState: (state: any) => mapStateToProps(state)
})(WapperRootComponent);
