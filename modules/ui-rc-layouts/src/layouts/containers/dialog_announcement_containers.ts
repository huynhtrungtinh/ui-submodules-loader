import { get } from 'lodash';
import { PATH_TO_STORE_REDUX } from '../constants';
import { DialogAnnouncementComponent } from '../components'
import { setIsHideAnnouncement } from '../actions';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const mapStateToProps = (state: any) => {
  let stateRedux = get(state, `${PATH_TO_STORE_REDUX}`, {});
  return {
    isPopupAnnouncement: stateRedux.isPopupAnnouncement, 
    announcement: stateRedux.announcement
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(
    {
      setIsHideAnnouncement
    },
    dispatch
  )
};
export default connect(mapStateToProps, mapDispatchToProps)(DialogAnnouncementComponent);
