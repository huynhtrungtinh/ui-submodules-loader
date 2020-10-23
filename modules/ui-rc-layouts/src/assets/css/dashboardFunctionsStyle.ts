import {
  hexToRgb,
  blackColor,
  infoColor,
  whiteColor
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
    rowEmpty: {
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
      marginTop: '8px',
      position: 'relative',
      overflow: 'auto',
      height: 'calc(100vh - 8px)'
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
      padding: '8px',
      cursor: "pointer"
    },
    funItem: {
      top: 0,
      borderRadius: '12px 0px 12px 0px',
      position: "relative",
      backgroundColor: "white",
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
          ", 1)",
      }
      // height: 'calc(100% - 8px)',
    },
    title: {
      margin: 0,
      textTransform: "uppercase",
      background: "none",
      textOverflow: "ellipsis",
      overflow: "hidden",
      lineHeight: "1.4em",
      // height: "1.4em",
      WebkitLineClamp: 1,
      WebkitBoxOrient: "vertical",
      display: "-webkit-box",
      padding: '8px',
      width: 'calc(100% - 16px)',
      height: 'calc(100% - 16px)',
      color: theme.palette.primary.main,
      fontWeight: 400
    },
    boxWapper: {
      padding: '8px 0px 0px 0px',
      display: "flex",
      height: 'calc(100% - 8px)',
      // height: 26,
    },
    box1: {
      width: "70%",
      height: 26,
    },
    box2: {
      borderRadius: '12px 0px 12px 0px',
      width: "30%",
      height: 26,
      // background: theme.palette.primary.light,
      background: "linear-gradient(60deg, " + infoColor[0] + ", " + infoColor[2] + ")",
      color: whiteColor,
      display: 'flex',
      flexWrap: 'wrap',
      fontWeight: 'bold',
      fontSize: '1.25rem',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    box3: {
      width: "100%",
      height: 26,
    },
    titleSummary: {
      fontSize: '1rem',
      color: theme.palette.primary.main,
      fontWeight: 500
    },
    description: {
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
    panelContent: {
      maxHeight: '500px',
      overflow: 'auto'
    },
    iconUpdate:{
      marginLeft: '20px'
    },
    gridItemEmpty:{
      height: '50px'
    }
  })
)
export default dashboardRootStyle;

