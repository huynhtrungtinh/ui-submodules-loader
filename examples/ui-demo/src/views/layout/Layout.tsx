import React from 'react'
import { userLogout } from "@dgtx/coreui";
import { LayoutBasic, LayoutBaseType } from "./LayoutBasic";
import { connect } from 'react-redux';
import { THEME_BASIC } from "../../assets/themes";
import { LayoutMain } from "./LayoutMain";
import { bindActionCreators } from 'redux';

const mapStateToProps = (state: any, ownProps: any) => {
  return {
    theme: state.layout && state.layout.theme || THEME_BASIC
  }
}
const SwitchLayout: React.FC<LayoutBaseType> = (props: LayoutBaseType) => {
  return (<LayoutBasic theme={props.theme}>
    <LayoutMain {...props} />
  </LayoutBasic>
  )
}

const mapActionToProps = (dispatch: any) => {
  return {
    onLogout: bindActionCreators(userLogout, dispatch)
  }
}



export const LayoutProvider: any = connect(mapStateToProps, mapActionToProps)(SwitchLayout)