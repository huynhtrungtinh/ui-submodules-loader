import { get } from 'lodash';
import { PATH_TO_STORE_REDUX } from '../constants';
import { ContactMenuComponent } from '../components'
import { setOpenContactMenu } from '../actions';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const mapStateToProps = (state: any) => {
  let stateRedux = get(state, `${PATH_TO_STORE_REDUX}`, {});
  return {
    anchorEl: stateRedux.contactAnchorEl,
    isOpen: stateRedux.isContactMenuOpen,
    datas: stateRedux.contactsData,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(
    {
      setOpen: setOpenContactMenu,
    },
    dispatch
  )
};
export default connect(mapStateToProps, mapDispatchToProps)(ContactMenuComponent);
