import * as React from "react";
import moment from "moment";
import Drawer from "@material-ui/core/Drawer";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import { green, red, orange } from "@material-ui/core/colors";
import { Translate } from 'react-redux-i18n';
import { KEY_TRANSLATE } from '../../constants';
import ViewRichText from "../../../components/view_rich_text";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export interface LayoutDefautProps {
  classes?: any,
  isPopupAnnouncement: boolean,
  announcement?: any,
  setIsHideAnnouncement?: any
}
const getType = (key: any) => {
  let result: any = green[500];
  switch (key) {
    case "warning":
      result = orange[500];
      break;
    case "error":
      result = red[500];
      break;
    default:
      break;
  }
  return result;
};
const formatDate = (data: any) => {
  return moment(data).format("DD/MM/YYYY HH:mm:ss");
  // return result;
};
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    subject: {
      margin: 0,
      color: "white",
      fontSize: '30px',
      fontWeight: 'bold',
      paddingBottom: '10px'
    },
    projectName: {
      margin: 0,
      color: "white",
      fontSize: '22px',
    },
    createdDate: {
      margin: 0,
      color: "white",
      fontSize: '15px',
    }
  })
)

const DialogAnnouncementComponent = (props: any) => {
  const { isPopupAnnouncement, announcement, setIsHideAnnouncement = () => null } = props;
  const classes = useStyles();
  const handleClose = () => {
    setIsHideAnnouncement();
  }
  if (announcement) {
    return (
      <Drawer anchor="top" open={isPopupAnnouncement}>
        <Card >
          <CardHeader
            style={{
              background: getType(announcement.type)
            }}
            title={
              <table>
                <tr>
                  <td>
                    <p className={classes.subject}>
                      <Translate value={`${KEY_TRANSLATE}.header.subject`} />
                    </p>
                  </td>
                  <td>
                    <p className={classes.subject}>
                      {announcement.subject
                        ? announcement.subject.toUpperCase()
                        : "No_Subject"}
                    </p>
                  </td>
                </tr>
                {announcement.project_name &&
                  <tr>
                    <td>
                      <p className={classes.projectName}>
                        <Translate value={`${KEY_TRANSLATE}.header.project_name`} />
                      </p>
                    </td>
                    <td>
                      <p className={classes.projectName}>
                        {announcement.project_name}
                      </p>
                    </td>
                  </tr>
                }

                {announcement.created_date &&
                  <tr>
                    <td>
                      <p className={classes.createdDate}>
                        <Translate value={`${KEY_TRANSLATE}.header.created_date`} />
                      </p>
                    </td>
                    <td>
                      <p className={classes.createdDate}>
                        {formatDate(announcement.created_date)}
                      </p>
                    </td>
                  </tr>
                }
              </table>
            }
          />
          <CardContent
            style={{
              maxHeight: "56vh",
              overflow: "auto"
            }}
          >
            <ViewRichText
              style={{ marginBottom: 0, opacity: 0.8 }}
              value={announcement.content}
            />
          </CardContent>
          <CardActions style={{ justifyContent: "flex-end" }}>
            <Button variant="contained" onClick={handleClose} color="primary">
              <Translate value={`${KEY_TRANSLATE}.close`} />
            </Button>
          </CardActions>
        </Card>
      </Drawer>
    );
  }
  else {
    return <div>{''}</div>
  }
}
export { DialogAnnouncementComponent }
export default DialogAnnouncementComponent;