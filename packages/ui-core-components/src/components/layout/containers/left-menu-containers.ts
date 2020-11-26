import {config} from '@dgtx/ui-utils';
import {cloneDeep, get} from 'lodash';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {setClickLeftMenuItem, setOpenLeftMenu, setSearchLeftMenu} from '../actions';
import {LeftMenuComponent} from '../components';
import {PATH_TO_STORE_REDUX} from '../constants';

const mapStateToProps = (state: any) => {
  let stateRedux = get(state, `${PATH_TO_STORE_REDUX}`, {});
  return {
    isOpen: stateRedux.isLeftMenuOpen,
    routers: stateRedux.routers,
    routeFocus: stateRedux.routeFocus,
    version: config.getAppVersion(),
    leftMenuData: cloneDeep(stateRedux.leftMenuDataSearch),
    leftMenuSearch: stateRedux.leftMenuSearch,
    breakpoint: stateRedux.breakpoint,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(
    {
      setOpen: setOpenLeftMenu,
      setClickItem: setClickLeftMenuItem,
      setSearch: setSearchLeftMenu
    },
    dispatch
  )
};
export default connect(mapStateToProps, mapDispatchToProps)(LeftMenuComponent);
