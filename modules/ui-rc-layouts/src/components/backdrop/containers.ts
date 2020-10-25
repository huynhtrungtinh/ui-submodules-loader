import { PageDecorator } from '@dgtx/ui-core';
import { cloneDeep, get } from 'lodash';
import { PATH_TO_STORE_REDUX } from './constants';
import reducers from './reducers';
import SimpleBackdropComponent from './SimpleBackdropComponent';

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
