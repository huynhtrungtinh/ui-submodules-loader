import { PageDecorator } from '@dgtx/ui-core';
import { get } from 'lodash';
import { getDataForReady } from '../actions';
import { WapperRootComponent } from '../components';
import { PATH_TO_STORE_REDUX } from '../constants';
import reducers from '../reducers';

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
