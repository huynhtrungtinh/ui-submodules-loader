import {redirect} from '@dgtx/ui-utils';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Icon from "@material-ui/core/Icon";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
// import { useHistory } from 'react-router-dom';
// import { I18n } from 'react-redux-i18n';
// import { KEY_TRANSLATE } from '../../constants'
import clsx from 'clsx';
import React from 'react';
import sidebarStyle from "../../../assets/css/sidebarStyle";
import {ICON} from '../../../components';

function getHref(path: string) {
    const baseHref = window.location.origin;
    return `${baseHref}${path}`;
}

function LeftMenuComponent(props: any) {
    const {isOpen = false, routers = [], setOpen = () => null,
        version = 0, routeFocus = {}
    } = props;
    const classes = sidebarStyle();

    // const history = useHistory();
    const toggleDrawer = (event: React.KeyboardEvent | React.MouseEvent, ) => {
        if (event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
        ) {return;}
        setOpen();
    };

    const handleClickMenu = (route: any) => () => {
        // history.push(route.path);
        redirect(route.path)
        setOpen(false, route);
    }
    const handleClickHome = () => {
        const route = routers.filter((r: any) => r.app_name === 'home')[0];
        // history.push(route.path);
        redirect(route.path)
        setOpen(false, route);
    }
    const brand = (
        <div className={classes.logo} onClick={handleClickHome}>
            <div className={classes.logoLink}>
                <img width={'250px'} height="50px" src="/company_logo.png" alt="logo" />
            </div>
            <div className={classes.version}><i>{`v${version}`}</i></div>
        </div>
    );

    const links = (
        <div className={classes.sidebarWrapper}>
            <List className={classes.list}>
                {routers.map((route: any, index: any) => {
                    const listItemClasses = clsx({
                        [" " + classes["blue"]]: routeFocus.app_name === route.app_name
                    });
                    const aTagStyle = clsx({
                        [" " + classes["aTagStyle"]]: true,
                        [" " + classes["aTagStyleActive"]]: routeFocus.app_name === route.app_name
                    });
                    return (
                        <ListItem button className={classes.itemLink + listItemClasses} onClick={handleClickMenu(route)} id={index}>
                            <a href={getHref(route.path)} className={aTagStyle}>
                                <Icon className={classes.itemIcon} >
                                    {ICON[route.app_name]}
                                </Icon>
                                <ListItemText
                                    primary={route.display_name && route.display_name.length > 30 ? `${route.display_name.substr(0, 26).toUpperCase()}....` : route.display_name.toUpperCase()}
                                    className={clsx(classes.itemText)}
                                    disableTypography={true}
                                />
                            </a>
                        </ListItem>
                    );
                })}
            </List>
        </div>
    );

    return (
        <Drawer
            variant="temporary"
            anchor={"left"}
            open={isOpen}
            classes={{
                paper: clsx(classes.drawerPaper)
            }}
            onClose={toggleDrawer}
            ModalProps={{
                keepMounted: true // Better open performance on mobile.
            }}
        >
            {brand}
            <Divider variant="middle" />
            {links}
        </Drawer>
    )
}
export {LeftMenuComponent};
export default LeftMenuComponent;
