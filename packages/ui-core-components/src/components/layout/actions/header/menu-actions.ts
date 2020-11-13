// import { setUnsubscribeAllByLogout } from '../../../components/push_notifications';
import {setAuthLogout} from '@dgtx/ui-core';
import {get} from 'lodash';
import {PATH_TO_STORE_REDUX, SET_OPEN_CONTACT_MENU, SET_OPEN_LEFT_MENU, SET_OPEN_MENU_PROFILE, SET_OPEN_MOBILE_MENU} from '../../constants';
import {callAPIGetContactInfo} from '../call-api';
import {executeActionReducer} from '../common-actions';

export const setOpenMenuProfile = (event: React.MouseEvent<HTMLElement>, isOpen?: Boolean) => async (dispatch: any, getState: any) => {
    let isMenuProfileOpen = false;
    let profileAnchorEl = null;
    if (isOpen) {
        profileAnchorEl = event.currentTarget;
        isMenuProfileOpen = true;
    }
    dispatch(executeActionReducer(SET_OPEN_MENU_PROFILE, {isMenuProfileOpen, profileAnchorEl}));
};

export const setOpenMobileMenu = (event: React.MouseEvent<HTMLElement>, isOpen?: Boolean) => async (dispatch: any, getState: any) => {
    let isMobileMenuOpen = false;
    let mobileMoreAnchorEl = null;
    if (isOpen) {
        mobileMoreAnchorEl = event.currentTarget;
        isMobileMenuOpen = true;
    }
    dispatch(executeActionReducer(SET_OPEN_MOBILE_MENU, {isMobileMenuOpen, mobileMoreAnchorEl}));
};

export const setOpenContactMenu = (event: React.MouseEvent<HTMLElement>, isOpen?: Boolean) => async (dispatch: any, getState: any) => {
    const state = get(getState(), PATH_TO_STORE_REDUX, {});
    const contactsData = state.contactsData || [];
    let payload: any = {
        isContactMenuOpen: false,
        contactAnchorEl: null,
    };
    console.log('====================================');
    console.log('event.currentTarget: ', event.currentTarget);
    console.log('====================================');
    if (isOpen) {
        console.log('isOpen: ', isOpen);
        console.log('event.currentTarget: ', event.currentTarget);
        payload.contactAnchorEl = event.currentTarget;
        payload.isContactMenuOpen = true;
    }
    console.log('payload: ', payload);
    if (contactsData.length === 0) {
        const dataAPI: any = await dispatch(callAPIGetContactInfo());
        console.log('contactsData: ', contactsData);
        console.log('dataAPI: ', dataAPI);
        if (dataAPI.error) {
            console.log('get contacts data is error.');
        } else {
            payload.contactsData = dataAPI.data.contact;

        }
    }
    dispatch(executeActionReducer(SET_OPEN_CONTACT_MENU, payload));
};

export const setSignOut = () => async (dispatch: any, getState: any) => {
    await dispatch(setAuthLogout());
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
    // dispatch(setViewBreadcrumbs(payload.routeFocus.is_view_breadcrumbs));
    dispatch(executeActionReducer(SET_OPEN_LEFT_MENU, payload));
};
