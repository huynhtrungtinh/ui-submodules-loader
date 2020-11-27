import {IAction} from '@dgtx/ui-scl';
import {ADD_TREE_ITEM_BY_TREE_NODE, BREADCRUMB_HOME, CREATE_BREADCRUMBS_BY_TREE_NODE, NAME_REDUCER, SET_BREAKPOINT, SET_CLICK_LEFT_MENU_ITEM, SET_DATA_OPERATION, SET_DATA_READY, SET_DATA_TRAINING, SET_OPEN_CONTACT_MENU, SET_OPEN_LEFT_MENU, SET_OPEN_MENU_PROFILE, SET_OPEN_MOBILE_MENU, SET_SEARCH_LEFT_MENU, UNMOUNT} from '../constants';

export const initialState: any = {
    isReady: false,
    width: 0,
    height: 0,
    breakpoint: 'lg',
    profileAnchorEl: null,
    isMenuProfileOpen: false,
    contactAnchorEl: null,
    isContactMenuOpen: false,
    contactsData: [],
    isMobileMenuOpen: false,
    mobileMoreAnchorEl: null,

    isLeftMenuOpen: false,
    leftMenuData: [],
    leftMenuDataClonelv1: [],
    leftMenuDataSearch: [],
    leftMenuSelected: {},
    leftMenuLastNodeId: 1,
    leftMenuSearch: "",

    breadcrumbsData: [BREADCRUMB_HOME],

    projectId: null,
    projectName: null,

    routeFocus: {},
    routers: {},
}

type ReducerState = Readonly<typeof initialState>;
export default {
    name: NAME_REDUCER,
    reducer: (state: ReducerState = {...initialState}, actions: IAction) => {
        if (actions && actions.type) {
            const {type, payload} = actions;
            switch (type) {
                case SET_BREAKPOINT:
                case SET_OPEN_MENU_PROFILE:
                case SET_OPEN_MOBILE_MENU:
                case SET_OPEN_CONTACT_MENU:
                case SET_OPEN_LEFT_MENU:
                case SET_DATA_READY:
                case SET_CLICK_LEFT_MENU_ITEM:
                case SET_SEARCH_LEFT_MENU:
                case ADD_TREE_ITEM_BY_TREE_NODE:
                case SET_DATA_TRAINING:
                case SET_DATA_OPERATION:
                case CREATE_BREADCRUMBS_BY_TREE_NODE:
                    return {
                        ...state,
                        ...payload
                    }
                case UNMOUNT:
                    return {...initialState};
                default:
                    return state;
            }
        }
        return state;
    }
};
