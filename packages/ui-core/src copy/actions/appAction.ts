import { fetchJson } from '../utils'
import { getApiUacURI, getAuthenProvider } from '../constants'

export const getApps = (): Promise<any> => {
    const authenProvider = getAuthenProvider()
    if (authenProvider.getResourceAccess) {
        return authenProvider.getResourceAccess();
    }
    return fetchJson(`${getApiUacURI()}/apps`, { method: 'GET' })
}