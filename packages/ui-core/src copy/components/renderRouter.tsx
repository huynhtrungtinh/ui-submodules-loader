import * as React from 'react';
import { setLocale } from 'react-redux-i18n'
import { IRouteFunc } from '../models/route';
import { Route } from 'react-router';
import CoreRouter from './CoreRouter';

const creatRouteRender = (item: any) => (props: any) => {
    return React.createElement(item.component, { ...props, subRoutes: item.subRoutes })
}
export const renderRouter = (routes: IRouteFunc[] = [], pages: any) => {
    return routes.map((item: IRouteFunc, key: number) => {
        if (item.subRoutes) {
            return <Route
                exact={item.exact}
                key={key}
                path={item.path}
                render={creatRouteRender(item)}
            />
        } else if (!item.path) {
            return <Route key={key} component={item.component} />
        }
        return <Route
            exact={item.exact}
            key={key}
            path={item.path}
            component={item.component} />
    })
};

const creatRouteRenderR = (rootLayout: any, routeProvider: any, pages: any) => (props: any) => {
    return <CoreRouter
        rootLayout={rootLayout}
        routeProvider={routeProvider}
        pages={pages}
        {...props}
    />
}
export const renderRouterRoot = ({ routeProvider, pages, rootLayout, dispatch }: any) => {
    dispatch(setLocale('en'));
    const routes = routeProvider('public');
    routes.push({ path: '/' });
    return routes.map((item: IRouteFunc, key: number) => {
        if (item.subRoutes) {
            return <Route
                exact={item.exact}
                key={key}
                path={item.path}
                render={creatRouteRender(item)}
            />
        } else if (!item.path) {
            return <Route component={item.component} />
        } else if (!item.component) {
            return <Route path='/'
                key='r'
                render={creatRouteRenderR(rootLayout, routeProvider, pages)}
            />
        }
        return <Route
            exact={item.exact}
            key={key}
            path={item.path}
            component={item.component} />
    })
};
