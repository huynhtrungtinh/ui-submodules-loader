import {redirect} from '@dgtx/ui-utils';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Icon from "@material-ui/core/Icon";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import AccountCircle from "@material-ui/icons/AccountCircle";
import AssignmentInd from "@material-ui/icons/AssignmentInd";
import Folder from "@material-ui/icons/Folder";
import FormatListNumbered from "@material-ui/icons/FormatListNumbered";
import Home from "@material-ui/icons/Home";
import InsertChart from "@material-ui/icons/InsertChart";
import Settings from "@material-ui/icons/Settings";
import clsx from 'clsx';
import React from 'react';


export const ICON: any = {
    "home": <Home />,
    "projects": <Folder />,
    "system": <AccountCircle />,
    "pim": <Settings />,
    "general-report": <InsertChart />,
    "project": <FormatListNumbered />,
    "function": <AssignmentInd />,
}
function getHref(path: string) {
    const baseHref = window.location.origin;
    return `${baseHref}${path}`;
}

const drawerWidth = 400;
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        drawerPaper: {
            border: "none",
            position: "fixed",
            top: "0",
            bottom: "0",
            left: "0",
            zIndex: 1,
            // backgroundColor: theme.palette.background.default,
            // backgroundColor: 'transparent',
            // ...boxShadow,
            width: drawerWidth,
            [theme.breakpoints.up("md")]: {
                width: drawerWidth,
                position: "fixed",
                height: "100%"
            }
        },
        logo: {
            position: "relative",
            padding: "15px 15px",
            zIndex: 4,
            textAlign: "center",
            "&:after": {
                content: '""',
                position: "absolute",
                bottom: "0",
                height: "1px",
                right: "15px",
                width: "calc(100% - 30px)",
            }
        },
        logoLink: {
            textTransform: "uppercase",
            zIndex: 5,
            padding: "5px",
            fontSize: "18px",
            textAlign: "left",
            lineHeight: "30px",
            textDecoration: "none",
            display: "inline-block",
        },
        version: {
            left: '25px',
            bottom: 0,
            position: 'absolute',
            fontSize: '11px',
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            fontWeight: 'bold',
            letterSpacing: '0.03333em'
        },
        sidebarWrapper: {
            width: drawerWidth,
            position: "relative",
            overflow: "auto",
            zIndex: 4,
            overflowScrolling: "touch"
        },
        blue: {
            color: theme.palette.common.white,
            backgroundColor: theme.palette.primary.main,
            // boxShadow:
            //     "0 12px 20px -10px rgba(" +
            //     hexToRgb(infoColor[0]) +
            //     ",.28), 0 4px 20px 0 rgba(" +
            //     hexToRgb(blackColor) +
            //     ",.12), 0 7px 8px -5px rgba(" +
            //     hexToRgb(infoColor[0]) +
            //     ",.2)",
            // "&:hover,&:focus": {
            //     boxShadow:
            //         "0 12px 20px -10px rgba(" +
            //         hexToRgb(infoColor[0]) +
            //         ",.28), 0 4px 20px 0 rgba(" +
            //         hexToRgb(blackColor) +
            //         ",.12), 0 7px 8px -5px rgba(" +
            //         hexToRgb(infoColor[0]) +
            //         ",.2)"
            // }
        },
        list: {
            width: drawerWidth,
            marginTop: "20px",
            paddingLeft: "0",
            paddingTop: "0",
            paddingBottom: "0",
            marginBottom: "0",
            listStyle: "none",
            position: "unset"
        },
        aTagStyleActive: {
            color: `${theme.palette.common.white} !important`
        },
        aTagStyle: {
            "&:hover,&:focus": {
                color: theme.palette.common.white
            }
        },
        itemLink: {
            width: '370px        ',
            transition: "all 300ms linear",
            margin: "10px 15px 0",
            borderRadius: "3px",
            position: "relative",
            display: "block",
            padding: "10px 15px",
            backgroundColor: "transparent",
            // ...defaultFont,
            "&:hover": {
                backgroundColor: theme.palette.primary.light,
                color: theme.palette.common.white
            }
        },
        itemIcon: {
            width: "24px",
            height: "30px",
            fontSize: "24px",
            lineHeight: "30px",
            float: "left",
            marginRight: "15px",
            textAlign: "center",
            verticalAlign: "middle",
            // color: theme.palette.primary.main
        },
        itemText: {
            margin: "0",
            lineHeight: "30px",
            fontSize: "14px",
        },
    }),
);

function LeftMenuComponent(props: any) {
    const {isOpen = false, routers = [], setOpen = () => null,
        version = 0, routeFocus = {}
    } = props;
    const classes = useStyles();

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
