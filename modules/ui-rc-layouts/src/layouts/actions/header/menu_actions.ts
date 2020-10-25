import { push } from "connected-react-router";
import { get } from 'lodash';
import { setUnsubscribeAllByLogout } from '../../../components/push_notifications';
import {
    PATH_TO_STORE_REDUX, SET_OPEN_CONTACT_MENU,
    SET_OPEN_LEFT_MENU, SET_OPEN_MENU_PROFILE,
    SET_OPEN_MOBILE_MENU
} from '../../constants';
import { executeActionReducer } from '../common_actions';
// import { unregisterResource } from '@dgtx/ui-core';
import { setViewBreadcrumbs } from './breadcrumbs_actions';

export const setOpenMenuProfile = (event: React.MouseEvent<HTMLElement>, isOpen?: Boolean) => async (dispatch: any, getState: any) => {
    let isMenuProfileOpen = false;
    let profileAnchorEl = null;
    if (isOpen) {
        profileAnchorEl = event.currentTarget;
        isMenuProfileOpen = true;
    }
    dispatch(executeActionReducer(SET_OPEN_MENU_PROFILE, { isMenuProfileOpen, profileAnchorEl }));
};

export const setOpenMobileMenu = (event: React.MouseEvent<HTMLElement>, isOpen?: Boolean) => async (dispatch: any, getState: any) => {
    let isMobileMenuOpen = false;
    let mobileMoreAnchorEl = null;
    if (isOpen) {
        mobileMoreAnchorEl = event.currentTarget;
        isMobileMenuOpen = true;
    }
    dispatch(executeActionReducer(SET_OPEN_MOBILE_MENU, { isMobileMenuOpen, mobileMoreAnchorEl }));
};

export const setOpenContactMenu = (event: React.MouseEvent<HTMLElement>, isOpen?: Boolean) => async (dispatch: any, getState: any) => {
    let payload: any = {
        isContactMenuOpen: false,
        contactAnchorEl: null,
    };
    if (isOpen) {
        payload.contactAnchorEl = event.currentTarget;
        payload.isContactMenuOpen = true;
    }
    dispatch(executeActionReducer(SET_OPEN_CONTACT_MENU, payload));
};

export const logOut = () => async (dispatch: any, getState: any) => {
    // const stateCore = get(getState(), 'core.resources', {});
    // const resourceNames = Object.keys(stateCore);
    // for (let index = 0; index < resourceNames.length; index++) {
    //     const nameReducer = resourceNames[index];
    //     const reducer = [
    //         {
    //             name: nameReducer,
    //             flush: true,
    //             reducer: {},
    //         }
    //     ];
    //     dispatch(unregisterResource(reducer, nameReducer));
    // }
    await setUnsubscribeAllByLogout();
    setTimeout(() => {
        dispatch(push('/signin'));
    }, 200);
}

export const setOpenLeftMenu = (isOpen?: Boolean, route?: any) => async (dispatch: any, getState: any) => {
    const state = get(getState(), PATH_TO_STORE_REDUX, {});
    const routeFocus = state.routeFocus;
    let payload: any = {
        isLeftMenuOpen: false,
    };
    if (isOpen) {
        payload.isLeftMenuOpen = true;
    }
    if (!route) {
        payload.routeFocus = routeFocus;
    } else {
        payload.routeFocus = route;
    }
    dispatch(setViewBreadcrumbs(payload.routeFocus.is_view_breadcrumbs));
    dispatch(executeActionReducer(SET_OPEN_LEFT_MENU, payload));
};
