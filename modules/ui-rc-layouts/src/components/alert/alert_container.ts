import { PageDecorator } from '@dgtx/ui-core';
import { cloneDeep, get } from 'lodash';
import AlertComponent from './AlertComponent';
import { setHiddenAlert, setHiddenAlertAll } from './alert_actions';
import { PATH_TO_STORE_REDUX } from './alert_constants';
import reducers from './alert_reducers';

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
