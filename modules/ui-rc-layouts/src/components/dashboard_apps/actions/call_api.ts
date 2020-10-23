import axios from 'axios';
import { getApiUacURI } from '@dgtx/coreui';
import { getProjects, getFunctions, getFunctionsTasks, getInstances } from '../mokup';
import { convertDataProjects } from './projects_actions';
import { convertDataFunctionsTasks } from './functions_tasks_actions';
import { convertDataFunctions } from './functions_actions';



export const callAPIGetProjects = async (appName: string) => {
    return { error: null, data: convertDataProjects(getProjects()) || [] }
    return await axios.get(`${getApiUacURI()}/apps/${appName}`)
        .then((res: { data: any; }) => {
            console.log('res: ', res)
            return { error: null, data: res.data || {} }
        })
        .catch((error: any) => {
            console.log('error: ', error)
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
            return { error: null, data: [] }
        });
};

export const callAPIGetFunctionsTasks = async (appName: string, projectId: string) => {
    return { error: null, data: convertDataFunctionsTasks(getFunctionsTasks()) || [] }
    return await axios.get(`${getApiUacURI()}/apps/${appName}/projects/${projectId}`)
        .then((res: { data: any; }) => {
            console.log('res: ', res)
            return { error: null, data: convertDataFunctionsTasks(res.data) || [] }
        })
        .catch((error: any) => {
            console.log('error: ', error)
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
            return { error: null, data: [] }
        });
};

export const callAPIGetFunctions = async (appName: string) => {
    return { error: null, data: convertDataFunctions(getFunctions(appName)) || [] }
    return await axios.get(`${getApiUacURI()}/apps/${appName}`)
        .then((res: { data: any; }) => {
            console.log('res: ', res)
            return { error: null, data: convertDataFunctions(res.data) || [] }
        })
        .catch((error: any) => {
            console.log('error: ', error)
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
            return { error: null, data: [] }
        });
};

export const callAPIGetInstances = async (sourceName: string) => {
    return { error: null, data: getInstances(sourceName) || [] }
    return await axios.get(`${getApiUacURI()}/apps/${sourceName}`)
        .then((res: { data: any; }) => {
            console.log('res: ', res)
            return { error: null, data: convertDataFunctions(res.data) || [] }
        })
        .catch((error: any) => {
            console.log('error: ', error)
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
            return { error: null, data: [] }
        });
};