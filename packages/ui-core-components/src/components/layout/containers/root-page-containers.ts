import {get} from 'lodash';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {setTabIndex} from '../actions';
import {RootPageComponent} from '../components';
import {PATH_TO_STORE_REDUX} from '../constants';
const mapStateToProps = (state: any) => {
  let stateRedux = get(state, `${PATH_TO_STORE_REDUX}`, {});
  return {
    sideBarData: stateRedux.sideBarDataSearch,
    isSelectedTab: stateRedux.isSelectedTab,
    // sideBarSearchValue: stateRedux.sideBarSearchValue,
    // breakpoint: stateRedux.breakpoint,
    // sideBarSelectedItem: stateRedux.sideBarSelectedItem
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(
    {
      setTabIndex
    },
    dispatch
  )
};
export default connect(mapStateToProps, mapDispatchToProps)(RootPageComponent);
