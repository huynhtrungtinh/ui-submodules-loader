import { getDataObject } from "../utils";
import {
   CORE_RESOURCE,
   REGISTER_RESOURCE,
   UNREGISTER_RESOURCE
} from '../actions';

import { Resource } from '../actions/resourcesActions'


interface RemoveProps {
   guid: string,
   name: string,
   time?: number,
   func?: any
}

class ManagerResources {
   awaitRemove: any = {};
   resources: any = {};
   add = (resources: string[], guid: string) => {
      resources.forEach(name => {
         this.resources[name] = this.resources[name] || {};
         this.resources[name][guid] = 1;
      })

   }
   remove = (props: RemoveProps) => {
      const ctx = this;
      delete ctx.resources[props.name][props.guid]
      if (props.func && Object.keys(ctx.resources[props.name]).length === 0) {
         this.awaitRemove[props.name] =
            setTimeout(() => {
               props.func();
               delete ctx.awaitRemove[props.name]
            }, props.time);
      }
   }
   clearRemove = (name: string) => {
      if (this.awaitRemove[name]) {
         clearTimeout(this.awaitRemove[name])
         delete this.awaitRemove[name]
      }
   }
}
export const createResourceMangement = (timeOutDefault = 3000) => {
   const manger = new ManagerResources();
   return ({ dispatch, getState }: any) =>
      (next: any) =>
         (action: any) => {
            if (action.type.includes(CORE_RESOURCE)) {
               const state = getDataObject("core.resources", getState()) || {};
               const resources = Object.keys(state)
               if (action.type === REGISTER_RESOURCE) {
                  const newPayload: any[] = [];
                  action.payload.forEach((res: Resource) => {
                     if (!resources.includes(res.name)) {
                        newPayload.push(res);
                     } else {
                        manger.clearRemove(res.name)
                        if (res.refresh) {
                           newPayload.push(res);
                        }
                     }
                  });
                  manger.add(action.payload.map((item: Resource) => item.name), action.guid);
                  if (newPayload.length) {
                     return next({ type: action.type, payload: newPayload })
                  }
               } else {
                  const newPayload: any[] = [];
                  action.payload.forEach((res: any) => {
                     const { name, flush, unregisterDuration } = res
                     if (flush) {
                        manger.remove({ guid: action.guid, name: res.name })
                        newPayload.push(res.name)
                     } else {
                        manger.remove({
                           guid: action.guid,
                           name, time: unregisterDuration || timeOutDefault, func: () => {
                              dispatch({ type: UNREGISTER_RESOURCE, payload: [{ name, flush: true }] })
                           }
                        })
                     }
                  });
                  if (newPayload.length) {
                     return next({ type: action.type, payload: newPayload })
                  }
               }
            } else {
               return next(action);
            }
         }
}
export default createResourceMangement();