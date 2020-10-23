import * as React from "react";
import moment from "moment";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { Grid } from "@material-ui/core";
import { isEmpty } from 'lodash';
import { Translate } from 'react-redux-i18n'
import {
  KEY_TRANSLATE
} from '../../constants';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import ViewRichText from "../../../components/view_rich_text";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        overflow: 'hidden'
      },
      title: {
        background: theme.palette.primary.main,
        width: "100%",
        minWidth: 450,
        height: '64px',
        borderBottom: "1px solid #c8c7cc",
        textAlign: 'center'
      },
      search: {
        width: "100%",
        minWidth: 450,
        height: '40px',
        borderBottom: "1px solid #c8c7cc"
      },
      headerText: {
        fontWeight: "bold",
        width: "100%",
        color: theme.palette.primary.contrastText,
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1),
        lineHeight: '64px'
      },
      notiContainer: {
        maxWidth: 500,
        maxHeight: "100vh",
        overflow: "overlay"
      },
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

const formatDate = (data: any) => {
  return moment(data).format("DD/MM/YYYY HH:mm:ss");
  // return result;
};
const setColor = (type: any): string => {
  let outPut = "";
  switch (type) {
    case "info":
      outPut = "#4caf50";
      break;
    case "error":
      outPut = "#f44336";
      break;
    case "warning":
      outPut = "#ff9800";
      break;
    case "PROJECT":
      outPut = "#f44336";
      break;
    case "SYSTEM":
      outPut = "#06c";
      break;
    default:
      break;
  }
  return outPut;
};

const DrawerAnnouncementComponent = (props: any) => {
  const {
    updateDataDrawerAnnouncement = () => null,
    setisOpenDrawerAnnouncement = () => null,
    setClickAnnouncement = () => null,
    setIsOpenDialogDetailAnnouncement = () => null,
    setsearchKeyWordsAnnouncement = () => null,
    isOpenDrawerAnnouncement,
    isOpenDialogAnnouncement,
    dataDrawerAnnSearch,
    dataDetailAnnouncement,
    dataAnnouncementIsSeen = [],
    searchKeyWordsAnnouncement,
  } = props;
  const classes = useStyles();

  React.useEffect(() => {
    console.log('==========DrawerAnnouncementComponent=====');
    console.log('dataAnnouncementIsSeen: ', dataAnnouncementIsSeen);
    console.log('==========================================');
    if (!isEmpty(dataAnnouncementIsSeen)) {
      updateDataDrawerAnnouncement();
    }
  }, [dataAnnouncementIsSeen])

  const handleClickNoti = (row: any) => (event?: any) => {
    setClickAnnouncement(row)
  };
  const handleToggleDrawer = (type: Boolean) => () => {
    setisOpenDrawerAnnouncement(type);
  };
  const handleCloseDialog = () => {
    setIsOpenDialogDetailAnnouncement();
  };
  const handleOnSearch = (e: any) => {
    setsearchKeyWordsAnnouncement(e.target.value);
  };
  return (
    <React.Fragment>
      <SwipeableDrawer
        anchor="right"
        className={classes.root}
        open={isOpenDrawerAnnouncement}
        onClose={handleToggleDrawer(false)}
        onOpen={handleToggleDrawer(true)}
        SwipeAreaProps={
          {
            style: {
              width: 0
            }
          }
        }
      >
        <Grid container={true}>
          <Grid
            item={true}
            xs={12}
            className={classes.title}
          >
            <Typography variant="h4" gutterBottom={true} className={classes.headerText}>
              <Translate value={`${KEY_TRANSLATE}.header.announcement`} />
            </Typography>
          </Grid>
        </Grid>
        <Grid container={true}>
          <Grid
            item={true}
            xs={12}
            className={classes.search}
          >
            <InputBase
              id="search"
              type="search"
              value={searchKeyWordsAnnouncement}
              onChange={handleOnSearch}
              placeholder="Search"
              fullWidth={true}
            />
          </Grid>
        </Grid>
        <Grid
          container={true}
          className={classes.notiContainer}
        >
          {dataDrawerAnnSearch.length > 0 && dataDrawerAnnSearch.map((row: any, index: any) => (
            <Grid
              key={`noti-${index}`}
              item={true}
              xs={12}
              style={{
                padding: "8px 16px",
                borderBottom: "1px solid #c8c7cc",
                opacity: row.seen ? 0.5 : 1,
                fontWeight: row.seen ? "normal" : "bolder",
                borderRight: "5px solid " + setColor(row.type),
                cursor: "pointer",
                maxWidth: 485,
                backgroundColor: index % 2 === 0 ? ' #f2f2f2' : 'none'
              }}
              onClick={handleClickNoti(row)}
            >
              <Typography variant="h5" gutterBottom={true} >
                {row.subject ? row.subject.toUpperCase() : <Translate value={`${KEY_TRANSLATE}.header.no_subject`} />}
              </Typography>
              <Typography variant="subtitle2" gutterBottom={true} >
                {row.project_name}
              </Typography>
              <div
                style={{
                  margin: 0,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis"
                }}
                dangerouslySetInnerHTML={{ __html: row.content }}
              />
              <small style={{ float: "right", opacity: 0.6 }}>
                {formatDate(row.created_date)}
              </small>
            </Grid>
          ))}
        </Grid>
      </SwipeableDrawer>
      <Dialog
        open={isOpenDialogAnnouncement}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        maxWidth={'lg'}
        fullWidth={true}
      >
        <DialogTitle
          style={{
            background: setColor(dataDetailAnnouncement.type),
            minWidth: 500,
            padding: 16
          }}
          id="alert-dialog-slide-title"
        >
          <table>
            <tr>
              <td>
                <p className={classes.subject}>
                  <Translate value={`${KEY_TRANSLATE}.header.subject`} />
                </p>
              </td>
              <td>
                <p className={classes.subject}>
                  {dataDetailAnnouncement.subject
                    ? dataDetailAnnouncement.subject.toUpperCase()
                    : "No_Subject"}
                </p>
              </td>
            </tr>
            {dataDetailAnnouncement.project_name &&
              <tr>
                <td>
                  <p className={classes.projectName}>
                    <Translate value={`${KEY_TRANSLATE}.header.project_name`} />
                  </p>
                </td>
                <td>
                  <p className={classes.projectName}>
                    {dataDetailAnnouncement.project_name}
                  </p>
                </td>
              </tr>
            }

            {dataDetailAnnouncement.created_date &&
              <tr>
                <td>
                  <p className={classes.createdDate}>
                    <Translate value={`${KEY_TRANSLATE}.header.created_date`} />
                  </p>
                </td>
                <td>
                  <p className={classes.createdDate}>
                    {formatDate(dataDetailAnnouncement.created_date)}
                  </p>
                </td>
              </tr>
            }
          </table>
        </DialogTitle>
        <DialogContent style={{ padding: 16, opacity: 0.8 }}>
          <ViewRichText
            style={{ marginBottom: 0, opacity: 0.8 }}
            value={dataDetailAnnouncement.content}
          />
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            onClick={handleCloseDialog}
            color="primary"
          >
            <Translate value={`${KEY_TRANSLATE}.header.close`} />
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
}
export { DrawerAnnouncementComponent }
export default DrawerAnnouncementComponent;
