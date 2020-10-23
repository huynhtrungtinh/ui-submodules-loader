import { get } from 'lodash';
import { PATH_TO_STORE_REDUX } from '../constants';
import { MenuComponent } from '../components'
import { setOpenMenuProfile, logOut } from '../actions';
import { setOpenDialogChangePassword } from '../../components/change_password';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const mapStateToProps = (state: any) => {
  let stateRedux = get(state, `${PATH_TO_STORE_REDUX}`, {});
  return {
    anchorEl: stateRedux.profileAnchorEl,
    isOpen: stateRedux.isMenuProfileOpen,
    username: get(stateRedux, 'userInfo.username', null),
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(
    {
      setOpen: setOpenMenuProfile,
      setOpenDialogChangePassword,
      logOut
    },
    dispatch
  )
};
export default connect(mapStateToProps, mapDispatchToProps)(MenuComponent);
