import * as  React from 'react'
import { RouteComponentProps } from 'react-router';
export interface IRouteFunc {
    name?:string,
    path:string,
    exact?:boolean,
    layoutName?:string,
    layout?: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>,
    component:React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>,
    subRoutes?:IRouteFunc[],
} 

export class RouteFunc implements IRouteFunc {
    name?: string ;
    layoutName?:string;
    path: string;
    exact?: boolean ;
    layout?: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
    component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
    subRoutes?: IRouteFunc[] ;
    constructor (props:IRouteFunc|any){
        this.name=props.name;
        this.path=props.path;
        this.exact=props.exact;
        this.layout=props.layout;
        this.component=props.component;
        this.layoutName=props.layoutName;
        if(props.subRoutes){
            this.subRoutes = props.subRoutes.map((item:IRouteFunc)=>new RouteFunc(item))
        }else{
            this.subRoutes=[];
        }
    }
}