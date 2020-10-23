import {
    SHOW_NOTIFICATION,
    HIDE_NOTIFICATION,
} from '../../actions';
import { isEqual } from 'lodash'
export default (previousState = [], { type, payload }: { type: string, payload: any }) => {
    switch (type) {
        case SHOW_NOTIFICATION:
            if (previousState.findIndex(item => isEqual(payload, item)) > -1) {
                return previousState;
            }
            return previousState.concat(payload);
        case HIDE_NOTIFICATION:
            if (payload) {
                const next = [...previousState];
                next.splice(payload, 1);
                return next;
            }
            return previousState.slice(1);
        default:
            return previousState;
    }
};


