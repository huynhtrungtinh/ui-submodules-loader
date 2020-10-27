import {ACCESS_TOKEN_KEY, FAILURE, getApiOauthURI, GET_TOKEN, IAction, IUserInfo, LOGIN, LOGOUT, parseJwt, REFRESH_TOKEN_KEY, REQUEST, SET_USER_INFO, SUCCESS, USER_AGENT} from '@dgtx/ui-scl';
import {get} from 'lodash';

export const logout = () => async (dispatch: any) => {
  clearLocalStorage();
  await dispatch({
    type: SUCCESS(LOGOUT)
  });
};

export const setUserInfo = () => async (dispatch: any) => {
  const token: any = localStorage.getItem(ACCESS_TOKEN_KEY);
  const jwtData = parseJwt(token) || {};
  const userInfo: IUserInfo = {
    displayName: jwtData.name || '',
    email: jwtData.email || '',
    username: jwtData.email || '',
    role: jwtData.role
  }
  let payload: any = {};
  payload.account = {...userInfo};
  // if (ROLE[jwtData.role]) {
  //   let routers: any = [];
  //   ROLE[jwtData.role].map((r: any) => {
  //     const item: any = ROUTE[r];
  //     routers.push(item);
  //   })
  //   payload.routers = routers;
  // }

  await dispatch({
    type: SUCCESS(SET_USER_INFO),
    payload
  });
};


// const RESPONSE_TEXT = {
//   "status": "success",
//   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMTI5MjI3OTkxZDE0MTMxZjBmNjJiZSIsImVtYWlsIjoiNWYxMjkyMjc5OTFkMTQxMzFmMGY2MmJlIiwibmFtZSI6IlRyYW4gVmFuIFRyZSIsImlhdCI6MTU5NTA1NDk2NiwiZXhwIjoxNTk1MDgzNzY2fQ.bxV1d8W-GXXzi0BvxGcVo1TFMafktHk_o_lNz-XwfWY",
// }

export const login = (username: string, password: string) => async (dispatch: any) => {
  try {
    // dispatch(setShowBackdrop());
    let data = new URLSearchParams();
    data.append('grant_type', 'password');
    data.append('email', username);
    data.append('password', password);
    const response = await fetch(`${getApiOauthURI()}/users/login`, {
      method: "POST",
      headers: new Headers({
        "user-agent": USER_AGENT,
        "Content-type": "application/x-www-form-urlencoded;charset=UTF-8"
      }),
      body: data
    });
    const textIn = await response.text();
    const result = JSON.parse(textIn);
    // TEST
    // const response = { status: 200 };
    // const result: any = RESPONSE_TEXT;

    if (response.status === 200) {
      const accessToken = get(result, 'token', null);
      const refreshToken = accessToken;
      const jwtData = parseJwt(accessToken) || {};
      const userInfo: IUserInfo = {
        displayName: jwtData.name || '',
        email: jwtData.email || '',
        username: jwtData.email || '',
        role: jwtData.role
      }
      setToken(accessToken, refreshToken);
      setTimeout(() => {
        dispatch({
          type: SUCCESS(LOGIN),
          payload: {
            loading: false,
            isAuthenticated: true,
            account: {...userInfo},
            accessToken,
            refreshToken
          }
        });
        // dispatch(setHiddenBackdrop());
      }, 300);
    } else {
      await dispatch({
        type: FAILURE(LOGIN),
        payload: {
          loading: false,
          isAuthenticated: false,
          account: {}
        }
      });
      // dispatch(setHiddenBackdrop());
      // dispatch(setShowAlert(I18n.t('signin_signup.signin_error'), 'error', 10000))
    }
  }
  catch (er) {
    // dispatch(setHiddenBackdrop());
  }
};

export function getAccessToken() {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
}

export function getRefreshToken() {
  return localStorage.getItem(REFRESH_TOKEN_KEY);
}

export function clearLocalStorage() {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
  localStorage.removeItem(REFRESH_TOKEN_KEY);
  // localStorage.clear();
  return true;
}

export function setToken(accessToken: string, refreshToken: string) {
  if (accessToken && refreshToken) {
    localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
    localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
    return true;
  }
  return false
}

const initialState = {
  routers: [],
  loading: false,
  isAuthenticated: getAccessToken() ? true : false,
  account: {} as any
};

export type AuthenticationState = Readonly<typeof initialState>;

// Reducer
export default (state: AuthenticationState = {...initialState}, {type, payload, meta}: IAction): AuthenticationState => {
  switch (type) {
    case REQUEST(GET_TOKEN):
      return {
        ...state,
        loading: true
      };
    case FAILURE(GET_TOKEN):
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
      };
    case SUCCESS(GET_TOKEN): {
      return {
        ...state,
        loading: false,
        isAuthenticated: true
      };
    }
    case SUCCESS(SET_USER_INFO): {
      return {
        ...state,
        account: payload.account,
        routers: payload.routers
      };
    }
    case SUCCESS(LOGOUT): {
      return {...initialState, isAuthenticated: false};
    }
    case FAILURE(LOGIN):
      return {
        ...state,
        ...payload
      };
    case SUCCESS(LOGIN):
      return {
        ...state,
        ...payload
      };
    default:
      return state;
  }
};
