import { get, cloneDeep } from 'lodash';
import { PATH_TO_STORE_REDUX } from '../constants';
import { DrawerAnnouncementComponent } from '../components'
import {
  updateDataDrawerAnnouncement,
  setisOpenDrawerAnnouncement,
  setClickAnnouncement,
  setIsOpenDialogDetailAnnouncement,
  setsearchKeyWordsAnnouncement
} from '../actions';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const mapStateToProps = (state: any) => {
  let stateRedux = cloneDeep(get(state, `${PATH_TO_STORE_REDUX}`, {}));
  return {
    isOpenDrawerAnnouncement: stateRedux.isOpenDrawerAnnouncement,
    isOpenDialogAnnouncement: stateRedux.isOpenDialogAnnouncement,
    dataDrawerAnnSearch: stateRedux.dataDrawerAnnSearch,
    dataDetailAnnouncement: stateRedux.dataDetailAnnouncement,
    dataAnnouncementIsSeen: stateRedux.dataAnnouncementIsSeen,
    searchKeyWordsAnnouncement: stateRedux.searchKeyWordsAnnouncement,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(
    {
      updateDataDrawerAnnouncement,
      setisOpenDrawerAnnouncement,
      setClickAnnouncement,
      setIsOpenDialogDetailAnnouncement,
      setsearchKeyWordsAnnouncement
    },
    dispatch
  )
};
export default connect(mapStateToProps, mapDispatchToProps)(DrawerAnnouncementComponent);
