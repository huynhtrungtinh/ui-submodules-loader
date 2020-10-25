import { userLogout } from "@dgtx/ui-core";
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { THEME_BASIC } from "../../assets/themes";
import { LayoutBaseType, LayoutBasic } from "./LayoutBasic";
import { LayoutMain } from "./LayoutMain";

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
