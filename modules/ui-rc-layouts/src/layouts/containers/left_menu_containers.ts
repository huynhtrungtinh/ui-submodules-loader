import { getAppVersion } from '@dgtx/ui-core';
import { get } from 'lodash';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setOpenLeftMenu } from '../actions';
import { LeftMenuComponent } from '../components';
import { PATH_TO_STORE_REDUX } from '../constants';

const mapStateToProps = (state: any) => {
  let stateRedux = get(state, `${PATH_TO_STORE_REDUX}`, {});
  return {
    isOpen: stateRedux.isLeftMenuOpen,
    routers: stateRedux.routers,
    routeFocus: stateRedux.routeFocus,
    version: getAppVersion()
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(
    {
      setOpen: setOpenLeftMenu,
    },
    dispatch
  )
};
export default connect(mapStateToProps, mapDispatchToProps)(LeftMenuComponent);
