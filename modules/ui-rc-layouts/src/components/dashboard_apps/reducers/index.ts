import {
    NAME_REDUCER,
    UNMOUNT,
    IAction,
    SET_GET_DATA_FOR_READY_PROJECT,
    SET_KEYBOARD_PROJECT,
    SET_REF_CONTAINER_PROJECT,
    SET_SEARCH_PROJECT,
    SET_VIEW_PROJECT,
    SET_SORT_PROJECT,
    COLUMNS_PROJECT,
    ROWS_PER_PAGE_OPTIONS,
    SET_PAGE_PROJECT,
    SET_ROWS_PER_PAGE_PROJECT,

    SET_GET_DATA_FOR_READY_FUNCTION_TASKS,
    SET_KEYBOARD_FUNCTION_TASKS,
    SET_SEARCH_FUNCTION_TASKS,

    SET_GET_DATA_FOR_READY_FUNCTION,
    SET_KEYBOARD_FUNCTION,
    SET_REF_CONTAINER_FUNCTION,
    SET_SEARCH_FUNCTION,
    SET_REFRESH_INSTANCES_FUNCTION_TASKS,
} from '../constants';

export const initialState: any = {
    projects: {
        isReady: false,
        projectsParent: [],
        projectsView: [],
        selectedProject: {},
        refContainer: null,
        searchKeyWords: "",
        isView: 0,
        columnProject: COLUMNS_PROJECT,
        page: 0,
        rowsPerPage: ROWS_PER_PAGE_OPTIONS[0],
    },
    functionsTasks: {
        isReady: false,
        functionsParent: [],
        functionsView: [],
        selectedFunctions: {},
        refContainer: null,
        searchKeyWords: "",
        disabledRefresh: {}
    },
    functions: {
        isReady: false,
        functionsParent: [],
        functionsView: [],
        selectedFunctions: {},
        refContainer: null,
        searchKeyWords: "",
    }
}

type ReducerState = Readonly<typeof initialState>;
export default {
    name: NAME_REDUCER,
    reducer: (state: ReducerState = { ...initialState }, actions: IAction) => {
        if (actions && actions.type) {
            const { type, payload } = actions;
            switch (type) {
                case SET_GET_DATA_FOR_READY_PROJECT:
                case SET_KEYBOARD_PROJECT:
                case SET_REF_CONTAINER_PROJECT:
                case SET_SEARCH_PROJECT:
                case SET_VIEW_PROJECT:
                case SET_SORT_PROJECT:
                case SET_PAGE_PROJECT:
                case SET_ROWS_PER_PAGE_PROJECT:
                    return {
                        ...state,
                        ...payload
                    }
                case SET_GET_DATA_FOR_READY_FUNCTION_TASKS:
                case SET_KEYBOARD_FUNCTION_TASKS:
                case SET_SEARCH_FUNCTION_TASKS:
                case SET_REFRESH_INSTANCES_FUNCTION_TASKS:
                    return {
                        ...state,
                        ...payload
                    }
                case SET_GET_DATA_FOR_READY_FUNCTION:
                case SET_KEYBOARD_FUNCTION:
                case SET_REF_CONTAINER_FUNCTION:
                case SET_SEARCH_FUNCTION:
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
