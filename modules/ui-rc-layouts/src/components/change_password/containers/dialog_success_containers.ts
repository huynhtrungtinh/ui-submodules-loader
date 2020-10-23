import { get } from 'lodash';
import { PATH_TO_STORE_REDUX } from '../constants';
import { DialogSuccessComponent } from '../components'
import { PageDecorator } from '@dgtx/coreui';
import reducers from '../reducers';
import { setLogOut } from '../actions';

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
