import { get } from 'lodash';
import { PATH_TO_STORE_REDUX } from '../constants';
import { WapperRootComponent } from '../components'
import { PageDecorator } from '@dgtx/coreui';
import reducers from '../reducers';
import { setMofify, setOpenDialogChangePassword, setShowText, setSubmit } from '../actions';

const mapStateToProps = (state: any) => {
  let stateRedux = get(state, `${PATH_TO_STORE_REDUX}`, {});
  return {
    password_current: stateRedux.password_current,
    password_new: stateRedux.password_new,
    password_confirm: stateRedux.password_confirm,
    errorMessage: stateRedux.errorMessage,
    isOpen: stateRedux.isDialogChangePasswordOpen,
  };
};
const mapDispatchToProps = () => {
  return {
    setMofify,
    setOpen: setOpenDialogChangePassword,
    setShowText,
    setSubmit
  };
};

export default PageDecorator({
  resources: [reducers],
  actions: mapDispatchToProps(),
  mapState: (state: any) => mapStateToProps(state)
})(WapperRootComponent);
