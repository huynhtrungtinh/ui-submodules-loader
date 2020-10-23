import {
    SET_IS_VIEW_BREADCRUMBS,
    CREATE_BREADCRUMBS_HEADER,
    UPDATE_BREADCRUMBS_HEADER,
    PATH_TO_STORE_REDUX,
    PATH_TO_STORE_REDUX_DASHBOARD_APPS,
    SORT_SOURCE_NAME
} from '../../constants';
import { executeActionReducer } from '../common_actions';
import { get, set, isEmpty, intersection } from 'lodash';
import { callAPIGetFunctionsTasks } from '../../../components';
import { redirect } from '@dgtx/coreui';

export const setClickBreadcrumbsItem = (tab: any, history: any) => async (dispatch: any, getState: any) => {
    const state = get(getState(), PATH_TO_STORE_REDUX, {});
    console.log('=======setClickBreadcrumbsItem===========');
    console.log("tab: ", tab);
    console.log('====================================');
    if (tab.breadcrumbIndex !== state.breadcrumbIndex) {
        redirect(tab.path);
        // dispatch(updateBreadcrumbs({
        //     type: tab.breadcrumbKey,
        //     data: {
        //         name: tab.name,
        //         display_name: tab.display_name,
        //         path: tab.path,
        //         index: tab.breadcrumbIndex,
        //     },
        //     history
        // }))
    }
};

export const setViewBreadcrumbs = (isView: boolean) => async (dispatch: any) => {
    dispatch(createBreadcrumbs());
    dispatch(executeActionReducer(SET_IS_VIEW_BREADCRUMBS, { isViewBreadcrumbs: isView }));
};

export const createBreadcrumbs = (input?: any) => async (dispatch: any, getState: any) => {
    console.log('=======createBreadcrumbs===========');
    console.log("input: ", input);
    console.log('====================================');
    const pathname = window.location.pathname;
    const state = get(getState(), PATH_TO_STORE_REDUX, {});
    let pathKeys = pathname.split("/");
    let routers = input && input.apps || state.routers || [];
    let routeFocus = routers.filter((a: any) => pathKeys.includes(a.app_name) && a.app_name !== "home");
    let payload: any = {};
    let route: any = {};
    console.log("pathname: ", pathname.split("/"));
    console.log("routers: ", routers);
    if (pathname === "/" || pathname === "/home") {
        routeFocus = routers.filter((a: any) => a.app_name === "home");
    }
    if (!routeFocus[0]) {
        console.log("pathKeys: ", pathKeys);
        console.log("SORT_SOURCE_NAME: ", SORT_SOURCE_NAME);
        let isDiff = intersection(pathKeys, SORT_SOURCE_NAME);
        if (isDiff[0]) {
            routeFocus = routers.filter((a: any) => a.app_name === "projects");
        }
        console.log("isDiff: ", isDiff);
    }
    console.log("routeFocus: ", routeFocus);
    if (routeFocus[0]) {
        route = routeFocus[0];
        console.log("route: ", route);
        payload.isViewBreadcrumbs = route.is_view_breadcrumbs;
        payload.breadcrumbIndex = 0;
        payload.breadcrumbData = [];
        payload.routeFocus = route;
        route.breadcrumbs.map((b: any, index: any) => {
            if (b === "app") {
                payload.breadcrumbData.push(
                    {
                        "name": route.app_name,
                        "display_name": route.display_name,
                        "path": route.path,
                        "breadcrumbIndex": index,
                        "breadcrumbKey": b
                    }
                )
            } else {
                payload.breadcrumbData.push(
                    {
                        "name": null,
                        "display_name": "",
                        "path": "",
                        "breadcrumbIndex": index,
                        "breadcrumbKey": b
                    }
                )
            }
        });
        console.log("payload: ", payload);
        dispatch(executeActionReducer(CREATE_BREADCRUMBS_HEADER, payload));
    }
}

export const updateBreadcrumbs = (input?: any) => async (dispatch: any, getState: any) => {
    const state = get(getState(), PATH_TO_STORE_REDUX, {});
    let breadcrumbData = state.breadcrumbData || [];
    const { type = "", data = {}, history } = input;
    let payload: any = {};
    switch (type) {
        case "app": {
            dispatch(createBreadcrumbs())
            history.push(data.path);
            // redirect(data.path);
            break;
        }
        case "project": {
            let item = {
                ...get(breadcrumbData, `${data.index}`),
                name: data.name,
                display_name: data.display_name,
                path: data.path,
            }
            set(breadcrumbData, `${data.index}`, item)
            payload.breadcrumbData = breadcrumbData;
            payload.breadcrumbIndex = data.index;
            dispatch(executeActionReducer(UPDATE_BREADCRUMBS_HEADER, payload));
            // redirect(data.path);
            history.push(data.path);
            break;
        }
        case "function": {
            // redirect(data.path);
            break;
        }
        default:
            break;
    }
}

export const createBreadcrumbsByPathName = (input: any) => async (dispatch: any, getState: any) => {
    console.log('==========createBreadcrumbsByPathName========');
    console.log('input: ', input);
    const state = get(getState(), PATH_TO_STORE_REDUX, {});
    const rouFocus = state.routeFocus || {};
    const stateDA = get(getState(), PATH_TO_STORE_REDUX_DASHBOARD_APPS, {});
    let projectsParent = get(stateDA, 'projects.projectsParent', []);
    console.log('state.projectSelected: ', state.projectSelected);
    console.log('projectsParent: ', projectsParent);
    console.log('====================================');
    if ( (!projectsParent || projectsParent.length <= 0 || !isEmpty(state.projectSelected)) && rouFocus.app_name === "projects") {
        return;
    }
    // let functionsParent = stateDA.functionsTasks.functionsParent || [];
    let routeFocus: any = {};
    const routers = state.routers || [];
    const { match } = input;
    const projectId = get(match, 'params.projectId', null);
    const functionName = get(match, 'params.functionName', null);
    const taskKeyDef = get(match, 'params.taskKeyDef', null);
    let funcName = taskKeyDef || functionName || null;
    console.log("projectId: ", projectId);
    console.log("functionName: ", functionName);
    console.log("taskKeyDef: ", taskKeyDef);
    if (projectId) {
        let payload: any = {};
        routeFocus = routers.filter((r: any) => r.app_name === "projects")[0];
        const project = projectsParent.filter((f: any) => f.id === projectId)[0]
        console.log('projectsParent: ', projectsParent);
        console.log('project: ', project);
        payload.projectSelected = project;
        if (!functionName && !taskKeyDef) {
            const bre = createBCByProject(routeFocus, project);
            console.log('bre: ', bre);
            if (!bre.isError) {
                payload = {
                    ...payload,
                    ...bre
                }
                dispatch(executeActionReducer(CREATE_BREADCRUMBS_HEADER, payload));
            }
            return;
        }
        const functionsData: any = await callAPIGetFunctionsTasks("projects", projectId);
        console.log("functionsData: ", functionsData.data);
        console.log("taskKeyDef: ", taskKeyDef);
        let fun: any = null;
        if (functionsData.error) {
            console.log('get contacts data is error.');
        } else {
            if (functionName) {
                funcName = convertNameFunction(functionName);
                console.log("functionsData: ", functionsData.data);
                console.log("funcName: ", funcName);
            }
            for (let i = 0; i < functionsData.data.length; i++) {
                const element = functionsData.data[i];
                for (let j = 0; j < element.length; j++) {
                    const f = element[j];
                    if (f.name === funcName) {
                        fun = f;
                        break;
                    }
                }
            }
            console.log("fun: ", fun);
            payload.functionsParent = functionsData.data;
        }
        if (fun) {
            console.log('taskKeyDef: ', taskKeyDef);
            console.log('fun: ', fun);
            const bre = createBCByProjectFunctions(routeFocus, project, fun);
            console.log('bre: ', bre);
            if (!bre.isError) {
                payload = {
                    ...payload,
                    ...bre
                }
            }
        }
        console.log("payloadpayloadpayload: ", payload);
        dispatch(executeActionReducer(CREATE_BREADCRUMBS_HEADER, payload));
    }
}

export function createBCByProject(routeFocus: any, project: any) {
    let outPut: any = {};
    let outPutDefault: any = {
        isViewBreadcrumbs: false,
        breadcrumbIndex: 0,
        breadcrumbData: [],
        routeFocus: {}
    };
    let isError = false;
    outPut.isViewBreadcrumbs = routeFocus.is_view_breadcrumbs;
    outPut.breadcrumbIndex = 1;
    outPut.breadcrumbData = [];
    outPut.routeFocus = routeFocus;
    routeFocus.breadcrumbs.map((b: any, index: any) => {
        if (b === "app") {
            outPut.breadcrumbData.push(
                {
                    "name": routeFocus.app_name,
                    "display_name": routeFocus.display_name,
                    "path": routeFocus.path,
                    "breadcrumbIndex": index,
                    "breadcrumbKey": b
                }
            )
        } else if (b === "project") {
            if (project) {
                outPut.breadcrumbData.push(
                    {
                        "name": project.id,
                        "display_name": project.name,
                        "path": `${routeFocus.app_name}/${project.id}`,
                        "breadcrumbIndex": index,
                        "breadcrumbKey": b
                    }
                )
            } else {
                isError = true;
            }
        } else {
            outPut.breadcrumbData.push(
                {
                    "name": null,
                    "display_name": "",
                    "path": "",
                    "breadcrumbIndex": index,
                    "breadcrumbKey": b
                }
            )
        }
    });
    if (isError) {
        outPutDefault.isError = true;
        return outPutDefault;
    }
    return outPut;
}

function convertNameFunction(name: string) {
    let outPut: any = "";
    let keys = name.split("-");
    keys.map((k: any, index: any) => {
        if (index === 0) {
            outPut = outPut + k;
        } else {
            outPut = outPut + "_" + k;
        }
    })
    return outPut;
}

export function createBCByProjectFunctions(routeFocus: any, project: any, functionsData: any) {
    let outPut: any = {};
    let outPutDefault: any = {
        functionsParent: [],
        isViewBreadcrumbs: false,
        breadcrumbIndex: 0,
        breadcrumbData: [],
        routeFocus: {}
    };
    let isError = false;
    outPut.isViewBreadcrumbs = routeFocus.is_view_breadcrumbs;
    outPut.breadcrumbIndex = 2;
    outPut.breadcrumbData = [];
    outPut.routeFocus = routeFocus;
    routeFocus.breadcrumbs.map((b: any, index: any) => {
        if (b === "app") {
            outPut.breadcrumbData.push(
                {
                    "name": routeFocus.app_name,
                    "display_name": routeFocus.display_name,
                    "path": routeFocus.path,
                    "breadcrumbIndex": index,
                    "breadcrumbKey": b
                }
            )
        } else if (b === "project") {
            if (project) {
                outPut.breadcrumbData.push(
                    {
                        "name": project.id,
                        "display_name": project.name,
                        "path": `${routeFocus.app_name}/${project.id}`,
                        "breadcrumbIndex": index,
                        "breadcrumbKey": b
                    }
                )
            } else {
                isError = true;
            }
        } else {
            if (functionsData) {
                outPut.breadcrumbData.push(
                    {
                        "name": functionsData.name,
                        "display_name": functionsData.display_name,
                        "path": `${routeFocus.app_name}/${functionsData.path}`,
                        "breadcrumbIndex": index,
                        "breadcrumbKey": b
                    }
                )
            } else {
                isError = true;
            }
        }
    });
    if (isError) {
        outPutDefault.isError = true;
        return outPutDefault;
    }
    return outPut;
}
