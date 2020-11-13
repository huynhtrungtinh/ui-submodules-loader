import {Page403, Page404} from '@dgtx/ui-core-components';
import React from 'react';
import {connect} from 'react-redux';
import {Redirect, Route} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {setAuthLogout} from '../actions';
import ErrorBoundary from './error-boundary';
export const PrivateRouteComponent = ({
  component: Component,
  defaultComponent: DefaultComponent,
  isAuthenticated = false,
  statusCode,
  RootLayout,
  setAuthLogout = () => null,
  computedMatch,
  ...rest
}: any) => {
  const renderRedirect = (props: any) => {
    if (!computedMatch.isExact) {
      return (
        <ErrorBoundary>
          <RootLayout {...props}>
            <Page404 />
          </RootLayout>
        </ErrorBoundary>
      )
    } else if (statusCode === 404) {
      return <Page404 />
    } else if (statusCode === 403) {
      return <Page403 />
    } else if (isAuthenticated) {
      return (
        <ErrorBoundary>
          <RootLayout {...props}>
            <Component {...props} />
          </RootLayout>
        </ErrorBoundary>
      )
    } else if (DefaultComponent) {
      return <DefaultComponent />
    } else {
      setAuthLogout(false);
      return (
        <Redirect
          to={{
            pathname: '/signin',
            search: props.location.search,
            state: {from: props.location},
          }}
        />
      );
    }
  };
  if (!Component) throw new Error(`A component needs to be specified for private route for path ${(rest as any).path}`);
  return <Route exact={computedMatch.isExact} {...rest} render={renderRedirect} />;
};

const mapStateToProps = (state: any) => {
  const isAuthenticated = state.authentication.isAuthenticated;
  const statusCode = state.authentication.isAuthenticatedStatusCode;
  return {
    isAuthenticated,
    statusCode
  }
}
const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(
    {
      setAuthLogout
    },
    dispatch
  )
};
/**
 * A route wrapped in an authentication check so that routing happens only when you are authenticated.
 * Accepts same props as React router Route.
 * The route also checks for authorization if hasAnyAuthorities is specified.
 */
export const PrivateRoute = connect(mapStateToProps, mapDispatchToProps, null, {pure: false})(PrivateRouteComponent);

export default PrivateRoute;
