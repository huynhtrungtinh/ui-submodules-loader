import { uniq } from 'lodash';
import {
    CRUD_GET_LIST_SUCCESS,
    CRUD_GET_COUNT_SUCCESS,
    CRUD_DELETE_OPTIMISTIC,
    CRUD_DELETE_MANY_OPTIMISTIC,
    CRUD_GET_MANY_SUCCESS,
    CRUD_GET_MANY_REFERENCE_SUCCESS,
    CRUD_GET_ONE_SUCCESS,
    CRUD_CREATE_SUCCESS,
    CRUD_UPDATE_SUCCESS,

} from '../../../../actions';
import { getFetchedAt } from '../../../../utils';
import { ActionProps } from '..';

export const addRecordIdsFactory = (getFetchedAt: any) => (
    newRecordIds = [],
    oldRecordIds: any
) => {
    const newFetchedAt = getFetchedAt(newRecordIds, oldRecordIds.fetchedAt);
    const recordIds = uniq(
        oldRecordIds.filter((id: any) => !!newFetchedAt[id]).concat(newRecordIds)
    );
    Object.defineProperty(recordIds, 'fetchedAt', {
        value: newFetchedAt,
    }); // non enumerable by default
    return recordIds;
};

const addRecordIds = addRecordIdsFactory(getFetchedAt);

export default (previousState: any = [], { type, payload }: ActionProps) => {

    switch (type) {
        case CRUD_GET_LIST_SUCCESS:
        case CRUD_GET_COUNT_SUCCESS:
            return addRecordIds(Array.isArray(payload.json) ? payload.json.map(({ id }: any) => id) : [], []);
        case CRUD_GET_MANY_SUCCESS:
        case CRUD_GET_MANY_REFERENCE_SUCCESS: {
            if (payload.json && Array.isArray(payload.json)) {
                return addRecordIds(
                    payload.json
                        .map(({ id }: any) => id)
                        .filter((id: any) =>
                            previousState.indexOf(String(id)) !== -1),
                    previousState
                );
            }
            return previousState ;
        }
        case CRUD_GET_ONE_SUCCESS:
        case CRUD_CREATE_SUCCESS:
        case CRUD_UPDATE_SUCCESS:
        {
            if(payload.json){
                return addRecordIds(Array.isArray(payload.json) ? payload.json.map(({ id }: any) => id) : [payload.json.id], previousState);
            }
            return previousState ;
        }
        case CRUD_DELETE_OPTIMISTIC: {
            const index = previousState
                .map((el: any) => el === payload.id) // eslint-disable-line eqeqeq
                .indexOf(true);
            if (index === -1) {
                return previousState;
            }
            const newState = [
                ...previousState.slice(0, index),
                ...previousState.slice(index + 1),
            ];

            Object.defineProperty(newState, 'fetchedAt', {
                value: previousState.fetchedAt,
            });

            return newState;
        }
        case CRUD_DELETE_MANY_OPTIMISTIC: {
            const newState = previousState.filter(
                (el: any) => !payload.ids.includes(el)
            );
            Object.defineProperty(newState, 'fetchedAt', {
                value: previousState.fetchedAt,
            });

            return newState;
        }
        default:
            return previousState;
    }
};
