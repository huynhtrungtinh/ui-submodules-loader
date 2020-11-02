import {IPageOption, PageOption} from '@dgtx/ui-scl';
import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {registerResource, unregisterResource} from '../actions';

export default (option: IPageOption | any) => (Target: React.ReactElement | any) => {
  const optionIn = new PageOption(option);
  const actions = {
    registerResourceAction: registerResource,
    unregisterResourceAction: unregisterResource,
    ...optionIn.actions
  };
  const mapStateToProps = (state: any, ownProps: any) => {
    const mapState = typeof optionIn.mapState === 'function' ?
      option.mapState(state, ownProps) : ownProps;
    return {
      ...mapState,
    };
  };
  const mapDispatchToProps = (dispatch: any) => bindActionCreators(actions, dispatch);
  function PageDecorator(props: any) {
    const {registerResourceAction, unregisterResourceAction} = props;
    const [registered, setRegistered] = React.useState<boolean>(false);
    React.useEffect(() => {
      const gui = Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)
      registerResourceAction(optionIn.resources, gui);
      setRegistered(true);
      return () => {
        unregisterResourceAction(optionIn.resources, gui);
      };
    }, []);
    if (registered) {
      return <Target {...props} />;
    } else {
      return <div>Loading...</div>;
    }
  }
  return connect(mapStateToProps, mapDispatchToProps)(PageDecorator);
};
