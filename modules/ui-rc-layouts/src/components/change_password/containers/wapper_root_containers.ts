import { PageDecorator } from '@dgtx/ui-core';
import { get } from 'lodash';
import { setMofify, setOpenDialogChangePassword, setShowText, setSubmit } from '../actions';
import { WapperRootComponent } from '../components';
import { PATH_TO_STORE_REDUX } from '../constants';
import reducers from '../reducers';

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
