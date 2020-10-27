export const CORE_RESOURCE = '@DGS/CORE_RESOURCE';
export const REGISTER_RESOURCE = '@DGS/CORE_RESOURCE/REGISTER';
export const UNREGISTER_RESOURCE = '@DGS/CORE_RESOURCE/UNREGISTER';

export interface Resource {
    name: string,
    reducer?: any,
    refresh?: boolean,
    flush?: boolean,
    unregisterDuration?: number
}

export const registerResource = (resources: Resource[] | any[], guid: string) => ({
    type: REGISTER_RESOURCE,
    payload: resources,
    guid,
});

export const unregisterResource = (resourceNames: Resource[] | any[], guid: string) => ({
    type: UNREGISTER_RESOURCE,
    payload: resourceNames,
    guid,
});
