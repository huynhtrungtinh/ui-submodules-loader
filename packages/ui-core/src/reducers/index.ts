import { History } from 'history';
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { i18nReducer } from 'react-redux-i18n';
import currentUser from './currentUserReducer'
import core from './core'
export * from './reducer_creator'

export default (customReducers: any, history: History) => {
    return combineReducers({
        i18n: i18nReducer,
        user: currentUser,
        router: connectRouter(history),
        core,
        ...customReducers,
    })
}
