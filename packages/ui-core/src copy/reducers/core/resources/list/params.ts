import { CRUD_CHANGE_LIST_PARAMS } from '../../../../actions';
import { ActionProps } from '..';

const defaultState = {
    sort: null,
    order: null,
    page: 1,
    perPage: null,
    filter: {},
};

export default (previousState = defaultState, { type, payload }:ActionProps) => {
    switch (type) {
        case CRUD_CHANGE_LIST_PARAMS:
            return payload;
        default:
            return previousState;
    }
};
