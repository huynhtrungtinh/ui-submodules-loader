import {fetchJson, getApiOauthURI, getApiUacURI, getRefreshToken, IAuthenProvider} from '@dgtx/ui-scl';

const AuthenProvider: IAuthenProvider = {
  doLogin: async (username: string, password: string) => {
    let result = await fetchJson(`${getApiOauthURI()}/login`, {method: "POST", body: JSON.stringify({username, password})})
    return {
      access_token: result.json.access_token,
      refresh_token: result.json.refresh_token,
      username: result.json.username,
      displayName: result.json.name || result.json.username,
      email: result.json.email,
    }
  },
  doRefresh: async () => {
    let result = await fetchJson(`${getApiOauthURI()}/refresh`, {method: "POST", body: JSON.stringify({refresh_token: getRefreshToken()})})
    return result.json
  },
  doLogout: async () => {
    let result = await fetchJson(`${getApiOauthURI()}/logout`, {method: "POST", body: JSON.stringify({refresh_token: getRefreshToken()})})
    return result.json
  },
  getResourceAccess: () => {
    return fetchJson(`${getApiUacURI()}/resources`, {method: "GET"})
  },
  getUserInfo: async () => {
    let result = await fetchJson(`${getApiOauthURI()}/user-info`, {method: "GET"})
    return {
      username: result.json.username,
      displayName: result.json.name || result.json.username,
      email: result.json.email,
    }
  }
}

export {AuthenProvider};

