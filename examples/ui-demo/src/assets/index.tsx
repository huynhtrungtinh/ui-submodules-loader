import { ThemeBasic } from './themes'
import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme'
import { IThemeOption } from './themes/type'

const themeRegister = [ThemeBasic]

export const getThemeOptions = (): IThemeOption[] => {
  return themeRegister.map((item) => {
    const themeOp: IThemeOption = {
      name: item.name,
      title: item.title,
      color: item.color,
    }
    return themeOp
  })
}

export const themeProvder = (name?: string): ThemeOptions => {
  if (name) {
    let theme = themeRegister.filter(item => item.name === name)[0]
    if (theme) {
      return theme.data
    }
  }
  return ThemeBasic.data;

}