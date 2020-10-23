import reducers from './alert_reducers';
import AlertComponent from './AlertComponent'
import { PageDecorator } from '@dgtx/coreui';
import { setHiddenAlert, setHiddenAlertAll } from './alert_actions'
import { PATH_TO_STORE_REDUX } from './alert_constants';
import { get, cloneDeep } from 'lodash';

const mapStateToProps = (state: any) => {
    let stateRedux = get(state, `${PATH_TO_STORE_REDUX}`, {});
    const alertList = cloneDeep(stateRedux.alertList) || [];
    return { alertList };
};
const mapDispatchToProps = () => {
    return {
        setHiddenAlert,
        setHiddenAlertAll
    };
};

export default PageDecorator({
    resources: [reducers],
    actions: mapDispatchToProps(),
    mapState: (state: any) => mapStateToProps(state)
})(AlertComponent);
