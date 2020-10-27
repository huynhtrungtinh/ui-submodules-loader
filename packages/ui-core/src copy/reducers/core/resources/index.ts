import { REGISTER_RESOURCE, UNREGISTER_RESOURCE } from '../../../actions'
import data from './data';
import list from './list';
import state from './state';

const initialState:any = {};
export interface ActionProps {
    type: string,
    payload?: any,
    meta?:any
}
export default (previousState = initialState, action:ActionProps) => {
    if (action.type === REGISTER_RESOURCE) {
        let  newState ={
            ...previousState};
        action.payload.forEach((element:any) => {
            if(typeof element.reducer ==='function'){
                const resourceState = {
                    props: element,
                    data: element.reducer(undefined, action),
                }
                 newState = {
                    ...newState,
                    [element.name]: resourceState
                }
            }else{
                const resourceState = {
                    props: element,
                    data: data(undefined, action),
                    list: list(undefined, action),
                    state: state(undefined, action),
                }
                 newState = {
                    ...newState,
                    [element.name]: resourceState
                }
            }   
           
        });
        return newState
    }
    if (action.type === UNREGISTER_RESOURCE) {
        const newState = Object.keys(previousState).reduce((acc, key) => {
            if (action.payload.includes(key)) {
                return acc;
            }
            return { ...acc, [key]: previousState[key] };
        }, {});
        return newState;
    }
    if (!action.meta || !action.meta.resource) {
        return previousState;
    }
    const resources = Object.keys(previousState);
    const newState = resources.reduce(
        (acc, resource) => ({
            ...acc,
            [resource]:
                action.meta.resource === resource
                    ?(previousState[resource].props.reducer?
                        {
                        props: previousState[resource].props,
                        data: previousState[resource].props.reducer(previousState[resource].data, action),
                    }:{
                        props: previousState[resource].props,
                        data: data(previousState[resource].data, action),
                        list: list(previousState[resource].list, action),
                        state: state(previousState[resource].state, action),
                    })
                    : previousState[resource],
        }),
        {}
    );

    return newState;
};


