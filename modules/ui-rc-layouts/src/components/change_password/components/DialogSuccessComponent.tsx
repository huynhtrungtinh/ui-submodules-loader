import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Translate } from 'react-redux-i18n';
import { KEY_TRANSLATE } from '../constants';

function DialogSuccessComponent(props: any) {
    const { isOpen = false, setLogOut = () => null } = props;

    const handleLogOut = () => {
        setLogOut();
    };

    return (
        <Dialog
            open={isOpen}
            aria-labelledby="alert-dialog-change-password-success-title"
            aria-describedby="alert-dialog-change-password-success-description"
        >
            <DialogTitle id="alert-dialog-title"><Translate value={`${KEY_TRANSLATE}.title_submit_success`} /></DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-change-password-success-description">
                    <Translate value={`${KEY_TRANSLATE}.content_submit_success`} />
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleLogOut} color="primary" autoFocus>
                    <Translate value={`${KEY_TRANSLATE}.logout`} />
                </Button>
            </DialogActions>
        </Dialog>
    );
}
export { DialogSuccessComponent }
export default DialogSuccessComponent;
