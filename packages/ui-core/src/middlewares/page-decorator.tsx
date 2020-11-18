import {IPageOption, PageOption} from '@dgtx/ui-scl';
import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {registerResource, unregisterResource} from '../actions';
import {DataProvider} from '../provider/data-provider';

const PageDecorator = (option: IPageOption | any) => (Target: React.ReactElement | any) => {
  console.log('=======PageDecorator==========');
  const optionIn = new PageOption(option);
  console.log('option: ', option);
  if (option.dataProvider) {
    console.log('====iffffffffffffff================================');
    console.log('dataProvider: ', (window as any).dataProvider);
    if ((window as any).dataProvider) {
      (window as any).dataProvider.setResourceRegistries(option.dataProvider)
    } else if (!(window as any).dataProvider) {
      const dataProvider = new DataProvider();
      (window as any).dataProvider = dataProvider;
      (window as any).dataProvider.setResourceRegistries(option.dataProvider)
    }
    console.log('dataProvider: ', (window as any).dataProvider);
  }
  const actions = {
    registerResourceAction: registerResource,
    unregisterResourceAction: unregisterResource,
    ...optionIn.actions
  };
  console.log('window: ', (window as any).dataProvider);
  console.log('====================================');

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
export default PageDecorator;
export {PageDecorator};

