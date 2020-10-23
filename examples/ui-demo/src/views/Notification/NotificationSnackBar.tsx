import * as React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import NotificationSnackbarsEnhanced from "./NotificationSnackbarsEnhanced";

export default class NotificationSnackbars extends React.Component<any> {
  hidden = () => {
    const { hideNotification } = this.props;
    hideNotification(0)
  }
  render() {
    const { notifications = [], hideNotification } = this.props;
    const notification: any = notifications[0];
    if (notification) {
      return (
        <Snackbar
          style={{ zIndex: 9999 }}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          open={!!notification}
          onClose={this.hidden}
          autoHideDuration={notification && notification.duration}
          ContentProps={{
            "aria-describedby": "message-id"
          }}
        >
          <NotificationSnackbarsEnhanced
            notification={notification}
            // tslint:disable-next-line:jsx-no-lambda
            onClose={() => {
              hideNotification(0);
            }}
          />
        </Snackbar>
      );
    }
    return <></>;
  }
}
