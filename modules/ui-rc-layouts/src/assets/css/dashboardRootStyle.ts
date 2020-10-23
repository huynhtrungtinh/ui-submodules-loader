import {
  grayColor,
  hexToRgb,
} from "./material-dashboard-react";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
const dashboardRootStyle: any = makeStyles((theme: Theme): any =>
  createStyles({
    gridItem: {
      position: 'relative',
      padding: '10px 20px 10px 20px',
      maxHeight: '190px',
      height: '190px'
    },
    cardWapper: {
      position: 'relative',
      cursor: 'pointer',
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
    upArrowCardCategory: {
      width: "16px",
      height: "16px"
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
    cardTitleReverse: {
      flexDirection: "row-reverse",
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
