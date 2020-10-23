import {push} from 'connected-react-router';
import * as React from 'react';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router';
import {bindActionCreators} from 'redux';
import {addAwaitRefresh, getApps, setUserCurrent, userLogout} from '../actions';
import {getUserMetaData} from '../utils';
import {renderRouter} from './renderRouter';

interface CoreRouterProps {
    routeProvider: any,
    pages: any,
    user?: any,
    userLogout?: any,
    rootLayout: React.ComponentType
}
class CoreRouter extends React.Component<CoreRouterProps> {
    state = {
        children: []
    };
    componentWillMount() {
        this.initializeResources(this.props);
    }
    initializeResources = (nextProps: any) => {
        this.initializeResourcesAsync(nextProps);
    };
    initializeResourcesAsync = async (props: any) => {
        const {routeProvider, addAwaitRefresh, userLogout, setUserCurrent} = props;
        const self = this;
        if (await getUserMetaData()) {
            try {
                const apps = await getApps();
                const routes = routeProvider('private')(apps);
                setUserCurrent(await getUserMetaData())
                this.setState({children: routes})
            } catch (error) {
                try {
                    addAwaitRefresh(
                        async (dispatch: any) => {
                            const apps = await getApps();
                            const routes = routeProvider('private')(apps);
                            setUserCurrent(await getUserMetaData())
                            self.setState({children: routes})
                            dispatch(push(''))
                        }
                    )
                } catch (error) {
                    userLogout()
                }
            }
        } else {
            userLogout()
        }
    };
    render() {
        const {
            pages,
            rootLayout
        } = this.props;
        const {children} = this.state;
        if (children.length === 0) {
            return <Route path="/" key="loading" component={pages.Loading} />
        }
        const RootLayout = rootLayout || React.Fragment;
        return (
            <RootLayout {...this.props}>
                <Switch>
                    {renderRouter(children, pages)}
                </Switch>
            </RootLayout>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        user: state.user
    }
}
const mapDispatchToProps = (dispatch: any) => bindActionCreators({
    userLogout, addAwaitRefresh, setUserCurrent
}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(CoreRouter);
