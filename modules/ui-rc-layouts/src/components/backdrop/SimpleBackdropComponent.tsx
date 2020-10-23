import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles, createStyles, Theme, withStyles } from '@material-ui/core/styles';
import { BACKGROUND_DEFAULT, ICON_COLOR_PROGRESS } from './constants';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        backdrop: {
            backgroundColor: (props: any) => props.background,
        },
        circularProgress: {
            color: (props: any) => props.iconColor
        }
    })
);
const BackdropCustom = withStyles(() => ({
    root: {
        zIndex: 1800
    }
}))(Backdrop);

export default function SimpleBackdropComponent(props: any) {
    const { isOpen = false, background = BACKGROUND_DEFAULT, iconColor = ICON_COLOR_PROGRESS } = props;
    const classes = useStyles({ background, iconColor });
    return (
        <BackdropCustom className={classes.backdrop} open={isOpen}>
            <CircularProgress className={classes.circularProgress} />
        </BackdropCustom>
    );
}