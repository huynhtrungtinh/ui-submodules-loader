import {
    NAME_REDUCER,
    UNMOUNT,
    IAction,
    SET_OPEN_MENU_PROFILE,
    SET_OPEN_MOBILE_MENU,
    SET_OPEN_CONTACT_MENU,
    SET_GET_DATA_FOR_READY,
    TABS_INDEX_ICON,

    // announcement
    GET_DATA_DRAWER_ANNOUNCEMENT,
    CLICK_ITEM_ANNOUNCEMENT,
    UPDATE_DATA_DRAWER_ANNOUNCEMENT,
    OPEN_DRAWER_ANNOUNCEMENT,
    OPEN_DIALOG_DETAIL_ANNOUNCEMENT,
    SEARCH_KEY_WORD_ANNOUNCEMENT,
    ACTION_SHOW_ANNOUNCEMENT,
    ACTION_HIDE_ANNOUNCEMENT,
    SET_OPEN_LEFT_MENU,
    SET_BREAK_POINTS,

    // breadcrumbs
    SET_CLICK_BREADCRUMBS_ITEM,
    SET_IS_VIEW_BREADCRUMBS,
    CREATE_BREADCRUMBS_HEADER,
    UPDATE_BREADCRUMBS_HEADER,
} from '../constants';

export const initialState: any = {
    profileAnchorEl: null,
    isMenuProfileOpen: false,
    mobileMoreAnchorEl: null,
    isMobileMenuOpen: false,
    contactAnchorEl: null,
    isContactMenuOpen: false,
    contactsData: [],
    userInfo: {},
    isReady: false,

    tabIndexIcon: { ...TABS_INDEX_ICON },

    // announcement
    isViewAnnouncement: false,
    isOpenDrawerAnnouncement: false,
    isOpenDialogAnnouncement: false,
    appUseAnnouncement: [],
    searchKeyWordsAnnouncement: '',
    dataDrawerAnnParent: [],
    dataDrawerAnnSearch: [],
    dataAnnouncementIsSeen: [],
    timesRetryUpdateAnnouncement: -1,
    dataDetailAnnouncement: {},
    countSeenAnnouncement: 0,

    isPopupAnnouncement: false,
    announcement: null,

    // menu left
    isLeftMenuOpen: false,
    routeFocus: {},
    routers: [],

    // dashboard root
    breakpoints: null,
    cols: -1,

    // dashboard apps
    substrMax: 38,
    // projectsParent: [],
    functionsParent: [],
    projectSelected: {},

    // breacrumbs
    breadcrumbIndex: 0,
    isViewBreadcrumbs: false,
    breadcrumbData: [],
}

type ReducerState = Readonly<typeof initialState>;
export default {
    name: NAME_REDUCER,
    reducer: (state: ReducerState = { ...initialState }, actions: IAction) => {
        if (actions && actions.type) {
            const { type, payload } = actions;
            switch (type) {
                case SET_OPEN_MENU_PROFILE:
                case SET_OPEN_MOBILE_MENU:
                case SET_OPEN_CONTACT_MENU:
                case SET_GET_DATA_FOR_READY:
                case SET_BREAK_POINTS:
                    return {
                        ...state,
                        ...payload
                    }
                case GET_DATA_DRAWER_ANNOUNCEMENT:
                case CLICK_ITEM_ANNOUNCEMENT:
                case UPDATE_DATA_DRAWER_ANNOUNCEMENT:
                case OPEN_DRAWER_ANNOUNCEMENT:
                case OPEN_DIALOG_DETAIL_ANNOUNCEMENT:
                case SEARCH_KEY_WORD_ANNOUNCEMENT:
                case ACTION_SHOW_ANNOUNCEMENT:
                case ACTION_HIDE_ANNOUNCEMENT:
                case SET_OPEN_LEFT_MENU:
                    return {
                        ...state,
                        ...payload
                    }
                case SET_CLICK_BREADCRUMBS_ITEM:
                case SET_IS_VIEW_BREADCRUMBS:
                case CREATE_BREADCRUMBS_HEADER:
                case UPDATE_BREADCRUMBS_HEADER:
                    return {
                        ...state,
                        ...payload
                    }
                case UNMOUNT:
                    return { ...initialState };
                default:
                    return state;
            }
        }
        return state;
    }
};
