import {
  NAME_REDUCER,
  UNMOUNT,
  PATH_TO_STORE_REDUX,
  SET_MOFIFY_CHANGE_PASSWORD,
  SET_OPEN_DIALOG_CHANGE_PASSWORD,
  SET_SHOW_PASSWORD,
  REGEX_EMPTY,
  REGEX_PASSWORD,
  DEFAULT_ITEM,
  KEY_TRANSLATE,
  SET_SUBMIT_CHANGE_PASSWORD,
  SET_OPEN_DIALOG_CHANGE_PASSWORD_SUCCESS
} from '../constants';
import { get, isEmpty } from 'lodash';
import { I18n } from 'react-redux-i18n';
import { push } from "connected-react-router";
import { unregisterResource } from '@dgtx/coreui';

export const executeActionReducer = (type: string, payload: any) => {
  return { type, payload, meta: { resource: NAME_REDUCER } };
};
export const unmount = () => async (dispatch: any) => {
  dispatch(executeActionReducer(UNMOUNT, {}));
};

export const setMofify = (name: string, value: string) => async (dispatch: any, getState: any) => {
  const state = get(getState(), PATH_TO_STORE_REDUX, {});
  const field = state[name] || '';
  const password_new = state.password_new || '';
  const password_confirm = state.password_confirm || '';
  let isValidate = validateRules(value);
  let payload: any = {};
  if (name === 'password_confirm' && isEmpty(isValidate)) {
    isValidate = comparePassword(password_new.value, value);
  }
  if (name === 'password_new' && isEmpty(comparePassword(value, password_confirm.value))) {
    payload.password_confirm = {
      ...password_confirm,
      errorMessage: ''
    }
  }
  payload[name] = {
    ...field,
    value,
    errorMessage: isValidate
  }
  dispatch(executeActionReducer(SET_MOFIFY_CHANGE_PASSWORD, payload));
}

export const setOpenDialogChangePassword = (isOpen?: Boolean) => async (dispatch: any, getState: any) => {
  let payload: any = {
    isDialogChangePasswordOpen: false,
  };
  if (isOpen) {
    payload.isDialogChangePasswordOpen = true;
  }
  dispatch(executeActionReducer(SET_OPEN_DIALOG_CHANGE_PASSWORD, payload));
};

export const setShowText = (fieldKey: any) => async (dispatch: any, getState: any) => {
  const state = get(getState(), PATH_TO_STORE_REDUX, {});
  const field = state[fieldKey] || [];
  let payload: any = {
    [fieldKey]: {
      ...field,
      show_text: !field.show_text
    }
  };
  dispatch(executeActionReducer(SET_SHOW_PASSWORD, payload));
}

export const setOpenDialogChangePasswordSuccess = (isOpen?: Boolean) => async (dispatch: any, getState: any) => {
  let payload: any = {
    isDialogSuccessOpen: false,
  };
  if (isOpen) {
    payload.isDialogSuccessOpen = true;
  }
  dispatch(executeActionReducer(SET_OPEN_DIALOG_CHANGE_PASSWORD_SUCCESS, payload));
};

export const setLogOut = () => async (dispatch: any, getState: any) => {
  const stateCore = get(getState(), 'core.resources', {});
  const resourceNames = Object.keys(stateCore);
  for (let index = 0; index < resourceNames.length; index++) {
    const nameReducer = resourceNames[index];
    const reducer = [
      {
        name: nameReducer,
        flush: true,
        reducer: {},
      }
    ];
    dispatch(unregisterResource(reducer, nameReducer));
  }
  setTimeout(() => {
    dispatch(push('/signin'));
  }, 100);
}

export const setSubmit = () => async (dispatch: any, getState: any) => {
  const state = get(getState(), PATH_TO_STORE_REDUX, {});
  const { password_current, password_new, password_confirm } = state;
  const fields = { password_current, password_new, password_confirm };
  const isValidate = validateFields(fields);
  let payload: any = {};
  if (isValidate.isError) {
    payload = { ...isValidate.fields }
  } else {
    // payload.errorMessage = I18n.t(`${KEY_TRANSLATE}.submit_error`);
    // payload.isDialogChangePasswordOpen = false;
    dispatch(setOpenDialogChangePasswordSuccess(true));
  }
  dispatch(executeActionReducer(SET_SUBMIT_CHANGE_PASSWORD, payload));
}

function validateFields(fields: any) {
  let outPut: any = {
    isError: false,
    fields: {
      password_current: { ...DEFAULT_ITEM },
      password_new: { ...DEFAULT_ITEM },
      password_confirm: { ...DEFAULT_ITEM },
    }
  };
  let fieldsArr = Object.keys(fields);
  for (let index = 0; index < fieldsArr.length; index++) {
    const key = fieldsArr[index];
    const field = fields[key];
    let isValidate = validateRules(field.value);
    if (name === 'password_confirm' && isEmpty(isValidate)) {
      isValidate = comparePassword(fields.password_new.value, field.value);
    }
    if (!outPut.isError && !isEmpty(isValidate)) {
      outPut.isError = true;
    }
    outPut.fields[key].errorMessage = isValidate;
  }
  return outPut;
}

function validateRules(value: any) {
  let outPut: any = '';
  let emptyError = REGEX_EMPTY.test(value);
  let passwordError = REGEX_PASSWORD.test(value);
  let lengthError = value.length >= 40 ? false : true;
  if (!emptyError) {
    outPut = I18n.t(`${KEY_TRANSLATE}.empty_error`);
  } else if (!passwordError) {
    outPut = I18n.t(`${KEY_TRANSLATE}.password_error`);
  } else if (!lengthError) {
    outPut = I18n.t(`${KEY_TRANSLATE}.length_error`);
  }
  return outPut;
}

function comparePassword(password_new: string, password_confirm: string) {
  let outPut: any = '';
  if (password_new !== password_confirm) {
    outPut = I18n.t(`${KEY_TRANSLATE}.compare_error`);
  }
  return outPut;
}
