import {
  grayColor,
  hexToRgb,
  blackColor
} from "./material-dashboard-react";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
const dashboardRootStyle: any = makeStyles((theme: Theme): any =>
  createStyles({
    rootTable: {
      height: (props: any) => `${props.heightRoot - 16}px`,
      width: (props: any) => `${props.widthRoot - 16}px`,
      margin: '8px'
    },
    containerTable: {
      maxHeight: (props: any) => `${props.maxHeightTable - 16}px`,
    },
    rowEmpty:{
      height: (props: any) => `${props.heightBody - 16}px`,
    },
    container: {
      position: 'relative',
    },
    toolbarWapper: {
      position: 'relative',
      padding: '10px 20px 0px 25px',
      height: '64px',
      display: 'flex',
    },
    contentWapper: {
      position: 'relative',
      overflow: 'auto',
      height: '100vh'
    },
    toolbar: {
      position: 'absolute',
    },
    view: {
      position: 'absolute',
      height: '48px',
      right: '21px',
      opacity: (props: any) => { return props.isFocus ? 0 : "100%" },
      boxShadow:
        "0 0px 0px 0px rgba(" +
        hexToRgb(blackColor) +
        ", 0), 0 0px 0px 14px rgba(" +
        hexToRgb(blackColor) +
        ", 0), 12px 10px 8px 0px rgba(" +
        hexToRgb(blackColor) +
        ", 0.12)"
    },
    flexRow: {
      flexDirection: 'row'
    },
    toolbarTextTitle: {
      margin: '0px 10px 0px 32px'
    },
    search: {
      height: '48px',
      boxShadow:
        "0 0px 0px 0px rgba(" +
        hexToRgb(blackColor) +
        ", 0), 0 0px 0px 14px rgba(" +
        hexToRgb(blackColor) +
        ", 0), 12px 10px 8px 0px rgba(" +
        hexToRgb(blackColor) +
        ", 0.12)",
      width: "330px",
      background: 'white',
      [theme.breakpoints.down("xs")]: {
        width: (props: any) => { return props.isFocus ? "100%" : "169px" },
      },
      [theme.breakpoints.down("sm")]: {
        width: (props: any) => { return props.isFocus ? "350px" : "169px" },
      },
    },
    gridItem: {
      position: 'relative',
      padding: '0px 20px 0px 20px',
      maxHeight: '160px',
      height: '160px'
    },
    cardWapper: {
      position: 'relative',
      cursor: 'pointer',
      marginTop: '20px',
      marginBottom: '20px',
      // 0 0px 0px 0px rgba(68, 82, 167, 0.42), 0 0px 0px 0px rgba(48, 63, 159, 0.3), 11px 14px 7px 6px rgba(48, 63, 159, 0.4)
      "&:hover,&:focus": {
        background: "#FFFFFF",
        top: -6,
        transition: "0.3s",
        boxShadow:
          "0 0px 0px 0px rgba(" +
          hexToRgb(theme.palette.primary.light) +
          ", 0), 0 0px 0px 14px rgba(" +
          hexToRgb(theme.palette.primary.light) +
          ", 0), 13px 20px 8px 0px rgba(" +
          hexToRgb(theme.palette.primary.light) +
          ", 1)"
      }
    },
    cardTitle: {
      color: grayColor[2],
      minHeight: "auto",
      fontWeight: 500,
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      marginBottom: "3px",
      textDecoration: "none",
      fontSize: "17px",
      marginTop: '20px',
      lineHeight: "1",
      [theme.breakpoints.up("sm")]: {
        lineHeight: "1",
        fontSize: "14px",
      },
      [theme.breakpoints.up("md")]: {
        lineHeight: "1",
        fontSize: "14px",
      },
      // [theme.breakpoints.up("lg")]: {
      //   lineHeight: "1",
      //   fontSize: "14px",
      // },
    },
    cardTitleWapper1: {
      position: 'relative',
      height: '20px'
    },
    cardTitleWapper2: {
      position: 'relative'
    },
    cardTitleName: {
      position: 'absolute',
      top: 0,
      left: 0
    },
    cardTitleValue: {
      position: 'absolute',
      top: 0,
      right: 0
    },
    description: {
      width: "100%",
      textOverflow: "ellipsis",
      overflow: "hidden",
      WebkitLineClamp: 2,
      WebkitBoxOrient: "vertical",
      display: "-webkit-box",
      fontSize: "12px",
      lineHeight: "22px",
      padding: '0px 16px 0px 0px',
      opacity: '50%',
      textAlign: 'right',
      fontStyle: 'italic'
    },
    cardCategory: {
      color: grayColor[0],
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      paddingTop: "10px",
      marginBottom: "0"
    },
  })
)
export default dashboardRootStyle;
