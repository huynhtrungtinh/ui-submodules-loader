import * as React from 'react';
import { reducer, initialState } from './Reducer';
import * as actionsCreator from './ActionsCreator';
// import { bindActionCreators } from '../../utils';
import { IActionsCreator } from './Constants';

const PushNotificationsContext: any = React.createContext({ ...initialState });
function PushNotificationsProvider({ children }: unknown | any) {
    const [state, dispatch] = React.useReducer(reducer, { ...initialState });
    // const actions = bindActionCreators({ ...actionsCreator }, dispatch);
    const actions = {
        getOptionNoti: async (input:IActionsCreator) => {
            const result: any = await actionsCreator.getOptionNoti(input);
            dispatch(result);
        },
        setClickOption:  async (input:IActionsCreator) => {
            const result: any = await actionsCreator.setClickOption(input);
            dispatch(result);
        },
        setCheckedDisabled:  async (input:IActionsCreator) => {
            const result: any = await actionsCreator.setCheckedDisabled(input);
            dispatch(result);
        },
        setMenuOptionsOpen:  async (input:IActionsCreator) => {
            const result: any = await actionsCreator.setMenuOptionsOpen(input);
            dispatch(result);
        },
    }
    return (
        <PushNotificationsContext.Provider value={{ state, actions }}>
            {children}
        </PushNotificationsContext.Provider>
    );
}
export {
    PushNotificationsContext,
    PushNotificationsProvider
}
