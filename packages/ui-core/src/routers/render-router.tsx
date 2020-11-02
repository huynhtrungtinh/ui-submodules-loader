import * as React from 'react';
// import { setLocale } from 'react-redux-i18n';
import PrivateRoute from './private-route';
import PublicRoute from './public-route';
export const renderRouterRoot = ({routeProvider, pages, RootLayout, dispatch}: any) => {
    // dispatch(setLocale('en'));
    const publicR = routeProvider('public');
    const privateR = routeProvider('private');
    let routes: any = [];
    publicR.map((r: any, index: any) => {
        const rcPublic = <PublicRoute path={r.path} component={r.component} key={`${r.name}-${index}`} />;
        routes.push(rcPublic);
    })
    privateR.map((r: any, index: any) => {
        const rcPrivate = <PrivateRoute path={r.path} component={r.component} RootLayout={RootLayout} key={`${r.name}-${index}`} />
        routes.push(rcPrivate);
    })
    return routes.map((item: any) => {
        return item;
    })
};
