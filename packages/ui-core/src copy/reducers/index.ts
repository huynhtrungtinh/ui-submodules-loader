import {i18nReducer} from 'react-redux-i18n';
import {combineReducers} from 'redux';
import core from './core';
import currentUser from './currentUserReducer';
export * from './reducer_creator';

export default (customReducers: any) => {
    return combineReducers({
        i18n: i18nReducer,
        user: currentUser,
        core,
        ...customReducers,
    })
}
