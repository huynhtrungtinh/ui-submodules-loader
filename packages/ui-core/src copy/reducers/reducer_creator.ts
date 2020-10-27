import { ActionReducer, IAction, ActionCreator, Props } from '../models';
export interface On<S> {
  types: string[];
  reducer: ActionReducer<S>;
}
export interface OnReducer<S> {
  (state: S, action: IAction): S;
}

export function on(
  ...args: (any)[]
): any {
  const reducer = args.pop() as ActionReducer<any>;
  return { reducer, types: args };
}

function defineType<T extends string>(
  type: T,
  creator: any
): ActionCreator {
  return Object.defineProperty(creator, 'type', {
    value: type,
    writable: false,
  });
}


export function createAction<T extends string>(
  type: T,
  config?: { _as: 'props' } | any
): ActionCreator {
  if (typeof config === 'function') {
    return defineType(type, (...args: any[]) => ({
      ...config(...args),
      type,
    }));
  }
  const as = config ? config._as : 'empty';
  switch (as) {
    case 'empty':
      return defineType(type, () => ({ type }));
    case 'props':
      return defineType(type, (props: object) => ({
        ...props,
        type,
      }));
    default:
      throw new Error('Unexpected config.');
  }
}

export function props<P extends object>(): Props<P> {
  return { _as: 'props', _p: undefined! };
}


export function createReducer<S, A extends IAction>(
  initialState: S,
  ...ons: On<S>[]
): any {
  const map = new Map<string, ActionReducer<S, A>>();
  for (let on of ons) {
    for (let type of on.types) {
      if (map.has(type)) {
        const existingReducer = map.get(type) as ActionReducer<S, A>;
        const newReducer: ActionReducer<S, A> = (state, action) =>
          on.reducer(existingReducer(state, action), action);
        map.set(type, newReducer);
      } else {
        map.set(type, on.reducer);
      }
    }
  }

  return function (state: S = initialState, action: A): S {
    const reducer = map.get(action.type);
    return reducer ? reducer(state, action) : state;
  };
}
