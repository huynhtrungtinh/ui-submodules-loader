import {
    NAME_REDUCER,
    UNMOUNT,
    IAction,
    DEFAULT_ITEM,
    SET_MOFIFY_CHANGE_PASSWORD,
    SET_OPEN_DIALOG_CHANGE_PASSWORD,
    SET_SHOW_PASSWORD,
    SET_SUBMIT_CHANGE_PASSWORD,
    SET_OPEN_DIALOG_CHANGE_PASSWORD_SUCCESS
} from '../constants';

export const initialState: any = {
    password_current: { ...DEFAULT_ITEM },
    password_new: { ...DEFAULT_ITEM },
    password_confirm: { ...DEFAULT_ITEM },
    errorMessage: null,
    isDialogSuccessOpen: false
}

type ReducerState = Readonly<typeof initialState>;
export default {
    name: NAME_REDUCER,
    reducer: (state: ReducerState = { ...initialState }, actions: IAction) => {
        if (actions && actions.type) {
            const { type, payload } = actions;
            switch (type) {
                case SET_MOFIFY_CHANGE_PASSWORD:
                case SET_OPEN_DIALOG_CHANGE_PASSWORD:
                case SET_SHOW_PASSWORD:
                case SET_SUBMIT_CHANGE_PASSWORD:
                case SET_OPEN_DIALOG_CHANGE_PASSWORD_SUCCESS:
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
