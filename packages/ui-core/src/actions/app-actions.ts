import {fetchJson, getApiUacURI, getAuthenProvider} from '@dgtx/ui-scl';

export const getApps = (): Promise<any> => {
    const authenProvider = getAuthenProvider()
    if (authenProvider.getResourceAccess) {
        return authenProvider.getResourceAccess();
    }
    return fetchJson(`${getApiUacURI()}/apps`, {method: 'GET'})
}
