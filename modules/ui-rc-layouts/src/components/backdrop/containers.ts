import reducers from './reducers';
import SimpleBackdropComponent from './SimpleBackdropComponent'
import { PageDecorator } from '@dgtx/coreui';
import { PATH_TO_STORE_REDUX } from './constants';
import { get, cloneDeep } from 'lodash';

const mapStateToProps = (state: any) => {
    let stateRedux = get(state, `${PATH_TO_STORE_REDUX}`, {});
    return {
        isOpen: cloneDeep(stateRedux.isShowBackdrop),
        background: stateRedux.background,
        iconColor: stateRedux.iconColor
    };
};
const mapDispatchToProps = () => {
    return {};
};

export default PageDecorator({
    resources: [reducers],
    actions: mapDispatchToProps(),
    mapState: (state: any) => mapStateToProps(state)
})(SimpleBackdropComponent);
