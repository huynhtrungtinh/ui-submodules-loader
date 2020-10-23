import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import { Divider } from '@material-ui/core';
import ExitToApp from '@material-ui/icons/ExitToAppOutlined';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { getDataObject, userLogout } from '@dgtx/coreui';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));


export const UserIcon: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const userInfo = useSelector((state: object) => getDataObject('user.user', state), shallowEqual) || {};
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleMenu = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleLogout = () => {
    dispatch(userLogout())
  }
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        color="inherit"
        onClick={handleMenu}
      >
        <AccountCircle />
        {userInfo.username}
      </Button>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}> {userInfo.displayName}</MenuItem>
        <Divider />
        <Button
          aria-haspopup="true"
          color="inherit" aria-label="Logout" className={classes.margin} size="small"
          onClick={handleLogout}
        >
          <ExitToApp fontSize="small" />

        </Button>
      </Menu>
    </div>
  );
}