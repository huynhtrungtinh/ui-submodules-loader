export interface IResource {
   name: string,
   reducer?: any
   options?: any,
}

export interface IPageOption {
   context?: string,
   resources?: IResource[],
   actions?: any,
   mapState?: any

}

export class PageOption implements IPageOption {
   context?: string;
   resources?: IResource[];
   actions: any;
   mapState?: any
   constructor(props: IPageOption) {
       this.actions = props.actions||{};
       this.resources = props.resources || [];
       this.context = props.context || 'registration';
       this.mapState = props.mapState;
   }
}