import * as React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { registerResource, unregisterResource } from '../actions'
import { guid } from '../utils';
import { PageOption, IPageOption } from './PageOption';



export const PageDecorator: any = (option: IPageOption) => (Target: React.ComponentClass) => {
    const optionIn = new PageOption(option);
    const actions = { registerResource, unregisterResource, ...optionIn.actions };
    const mapStateToProps = (state: any, ownProps: any) => {
        const mapState = (typeof optionIn.mapState === 'function') ? option.mapState(state, ownProps) : ownProps
        return {
            user: state.user.user,
            option: optionIn,
            ...mapState,
        }
    }
    const mapDispatchToProps = (dispatch: any) => bindActionCreators(actions, dispatch)

    class Page extends React.Component<any>  {
        guid:string;
        props: any;
        constructor(props:any){
          super(props)  
          this.guid = guid(); 
        }
        componentWillMount = () => {
            const { registerResource, option } = this.props
            if (option.context === 'registration') {
                registerResource(option.resources,this.guid);
            }
        }
        componentWillUnmount = () => {
            const { unregisterResource, option } = this.props
            if (option.context === 'registration') {
                unregisterResource(option.resources,this.guid);
            }
        }
        render = () => {
            return <Target {...this.props} />
        }
    }
    return connect(mapStateToProps, mapDispatchToProps)(Page);

}
