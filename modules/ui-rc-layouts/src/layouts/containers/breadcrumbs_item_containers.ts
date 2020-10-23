import { get, cloneDeep } from 'lodash';
import { PATH_TO_STORE_REDUX, PATH_TO_STORE_REDUX_DASHBOARD_APPS } from '../constants';
import { BreadcrumbsItemComponent } from '../components'
import { createBreadcrumbsByPathName } from '../actions';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const mapStateToProps = (state: any) => {
  let stateRedux = get(state, `${PATH_TO_STORE_REDUX}`, {});
  const stateDA = get(state, PATH_TO_STORE_REDUX_DASHBOARD_APPS, {});
  return {
    tabIndex: stateRedux.breadcrumbIndex,
    tabs: stateRedux.breadcrumbData,
    projectsParent: cloneDeep(get(stateDA, 'projects.projectsParent', [])),
    functionsParent: cloneDeep(get(stateDA, 'functions.functionsParent', []))
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(
    {
      createBreadcrumbsByPathName
    },
    dispatch
  )
};
export default connect(mapStateToProps, mapDispatchToProps)(BreadcrumbsItemComponent);
