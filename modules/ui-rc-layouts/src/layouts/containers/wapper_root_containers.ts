import { get } from 'lodash';
import { PATH_TO_STORE_REDUX } from '../constants';
import { WapperRootComponent } from '../components'
import { PageDecorator } from '@dgtx/coreui';
import reducers from '../reducers';
import { getDataForReady } from '../actions';

const mapStateToProps = (state: any) => {
  let stateRedux = get(state, `${PATH_TO_STORE_REDUX}`, {});
  return {
    isRejectRoom: get(state, 'connect.isRejectRoom', false),
    isReady: stateRedux.isReady
  };
};
const mapDispatchToProps = () => {
  return {
    getDataForReady,
  };
};

export default PageDecorator({
  resources: [reducers],
  actions: mapDispatchToProps(),
  mapState: (state: any) => mapStateToProps(state)
})(WapperRootComponent);
