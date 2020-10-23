import { get } from 'lodash';
import { PATH_TO_STORE_REDUX } from '../constants';
import { BreadcrumbsComponent } from '../components'
import { setClickBreadcrumbsItem } from '../actions';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const mapStateToProps = (state: any) => {
  let stateRedux = get(state, `${PATH_TO_STORE_REDUX}`, {});
  return {
    tabIndex: stateRedux.breadcrumbIndex,
    routeFocus: stateRedux.routeFocus,
    tabs: stateRedux.breadcrumbData,
    tabIndexIcon: stateRedux.tabIndexIcon,
    substrMax: stateRedux.substrMax,
    breakpoints: stateRedux.breakpoints,
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(
    {
      setTabIndex: setClickBreadcrumbsItem,
    },
    dispatch
  )
};
export default connect(mapStateToProps, mapDispatchToProps)(BreadcrumbsComponent);
