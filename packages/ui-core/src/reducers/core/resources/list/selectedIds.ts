import {
    SET_LIST_SELECTED_IDS,
    TOGGLE_LIST_ITEM,
} from '../../../../actions';
import { ActionProps } from '..';

const initialState: any[] = [];

const selectedIds = (previousState = initialState, action: ActionProps): any => {
    switch (action.type) {
        case SET_LIST_SELECTED_IDS:
            if (Array.isArray(action.payload)) {
                return action.payload;
            }
            return [];
        case TOGGLE_LIST_ITEM: {
            const index = previousState.indexOf(action.payload);
            if (index > -1) {
                return [
                    ...previousState.slice(0, index),
                    ...previousState.slice(index + 1),
                ];
            } else {
                return [...previousState, action.payload];
            }
        }
        default:
            return action.meta && action.meta.unselectAll
                ? initialState
                : previousState;
    }
};
export default selectedIds;