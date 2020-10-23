import { get } from 'lodash';
import { PATH_TO_STORE_REDUX } from '../constants';
import { LeftMenuComponent } from '../components'
import { setOpenLeftMenu } from '../actions';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getAppVersion } from '@dgtx/coreui';

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
