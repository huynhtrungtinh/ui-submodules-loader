// import {
//     CREATE,
//     UPDATE,
//     GET_ONE,
//     GET_MANY,
//     GET_LIST,
//     GET_COUNT,
//     GET_MANY_REFERENCE,
//     FETCH_END,
// } from '../../../actions';
// import { getFetchedAt } from '../../../utils';
import { ActionProps } from '.';

const getInitialState = () => {
    const initialState = {
        fetching: false,
        success: false,
        failure: false,
    };
    return initialState
}

export default (previousState = getInitialState(), { type }: ActionProps) => {
    if (type.includes('LOADING')) {
        return {
            fetching: true,
            success: false,
            failure: false,
        }
    } else if (type.includes('SUCCESS')) {
        return {
            fetching: false,
            success: true,
            failure: false,
        }
    } else if (type.includes('FAILURE')) {
        return {
            fetching: false,
            success: false,
            failure: false,
        }
    } else {
        return previousState;
    }
}
