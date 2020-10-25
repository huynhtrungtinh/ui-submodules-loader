import { PageDecorator } from '@dgtx/ui-core';
import { get } from 'lodash';
import { setLogOut } from '../actions';
import { DialogSuccessComponent } from '../components';
import { PATH_TO_STORE_REDUX } from '../constants';
import reducers from '../reducers';

const mapStateToProps = (state: any) => {
  let stateRedux = get(state, `${PATH_TO_STORE_REDUX}`, {});
  return {
    isOpen: stateRedux.isDialogSuccessOpen,
  };
};
const mapDispatchToProps = () => {
  return {
    setLogOut
  };
};

export default PageDecorator({
  resources: [reducers],
  actions: mapDispatchToProps(),
  mapState: (state: any) => mapStateToProps(state)
})(DialogSuccessComponent);
