import {
    NAME_REDUCER,
    UNMOUNT,
    SHOW_BACKDROP,
    HIDDEN_BACKDROP,
    ICON_COLOR_PROGRESS,
    BACKGROUND_DEFAULT
} from './constants';
import { IAction } from '../../models';

export const initialState: any = {
    isShowBackdrop: false,
    background: BACKGROUND_DEFAULT,
    iconColor: ICON_COLOR_PROGRESS
}
type ReducerState = Readonly<typeof initialState>;
export default {
    name: NAME_REDUCER,
    reducer: (state: ReducerState = initialState, actions: IAction) => {
        if (actions && actions.type) {
            const { type, payload } = actions;
            switch (type) {
                case SHOW_BACKDROP:
                case HIDDEN_BACKDROP:
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
