import {cloneDeep, get} from 'lodash';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {ContentComponent} from '../components';
import {PATH_TO_STORE_REDUX} from '../constants';

const mapStateToProps = (state: any) => {
  let stateRedux = get(state, `${PATH_TO_STORE_REDUX}`, {});
  return {
    sideBarData: cloneDeep(stateRedux.sideBarDataSearch),
    // sideBarSearchValue: stateRedux.sideBarSearchValue,
    // breakpoint: stateRedux.breakpoint,
    // sideBarSelectedItem: stateRedux.sideBarSelectedItem
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(
    {
    },
    dispatch
  )
};
export default connect(mapStateToProps, mapDispatchToProps)(ContentComponent);
