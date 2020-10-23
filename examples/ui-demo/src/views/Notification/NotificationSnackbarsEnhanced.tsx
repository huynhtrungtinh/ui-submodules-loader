import {Paper} from "@material-ui/core";
import amber from "@material-ui/core/colors/amber";
import green from "@material-ui/core/colors/green";
import IconButton from "@material-ui/core/IconButton";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import {withStyles} from "@material-ui/core/styles";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CloseIcon from "@material-ui/icons/Close";
import ErrorIcon from "@material-ui/icons/Error";
import InfoIcon from "@material-ui/icons/Info";
import WarningIcon from "@material-ui/icons/Warning";
import clsx from "clsx";
import * as React from "react";
import {Translate} from "react-redux-i18n";

export interface LayoutDefautProps {
  classes?: any;
  className?: any;
  notification?: any;
  onClose?: any;
}
const variantIcon: any = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon
};
const styles: any = (theme: any) => {
  return {
    success: {
      backgroundColor: green[600]
    },
    error: {
      backgroundColor: theme.palette.error.dark
    },
    info: {
      backgroundColor: theme.palette.primary.dark
    },
    warning: {
      backgroundColor: amber[700]
    },
    icon: {
      fontSize: 20
    },
    iconVariant: {
      opacity: 0.9,
      marginRight: theme.spacing.unit
    },
    message: {
      display: "flex",
      alignItems: "center"
    },
    snackbar: {
      margin: theme.spacing.unit,
      padding: 16
    }
  };
};
class NotificationSnackbarsEnhanced extends React.Component<
  LayoutDefautProps,
  any
  > {
  render() {
    const {classes, className, notification = {}, onClose} = this.props;
    const Icon = variantIcon[notification.type];
    if (notification.contentType === "custom") {
      return (
        <Paper
          className={clsx(
            classes[notification.type],
            classes.snackbar,
            className
          )}
        >
          {notification.message}
        </Paper>
      );
    }
    return (
      <SnackbarContent
        className={clsx(classes[notification.type], className)}
        aria-describedby="client-snackbar"
        message={
          <span id="client-snackbar" className={classes.message}>
            <Icon className={clsx(classes.icon, classes.iconVariant)} />
            {notification.i18n ? (
              <Translate value={notification.message} />
            ) : (
                notification.message
              )}
          </span>
        }
        action={[
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            className={classes.close}
            onClick={onClose}
          >
            <CloseIcon className={classes.icon} />
          </IconButton>
        ]}
      />
    );
  }
}
export default withStyles(styles, {withTheme: true})(
  NotificationSnackbarsEnhanced
);
