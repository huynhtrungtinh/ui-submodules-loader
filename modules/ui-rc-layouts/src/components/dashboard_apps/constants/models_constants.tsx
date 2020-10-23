import * as React from 'react';
import { Translate } from 'react-redux-i18n'
import { KEY_TRANSLATE_T_LAYOUTS } from '../constants';

export interface IMeta {
    resource: string;
    [key: string]: any;
}

export interface IAction {
    readonly type: string;
    readonly payload?: any;
    readonly meta: IMeta;
}
export declare interface TypedAction<T extends string> extends IAction {
    readonly type: T;
}
export type ActionCreator = TypedAction<string> | IAction | any;

export interface Props<T> {
    _as: 'props';
    _p: T;
}

export interface ActionReducer<T, V extends IAction = IAction> {
    (state: T | undefined, action: V): T;
}

export interface IParams {
    [key: string]: any
}

export interface IActionsCreator {
    params: IParams;
    state: any;
}

interface Column {
    id: 'name' | 'customer_name';
    label: any;
    minWidth?: number;
    sortColumn?: boolean;
    sortDirection?: string;
    index?: number;
  }
  
  export const COLUMNS_PROJECT: Column[] = [
    {
      id: 'name',
      label: <Translate value={`${KEY_TRANSLATE_T_LAYOUTS}.dashboard_apps.project`} />,
      minWidth: 120,
      sortColumn: false,
      sortDirection: 'none',
      index: 0
    },
    {
      id: 'customer_name',
      label: <Translate value={`${KEY_TRANSLATE_T_LAYOUTS}.dashboard_apps.customer`} />,
      minWidth: 130,
      sortColumn: false,
      sortDirection: 'none',
      index: 1
    }
  ];
