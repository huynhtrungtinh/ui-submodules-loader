import {
    UNMOUNT, GET_OPTION_NOTIFICATION,
    SET_CLICK_OPTION_NOTIFICATION,
    SET_SUBCRIBE_NOTIFICATION,
    SET_CHECKED_DISABLED_NOTIFICATION,
    SET_OPEN_MENU_OPTION_NOTIFICATION
} from './Actions';
import { IAction } from './Constants';

export const OPTION_NOTIFICATION = [
    {
        "type": "imported",
        "name": "Operator Tasks",
        "id": "5ea26758d45ab565e05a925a"
    },
    {
        "type": "qc",
        "name": "QC Tasks",
        "id": "5ea26758d45ab565e05a925b"
    },
    {
        "type": "apr-qc",
        "name": "Approve QC Tasks",
        "id": "5ea26758d45ab565e05a925d"
    }
]
export const initialState = {
    optionNotification: [],
    checked: {},
    checkedDisabled: {},
    isSubcribe: false,
    anchorEl: null,
    isMenuOpen: false
}
type CronTriggerQuartzState = Readonly<typeof initialState>;
export function reducer(state: CronTriggerQuartzState = initialState, actions: IAction) {
    if (actions && actions.type) {
        const { type, payload } = actions;
        switch (type) {
            case GET_OPTION_NOTIFICATION:
            case SET_CLICK_OPTION_NOTIFICATION:
            case SET_SUBCRIBE_NOTIFICATION:
            case SET_CHECKED_DISABLED_NOTIFICATION:
            case SET_OPEN_MENU_OPTION_NOTIFICATION:{
                return { ...state, ...payload };
            }
            case UNMOUNT:
                return { ...initialState };
            default:
                return state;
        }
    }
    return state;
}
