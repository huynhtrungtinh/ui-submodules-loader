import { get } from 'lodash';
import { DuplicateComponents } from '../components'
import { PATH_TO_STORE_REDUX } from '../constants';
import { connect } from "react-redux";

const mapStateToProps = (state: any) => {
  let stateRedux = get(state, `${PATH_TO_STORE_REDUX}`, {});
  return {
    username: get(stateRedux, 'userInfo.username', null),
  };
};
export default connect(mapStateToProps, {})(DuplicateComponents);
