import {PageDecorator} from '@dgtx/ui-core';
import {get} from 'lodash';
import {setBreakpoints} from '../actions';
import {WapperRootComponent} from '../components';
import {PATH_TO_STORE_REDUX} from '../constants';
import reducers from '../reducers';

const mapStateToProps = (state: any) => {
  let stateRedux = get(state, `${PATH_TO_STORE_REDUX}`, {});
  return {
    breakpoint: stateRedux.breakpoint,
    heightRoot: stateRedux.height,
    isReady: stateRedux.isReady,
    widthRoot: stateRedux.width,
  };
};
const mapDispatchToProps = () => {
  return {
    setBreakpoints
  };
};

export default PageDecorator({
  resources: [reducers],
  actions: mapDispatchToProps(),
  mapState: (state: any) => mapStateToProps(state)
})(WapperRootComponent);
