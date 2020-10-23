import { red } from '@material-ui/core/colors';
import { ITheme } from './type';
export const THEME_BASIC = 'theme_basic';
export const ThemeBasic: ITheme = {
  name: THEME_BASIC,
  title: 'Basic',
  color: '#556cd6',
  data: {
    palette: {
      primary: {
        main: '#556cd6',
      },
      secondary: {
        main: '#19857b',
      },
      error: {
        main: red.A400,
      },
      background: {
        default: '#fff',
      },
    },
  }

}

