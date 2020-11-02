import {CssBaseline} from '@material-ui/core';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import React from 'react';
import {themeProvder} from '../../assets';
export interface ILayoutBase {
  theme?: string,
  children: React.ReactChild
}
export type LayoutBaseType = ILayoutBase;

const LayoutBase: React.FC<LayoutBaseType> = (props: LayoutBaseType) => {
  return (
    <ThemeProvider theme={createMuiTheme(themeProvder(props.theme))}>
      <CssBaseline />
      {props.children}
    </ThemeProvider>
  )
}

export const LayoutBasic: React.FC<LayoutBaseType> = React.memo(LayoutBase);
