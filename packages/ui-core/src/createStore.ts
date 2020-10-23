import { createStore, applyMiddleware, Middleware } from "redux";
import reduxThunk from "redux-thunk";
import { createAPIMiddleware, notification } from './middlewares'
import createRootReducer from './reducers'
import resourceMangement from './middlewares/resourceManager'
import { History } from 'history';
export interface PropsStore {
    dataProvider: any
    middlewares: Middleware[],
    middlewaresDev: Middleware[],
    reducers?: object,
    compose?: any
}

export default (props: any ,history:History) => {
    const { middlewares = [],
        middlewaresDev = [],
        reducers,
        dataProvider,
        compose
    } = props;
    const appliedMid = applyMiddleware(
        reduxThunk,
        ...(middlewares || []),
        resourceMangement,
        createAPIMiddleware(dataProvider),
        ...middlewaresDev,
        notification
        )
    const rootReducer = createRootReducer(reducers, history);
    return createStore(
        rootReducer,
        compose ? compose(appliedMid) : appliedMid
    )
}