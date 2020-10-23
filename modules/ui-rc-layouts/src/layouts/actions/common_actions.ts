import {
  NAME_REDUCER,
  UNMOUNT,
  PATH_TO_STORE_REDUX,
  ACCESS_TOKEN_KEY,
  SET_GET_DATA_FOR_READY,
  SET_BREAK_POINTS,
  TABS_INDEX_ICON,
  HOME_APP
} from '../constants';
import { get, isEmpty, orderBy } from 'lodash';
import { callAPIGetInfoContact, callAPIApps } from './call_api';
import { decode } from 'jws'
import { push } from "connected-react-router";
import { getDataDrawerAnnouncement, createBreadcrumbs } from './header';
// import { setShowBackdrop } from '../../components';
// import { setShowAlert } from '../../components';

export const executeActionReducer = (type: string, payload: any) => {
  return { type, payload, meta: { resource: NAME_REDUCER } };
};
export const unmount = () => async (dispatch: any) => {
  dispatch(executeActionReducer(UNMOUNT, {}));
};
export function activeRoute(pathname: string, routePath: string) {
  if (pathname === routePath || (pathname === '/' && routePath === '/home')) {
    return true;
  } else {
    return false;
  }
}

export const getDataForReady = ({ appName, version }: any) => async (dispatch: any, getState: any) => {
  const state = get(getState(), PATH_TO_STORE_REDUX, {});
  const contactsData = state.contactsData || [];
  let payload: any = {};
  const token: any = localStorage.getItem(ACCESS_TOKEN_KEY);
  if (token && isEmpty(contactsData)) {
    // dispatch(setShowBackdrop());
    // dispatch(setShowAlert('Sự quan trọng của API trong các ứng dụng ngày nay là điều ko thể bàn cãi. Một ứng dụng mà không có API thì như một cỗ máy tính không kết nối internet vậy. Và như một điều hiển nhiên, mọi thứ sau khi phát triển một thời gian sẽ hình thành những chuẩn mực chung và đối với API, nó chính là RESTful', 'warning'));
    // dispatch(setShowAlert('file1111111111,  file22222222222222222222, file22222222222222222222', 'warning'));
    // dispatch(setShowAlert('Sự quan trọng của API trong các ứng', 'warning'));
    // dispatch(setShowAlert('ccc', 'success'));
    // dispatch(setShowAlert('ccc', 'info'));
    // dispatch(setShowAlert('ccc', 'warning'));
    // dispatch(setShowAlert('ccc', 'success'));
    // dispatch(setShowAlert('ccc', 'info'));
    // dispatch(setShowBackdrop());
    // dispatch(setShowBackdrop('darkgray', '#3f51b5'));
    
    const dataAPI: any = await callAPIGetInfoContact();
    const dataAppsAPI: any = await callAPIApps();
    if (dataAPI.error || dataAppsAPI.error) {
      console.log('get contacts data is error.');
      payload.isReady = false;
      payload.isViewBreadcrumbs = false;
    } else {
      payload.contactsData = dataAPI.data.contact;
      payload.isReady = true;
      let user = JSON.parse(decode(token).payload);
      payload.userInfo = {
        username: user.username,
        displayName: user.displayName,
        email: user.email,
        first_login: user.first_login,
        is_cloud: user.is_cloud,
        reset_password: user.reset_password || false
      }
      let apps = dataAppsAPI.data;
      apps = [HOME_APP, ...apps];
      const home = apps.filter((a: any) => a.app_name === "home");
      apps = apps.filter((a: any) => a.app_name !== "home");
      apps = orderBy(apps, ["display_name"]);
      apps = [...home, ...apps]
      payload.routers = apps;
      dispatch(createBreadcrumbs({ apps }));
    }
    dispatch(executeActionReducer(SET_GET_DATA_FOR_READY, payload));
    if (dataAPI.data.appUseAnnouncement && dataAPI.data.appUseAnnouncement.includes(appName)) {
      dispatch(getDataDrawerAnnouncement());
    }
  } else {
    dispatch(push('/signin'))
  }
}

export const setBreakpoints = (width: 'xs' | 'sm' | 'md' | 'lg' | 'xl') => async (dispatch: any, getState: any) => {
  const state = get(getState(), PATH_TO_STORE_REDUX, {});
  const breakpoints = state.breakpoints;
  const isViewBreadcrumbs = state.isViewBreadcrumbs;
  const isViewAnnouncement = state.isViewAnnouncement;
  const routeFocus = state.routeFocus;
  const routers = state.routers || [];
  let payload: any = {};
  if (width !== breakpoints) {
    const bcLength = routeFocus.breadcrumbs && routeFocus.breadcrumbs.length || 0;
    payload.breakpoints = width;
    let tabIndexNext: any = 2;
    let tabIndexIcon: any = { ...TABS_INDEX_ICON };
    if (isViewBreadcrumbs) {
      if (bcLength) {
        if (bcLength === 1) {
          tabIndexIcon.app_icon = 2;
          tabIndexIcon.more_icon = 3;
          tabIndexIcon.notification_icon = 3;
          tabIndexIcon.contact_icon = 4;
          if (isViewAnnouncement) {
            tabIndexIcon.announcement_icon = 5;
            tabIndexIcon.menu_profile_icon = 6;
            tabIndexIcon.text_field_search = 7;
            tabIndexIcon.search_icon = 8;
            tabIndexIcon.tabIndexNext = 9;
          } else {
            tabIndexIcon.menu_profile_icon = 5;
            tabIndexIcon.text_field_search = 6;
            tabIndexIcon.search_icon = 7;
            tabIndexIcon.tabIndexNext = 8;
          }
        } else if (bcLength === 2) {
          tabIndexIcon.app_icon = 2;
          tabIndexIcon.function_icon = 3;
          tabIndexIcon.more_icon = 4;
          tabIndexIcon.notification_icon = 4;
          tabIndexIcon.contact_icon = 5;
          if (isViewAnnouncement) {
            tabIndexIcon.announcement_icon = 6;
            tabIndexIcon.menu_profile_icon = 7;
            tabIndexIcon.text_field_search = 8;
            tabIndexIcon.search_icon = 9;
            tabIndexIcon.tabIndexNext = 10;
          } else {
            tabIndexIcon.menu_profile_icon = 6;
            tabIndexIcon.text_field_search = 7;
            tabIndexIcon.search_icon = 8;
            tabIndexIcon.tabIndexNext = 9;
          }
        } else {
          tabIndexIcon.app_icon = 2;
          tabIndexIcon.project_icon = 3;
          tabIndexIcon.function_icon = 4;
          tabIndexIcon.more_icon = 5;
          tabIndexIcon.notification_icon = 5;
          tabIndexIcon.contact_icon = 6;
          if (isViewAnnouncement) {
            tabIndexIcon.announcement_icon = 7;
            tabIndexIcon.menu_profile_icon = 8;
            tabIndexIcon.text_field_search = 9;
            tabIndexIcon.search_icon = 10;
            tabIndexIcon.tabIndexNext = 11;
          } else {
            tabIndexIcon.menu_profile_icon = 7;
            tabIndexIcon.text_field_search = 8;
            tabIndexIcon.search_icon = 9;
            tabIndexIcon.tabIndexNext = 10;
          }
        }
      } else {
        if (isViewAnnouncement) {
          tabIndexIcon.announcement_icon = 4;
          tabIndexIcon.menu_profile_icon = 5;
          tabIndexIcon.text_field_search = 6;
          tabIndexIcon.search_icon = 7;
          tabIndexIcon.tabIndexNext = 8;
        } else {
          tabIndexIcon.menu_profile_icon = 4;
          tabIndexIcon.text_field_search = 5;
          tabIndexIcon.search_icon = 6;
          tabIndexIcon.tabIndexNext = 7;
        }
      }
    }

    switch (width) {
      case "xs": {
        tabIndexIcon.text_field_search = tabIndexIcon.more_icon + 1;
        tabIndexIcon.search_icon = tabIndexIcon.text_field_search + 1;
        tabIndexIcon.tabIndexNext = tabIndexIcon.search_icon + 1;
        payload.cols = 1;
        payload.substrMax = 16;
        break;
      }
      case "sm": {
        tabIndexIcon.text_field_search = tabIndexIcon.more_icon + 1;
        tabIndexIcon.search_icon = tabIndexIcon.text_field_search + 1;
        tabIndexIcon.tabIndexNext = tabIndexIcon.search_icon + 1;
        payload.cols = 2;
        payload.substrMax = 16;
        break;
      }
      case "md": {
        payload.cols = 3;
        payload.substrMax = 17;
      }
      case "lg": {
        payload.substrMax = 17;
      }
      case "xl": {
        if (!payload.cols) {
          payload.cols = 4;
        }
        if (!payload.substrMax) {
          payload.substrMax = 32;
        }
        break;
      }
      default:
        break;
    }
    tabIndexNext = tabIndexIcon.tabIndexNext;
    payload.routers = routers.map((r: any, index: any) => {
      if (r.app_name === "home") {
        return { ...r, index }
      } else {
        return { ...r, tabIndex: tabIndexNext++, index }
      }
    });
    payload.tabIndexIcon = tabIndexIcon;
    dispatch(executeActionReducer(SET_BREAK_POINTS, payload));
  }
};
