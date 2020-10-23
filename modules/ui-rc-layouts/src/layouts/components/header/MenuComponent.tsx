import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { MENU_ID, KEY_TRANSLATE } from '../../constants'
import ExitToApp from '@material-ui/icons/ExitToAppOutlined';
import VpnKey from '@material-ui/icons/VpnKey';
import Person from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import { Translate } from 'react-redux-i18n';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { defaultFont } from '../../../assets/css/material-dashboard-react';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        textField: {
            color: 'black',
            ...defaultFont
        }
    })
);
function MenuComponent(props: any) {
    const { isOpen = false, setOpen = () => null, anchorEl, username = '',
        setOpenDialogChangePassword = () => null, logOut = () => null,
    } = props;
    const classes: any = useStyles();
    const handleMenuClose = (event: React.MouseEvent<HTMLElement>) => {
        setOpen(event.currentTarget);
    };
    const handleClickChangePassword = () => {
        setOpenDialogChangePassword(true);
    }
    const handleLogOut = () => {
        logOut();
    }
    return (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={MENU_ID}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isOpen}
            onClose={handleMenuClose}
            style={{ top: '50px' }}
        >
            <MenuItem style={{ cursor: "inherit", height: '40px' }} tabIndex={-1}>
                <IconButton
                    aria-label="username"
                    color="inherit"
                    style={{ cursor: "inherit" }}
                    // tabIndex={-1}
                >
                    <Person />
                </IconButton>
                <p className={classes.textField}>{username}</p>
            </MenuItem>

            <MenuItem onClick={handleClickChangePassword} style={{ height: '40px' }}>
                <IconButton
                    aria-label="changpassword"
                    color="inherit"
                >
                    <VpnKey />
                </IconButton>
                <p className={classes.textField}><Translate value={`${KEY_TRANSLATE}.header.change_password`} /></p>
            </MenuItem>

            <MenuItem onClick={handleLogOut} style={{ height: '40px' }}>
                <IconButton
                    aria-label="logout"
                    color="inherit"
                >
                    <ExitToApp />
                </IconButton>
                <p className={classes.textField}><Translate value={`${KEY_TRANSLATE}.header.log_out`} /></p>
            </MenuItem>
        </Menu>
    )
}
export { MenuComponent }
export default MenuComponent;
