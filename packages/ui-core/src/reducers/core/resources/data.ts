import {
    CREATE,
    UPDATE,
    GET_ONE,
    GET_MANY,
    GET_LIST,
    GET_COUNT,
    GET_MANY_REFERENCE,
    FETCH_END,
} from '../../../actions';
import { getFetchedAt } from '../../../utils';
import { ActionProps } from '.';


export const addRecordsFactory = (getFetchedAt: any) => (
    newRecords:any[] = [],
    oldRecords: any
) => {
    const newFetchedAt = getFetchedAt(
        newRecords.map(({ id }: any) => id),
        oldRecords.fetchedAt
    );

    const newRecordsById = newRecords.reduce(
        (acc:any, record: any) => ({
            ...acc,
            [record.id]: record,
        }),
        {}
    );
    const records = Object.keys(newFetchedAt).reduce(
        (acc, id) => ({
            ...acc,
            [id]: newRecordsById[id] || oldRecords[id],
        }),
        {}
    );

    Object.defineProperty(records, 'fetchedAt', {
        value: newFetchedAt,
    }); // non enumerable by default

    return records;
}
const addRecords = addRecordsFactory(getFetchedAt);

export const getRecord = (state: any, id: any) => state[id];


const getInitialState = () => {
    const initialState = {};
    Object.defineProperty(initialState, 'fetchedAt', { value: {} });
    return initialState
}

export default (previousState = getInitialState(), { type, payload, meta }: ActionProps) => {
    if (!meta || !meta.fetchResponse || meta.fetchStatus !== FETCH_END) {
        return previousState;
    }
    const json:any = payload.json?(Array.isArray(payload.json) ? payload.json : [payload.json]):[];
    switch (meta.fetchResponse) {
        case GET_LIST:
        case GET_MANY:
        case GET_MANY_REFERENCE:
        case GET_COUNT:
            if (meta.refresh) {
                return addRecords(json, getInitialState());
            } else {
                return addRecords(json, previousState);
            }
        case GET_ONE:
        case UPDATE:
        case CREATE:
            return addRecords(json, previousState);
        default:
            return previousState;
    }
}
