import {
    NAME_REDUCER,
    UNMOUNT,
    SHOW_ALERT,
    HIDDEN_ALERT,
    HIDDEN_ALERT_ALL
} from './alert_constants';
import { IAction } from '../../models';

export const initialState: any = {
    alertList: [],
    timeoutGrow: 500
}
type ReducerState = Readonly<typeof initialState>;
export default {
    name: NAME_REDUCER,
    reducer: (state: ReducerState = initialState, actions: IAction) => {
        if (actions && actions.type) {
            const { type, payload } = actions;
            switch (type) {
                case SHOW_ALERT:
                case HIDDEN_ALERT:
                case HIDDEN_ALERT_ALL:
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
