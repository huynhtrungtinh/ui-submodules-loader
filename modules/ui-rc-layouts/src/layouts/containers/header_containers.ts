import { get } from 'lodash';
import { PATH_TO_STORE_REDUX } from '../constants';
import { HeaderComponent } from '../components'
import { setOpenMobileMenu, setOpenMenuProfile, setOpenContactMenu, setisOpenDrawerAnnouncement,
  setOpenLeftMenu, setBreakpoints
} from '../actions';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const mapStateToProps = (state: any) => {
  let stateRedux = get(state, `${PATH_TO_STORE_REDUX}`, {});
  return {
    username: get(stateRedux, 'userInfo.username', null),
    displayName: get(stateRedux, 'userInfo.displayName', null),
    isViewBreadcrumbs: stateRedux.isViewBreadcrumbs,
    isViewAnnouncement: stateRedux.isViewAnnouncement,
    tabIndexIcon: stateRedux.tabIndexIcon,
    appName: stateRedux.routeFocus.app_name,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(
    {
      setOpenMenuProfile,
      setOpenMobileMenu,
      setOpenContactMenu,
      setisOpenDrawerAnnouncement,
      setOpenLeftMenu,
      setBreakpoints
    },
    dispatch
  )
};
export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);
