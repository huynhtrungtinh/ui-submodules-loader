import { getDataObject, hideNotification } from "@dgtx/coreui";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import NotificationSnackbars from "./NotificationSnackBar";

export default connect((state:any) => {
    const notifications = getDataObject("core.notifications", state);
    return {
      notifications
    };
  },
  (dispatch: any) =>
    bindActionCreators(
      {
        hideNotification
      },
      dispatch
    )
)(NotificationSnackbars);
