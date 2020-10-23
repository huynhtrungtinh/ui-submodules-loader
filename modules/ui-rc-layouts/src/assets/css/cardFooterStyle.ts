import { grayColor, infoColor } from "./material-dashboard-react";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
const cardFooterStyle: any = makeStyles((theme: Theme): any =>
  createStyles({
    cardFooter: {
      padding: "0",
      paddingTop: "10px",
      margin: "0 15px 10px",
      borderRadius: "0",
      justifyContent: "space-between",
      alignItems: "center",
      display: "flex",
      backgroundColor: "transparent",
      border: "0"
    },
    cardFooterProfile: {
      marginTop: "-15px"
    },
    cardFooterPlain: {
      paddingLeft: "5px",
      paddingRight: "5px",
      backgroundColor: "transparent"
    },
    cardFooterStats: {
      borderTop: "2px solid " + infoColor[0],
      marginTop: "20px",
      "& svg": {
        position: "relative",
        top: "4px",
        marginRight: "3px",
        marginLeft: "3px",
        width: "16px",
        height: "16px"
      },
      "& .fab,& .fas,& .far,& .fal,& .material-icons": {
        fontSize: "16px",
        position: "relative",
        top: "4px",
        marginRight: "3px",
        marginLeft: "3px"
      }
    },
    cardFooterChart: {
      borderTop: "1px solid " + grayColor[10]
    }
  })
)

export default cardFooterStyle;
