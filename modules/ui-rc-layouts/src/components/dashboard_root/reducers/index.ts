import {
    NAME_REDUCER,
    UNMOUNT,
    IAction,
    SET_KEYBOARD_DASHBOARD_ROOT,
    SET_REF_CONTAINER_DASHBOARD_ROOT
} from '../constants';

export const initialState: any = {
    selectedApp: null,
    refContainer: null
}

type ReducerState = Readonly<typeof initialState>;
export default {
    name: NAME_REDUCER,
    reducer: (state: ReducerState = { ...initialState }, actions: IAction) => {
        if (actions && actions.type) {
            const { type, payload } = actions;
            switch (type) {
                case SET_KEYBOARD_DASHBOARD_ROOT:
                case SET_REF_CONTAINER_DASHBOARD_ROOT:
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
