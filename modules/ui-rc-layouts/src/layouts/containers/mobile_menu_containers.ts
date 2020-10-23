import { get } from 'lodash';
import { PATH_TO_STORE_REDUX } from '../constants';
import { MobileMenuComponent } from '../components'
import { setOpenMobileMenu, setOpenContactMenu, logOut } from '../actions';
import { setOpenDialogChangePassword } from '../../components/change_password';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const mapStateToProps = (state: any) => {
  let stateRedux = get(state, `${PATH_TO_STORE_REDUX}`, {});
  return {
    mobileMoreAnchorEl: stateRedux.mobileMoreAnchorEl,
    isMobileMenuOpen: stateRedux.isMobileMenuOpen,
    username: get(stateRedux, 'userInfo.username', null),
    isViewAnnouncement: stateRedux.isViewAnnouncement,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(
    {
      setOpenMobileMenu,
      setOpenContactMenu,
      setOpenDialogChangePassword,
      logOut
    },
    dispatch
  )
};
export default connect(mapStateToProps, mapDispatchToProps)(MobileMenuComponent);
