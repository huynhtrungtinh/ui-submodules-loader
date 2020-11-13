import {IAction} from '@dgtx/ui-scl';
import {NAME_REDUCER, SET_BREAKPOINT, SET_OPEN_CONTACT_MENU, SET_OPEN_LEFT_MENU, SET_OPEN_MENU_PROFILE, SET_OPEN_MOBILE_MENU, UNMOUNT} from '../constants';

const ROUTES = [
    {
        "app_name": "home",
        "display_name": "Home",
        "path": "/home",
        "is_view_breadcrumbs": false,
        "breadcrumbs": [],
        "breakpoints": [
            "xs",
            "sm",
            "md",
            "lg",
            "xl"
        ],
        "index": 0
    },
    {
        "app_name": "general-report",
        "display_name": "General Report",
        "path": "/general-report",
        "is_view_breadcrumbs": true,
        "breadcrumbs": [
            "app",
            "function"
        ],
        "breakpoints": [
            "xs",
            "sm",
            "md",
            "lg",
            "xl"
        ],
        "tabIndex": 8,
        "index": 1
    },
    {
        "app_name": "pim",
        "display_name": "Project Information Management",
        "path": "/pim",
        "is_view_breadcrumbs": true,
        "breadcrumbs": [
            "app",
            "function"
        ],
        "breakpoints": [
            "xs",
            "sm",
            "md",
            "lg",
            "xl"
        ],
        "tabIndex": 9,
        "index": 2
    },
    {
        "app_name": "projects",
        "display_name": "Projects",
        "path": "/projects",
        "is_view_breadcrumbs": true,
        "breadcrumbs": [
            "app",
            "project",
            "function"
        ],
        "breakpoints": [
            "xs",
            "sm",
            "md",
            "lg",
            "xl"
        ],
        "tabIndex": 10,
        "index": 3
    },
    {
        "app_name": "system",
        "display_name": "System",
        "path": "/system",
        "is_view_breadcrumbs": true,
        "breadcrumbs": [
            "app",
            "function"
        ],
        "breakpoints": [
            "xs",
            "sm",
            "md",
            "lg",
            "xl"
        ],
        "tabIndex": 11,
        "index": 4
    }
]

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
    routeFocus: {},
    routers: ROUTES
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

