import { PageDecorator } from '@dgtx/ui-core';
import { cloneDeep, get } from 'lodash';
import { setOpenLeftMenu } from '../../../layouts';
import { setKeyboard, setRefContainer } from '../actions';
import { WapperRootComponent } from '../components';
import {
    // PATH_TO_STORE_REDUX,
    PATH_TO_STORE_REDUX_T_LAYOUTS
} from '../constants';
import reducers from '../reducers';
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
