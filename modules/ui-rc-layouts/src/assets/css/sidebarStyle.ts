import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import {
  drawerWidth,
  boxShadow,
  primaryColor,
  primaryBoxShadow,
  infoColor,
  successColor,
  warningColor,
  dangerColor,
  whiteColor,
  blackColor,
  hexToRgb,
  defaultBoldFont,
  defaultFont
} from "./material-dashboard-react";
import { getBlueTheme, getATagStyle } from './common';

const sidebarStyle: any = makeStyles((theme: Theme): any =>
  createStyles({
    drawerPaper: {
      border: "none",
      position: "fixed",
      top: "0",
      bottom: "0",
      left: "0",
      zIndex: 1,
      backgroundColor: "white",
      ...boxShadow,
      width: drawerWidth,
      [theme.breakpoints.up("md")]: {
        width: drawerWidth,
        position: "fixed",
        height: "100%"
      }
    },
    logo: {
      position: "relative",
      padding: "15px 15px",
      zIndex: 4,
      textAlign: "center",
      "&:after": {
        content: '""',
        position: "absolute",
        bottom: "0",
        height: "1px",
        right: "15px",
        width: "calc(100% - 30px)",
      }
    },
    logoLink: {
      textTransform: "uppercase",
      zIndex: 5,
      padding: "5px",
      fontSize: "18px",
      textAlign: "left",
      lineHeight: "30px",
      textDecoration: "none",
      display: "inline-block",
    },
    version: {
      left: '25px',
      bottom: 0,
      position: 'absolute',
      fontSize: '11px',
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 'bold',
      letterSpacing: '0.03333em'
    },
    logoImage: {
      display: "inline-block",
      marginLeft: "10px",
      marginRight: "15px",
      padding: '4px'
    },
    img: {
      backgroundColor: 'white',
      top: "22px",
      position: "absolute",
      verticalAlign: "middle",
      border: "0"
    },
    background: {
      position: "absolute",
      zIndex: 1,
      height: "100%",
      width: "100%",
      display: "block",
      top: "0",
      left: "0",
      backgroundSize: "cover",
      backgroundPosition: "center center",
      "&:after": {
        position: "absolute",
        zIndex: "3",
        width: "100%",
        height: "100%",
        content: '""',
        display: "block",
        background: blackColor,
        opacity: ".8"
      }
    },
    list: {
      width: drawerWidth,
      marginTop: "20px",
      paddingLeft: "0",
      paddingTop: "0",
      paddingBottom: "0",
      marginBottom: "0",
      listStyle: "none",
      position: "unset"
    },
    item: {
      position: "relative",
      display: "block",
      textDecoration: "none",
      "&:hover,&:focus,&:visited,&": {
        color: whiteColor
      }
    },
    itemLink: {
      width: '370px        ',
      transition: "all 300ms linear",
      margin: "10px 15px 0",
      borderRadius: "3px",
      position: "relative",
      display: "block",
      padding: "10px 15px",
      backgroundColor: "transparent",
      ...defaultFont,
      "&:hover": {
        backgroundColor: infoColor[0],
        color: whiteColor
      }
    },
    itemIcon: {
      width: "24px",
      height: "30px",
      fontSize: "24px",
      lineHeight: "30px",
      float: "left",
      marginRight: "15px",
      textAlign: "center",
      verticalAlign: "middle",
      // color: theme.palette.primary.main
    },
    itemIconRTL: {
      marginRight: "3px",
      marginLeft: "15px",
      float: "right"
    },
    itemText: {
      margin: "0",
      lineHeight: "30px",
      fontSize: "14px",
    },
    itemTextRTL: {
      textAlign: "right"
    },
    whiteFont: {
      color: whiteColor
    },
    purple: {
      backgroundColor: primaryColor[0],
      ...primaryBoxShadow,
      "&:hover,&:focus": {
        backgroundColor: primaryColor[0],
        ...primaryBoxShadow
      }
    },
    blue: () => {
      return {
        ...defaultBoldFont,
        ...getBlueTheme(),
      }
    },
    aTagStyle: () => {
      return {
        ...getATagStyle(),
        color: blackColor
      }
    },
    aTagStyleActive: {
      color: `${whiteColor} !important`
    },
    green: {
      backgroundColor: successColor[0],
      boxShadow:
        "0 12px 20px -10px rgba(" +
        hexToRgb(successColor[0]) +
        ",.28), 0 4px 20px 0 rgba(" +
        hexToRgb(blackColor) +
        ",.12), 0 7px 8px -5px rgba(" +
        hexToRgb(successColor[0]) +
        ",.2)",
      "&:hover,&:focus": {
        backgroundColor: successColor[0],
        boxShadow:
          "0 12px 20px -10px rgba(" +
          hexToRgb(successColor[0]) +
          ",.28), 0 4px 20px 0 rgba(" +
          hexToRgb(blackColor) +
          ",.12), 0 7px 8px -5px rgba(" +
          hexToRgb(successColor[0]) +
          ",.2)"
      }
    },
    orange: {
      backgroundColor: warningColor[0],
      boxShadow:
        "0 12px 20px -10px rgba(" +
        hexToRgb(warningColor[0]) +
        ",.28), 0 4px 20px 0 rgba(" +
        hexToRgb(blackColor) +
        ",.12), 0 7px 8px -5px rgba(" +
        hexToRgb(warningColor[0]) +
        ",.2)",
      "&:hover,&:focus": {
        backgroundColor: warningColor[0],
        boxShadow:
          "0 12px 20px -10px rgba(" +
          hexToRgb(warningColor[0]) +
          ",.28), 0 4px 20px 0 rgba(" +
          hexToRgb(blackColor) +
          ",.12), 0 7px 8px -5px rgba(" +
          hexToRgb(warningColor[0]) +
          ",.2)"
      }
    },
    red: {
      backgroundColor: dangerColor[0],
      boxShadow:
        "0 12px 20px -10px rgba(" +
        hexToRgb(dangerColor[0]) +
        ",.28), 0 4px 20px 0 rgba(" +
        hexToRgb(blackColor) +
        ",.12), 0 7px 8px -5px rgba(" +
        hexToRgb(dangerColor[0]) +
        ",.2)",
      "&:hover,&:focus": {
        backgroundColor: dangerColor[0],
        boxShadow:
          "0 12px 20px -10px rgba(" +
          hexToRgb(dangerColor[0]) +
          ",.28), 0 4px 20px 0 rgba(" +
          hexToRgb(blackColor) +
          ",.12), 0 7px 8px -5px rgba(" +
          hexToRgb(dangerColor[0]) +
          ",.2)"
      }
    },
    sidebarWrapper: {
      width: drawerWidth,
      position: "relative",
      overflow: "auto",
      zIndex: 4,
      overflowScrolling: "touch"
    },
    activePro: {
      [theme.breakpoints.up("md")]: {
        position: "absolute",
        width: "100%",
        bottom: "13px"
      }
    }
  })
)

export default sidebarStyle;
