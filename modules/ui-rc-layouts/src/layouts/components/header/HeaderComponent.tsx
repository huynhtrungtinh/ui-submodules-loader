import React from 'react';
import { fade, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import MoreIcon from '@material-ui/icons/MoreVert';
import MenuIcon from '@material-ui/icons/Menu';
import { MENU_ID, MOBILE_MENU_ID } from '../../constants';
import {
    MenuContainers,
    MobileMenuContainers,
    ContactMenuContainers,
    // DialogAnnouncementContainers,
    DrawerAnnouncementContainers,
    LeftMenuContainers,
    BreadcrumbsContainers
} from '../../containers';
import { PushNotifications } from '../../../components/push_notifications';
import clsx from 'clsx';
import Phone from '@material-ui/icons/Phone';
import withWidth from '@material-ui/core/withWidth';
import ChangePasswordPage from '../../../components/change_password';
import { getBlueTheme } from '../../../assets/css/common';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        grow: {
            flexGrow: 1
        },
        appBar: () => getBlueTheme(),
        maxHeigh: {
            minHeigh: '64px',
            maxHeigh: '64px',
            height: '64px',
        },
        account: {
            lineHeight: '70px'
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            display: 'none',
            [theme.breakpoints.up('sm')]: {
                display: 'block',
            },
        },
        search: {
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: fade(theme.palette.common.white, 0.15),
            '&:hover': {
                backgroundColor: fade(theme.palette.common.white, 0.25),
            },
            marginRight: theme.spacing(2),
            marginLeft: 0,
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                marginLeft: theme.spacing(3),
                width: 'auto',
            },
        },
        searchIcon: {
            padding: theme.spacing(0, 2),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        inputRoot: {
            color: 'inherit',
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '20ch',
            },
        },
        sectionDesktop: {
            display: 'none',
            [theme.breakpoints.up('md')]: {
                display: 'flex',
            },
        },
        sectionMobile: {
            display: 'flex',
            [theme.breakpoints.up('md')]: {
                display: 'none',
            },
        },
        homeName: {
            fontSize: '1.3rem'
        }
    }),
);

function Header(props: any) {
    const {
        width,
        setOpenMenuProfile = () => null,
        setOpenMobileMenu = () => null,
        setOpenContactMenu = () => null,
        setisOpenDrawerAnnouncement = () => null,
        setOpenLeftMenu = () => null,
        setBreakpoints = () => null,
        displayName = '',
        isViewBreadcrumbs = false,
        isViewAnnouncement = false,
        tabIndexIcon = {},
        appName = 'home'
    } = props;
    const classes = useStyles();

    React.useEffect(() => {
        setBreakpoints(width);
    }, [width])

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setOpenMenuProfile(event, true);
    };
    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setOpenMobileMenu(event, true);
    };
    const handleContactMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setOpenContactMenu(event, true);
    };
    const handleAnnouncement = () => {
        setisOpenDrawerAnnouncement(true);
    };
    const handleIconHome = () => {
        setOpenLeftMenu(true);
    };

    return (
        <div className={clsx(classes.grow, classes.maxHeigh)}>
            <AppBar color="inherit" position="fixed" className={clsx(classes.maxHeigh, classes.appBar)}>
                <Toolbar>
                    <IconButton
                        className={classes.menuButton}
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleIconHome}
                        tabIndex={tabIndexIcon.home_icon}
                    >
                        <MenuIcon />
                    </IconButton>
                    {appName === 'home' && <span className={classes.homeName}>HOME</span>}

                    <div className={classes.grow} >
                        {
                            isViewBreadcrumbs &&
                            <BreadcrumbsContainers />
                        }
                    </div>

                    {
                        width !== 'sm' && width !== 'xs' &&
                        <div className={classes.sectionDesktop}>
                            <PushNotifications tabIndex={tabIndexIcon.notification_icon} />

                            <IconButton
                                aria-label="account of current user"
                                aria-haspopup="true"
                                onClick={handleContactMenuOpen}
                                color="inherit"
                                tabIndex={tabIndexIcon.contact_icon}
                            >
                                <Phone />
                            </IconButton>

                            {
                                isViewAnnouncement &&
                                <IconButton color="inherit"
                                    onClick={handleAnnouncement}
                                    tabIndex={tabIndexIcon.announcement_icon}
                                >
                                    <Badge badgeContent={4} color="secondary">
                                        <MailIcon />
                                    </Badge>
                                </IconButton>
                            }


                            <div onClick={handleProfileMenuOpen} className={classes.account}>
                                <IconButton
                                    aria-label="account of current user"
                                    aria-controls={MENU_ID}
                                    aria-haspopup="true"
                                    onClick={handleProfileMenuOpen}
                                    color="inherit"
                                    tabIndex={tabIndexIcon.menu_profile_icon}
                                >
                                    <AccountCircle />
                                </IconButton>
                                <span style={{ cursor: "pointer" }}>
                                    {displayName.toUpperCase()}
                                </span>
                            </div>
                        </div>
                    }

                    {
                        width == 'sm' || width === 'xs' ?
                            <div className={classes.sectionMobile}>
                                <IconButton
                                    aria-label="show more"
                                    aria-controls={MOBILE_MENU_ID}
                                    aria-haspopup="true"
                                    onClick={handleMobileMenuOpen}
                                    color="inherit"
                                    tabIndex={tabIndexIcon.more_icon}
                                >
                                    <MoreIcon />
                                </IconButton>
                            </div>
                            : <></>
                    }

                </Toolbar>
            </AppBar>
            <ChangePasswordPage />
            <LeftMenuContainers />
            {
                isViewAnnouncement &&
                <DrawerAnnouncementContainers />
            }
            <ContactMenuContainers />
            {
                width === 'sm' || width === 'xs' ?
                    <MobileMenuContainers /> :
                    <MenuContainers />
            }
        </div>
    );
}
const HeaderComponent: any = withWidth()(Header)
export default HeaderComponent;
export { HeaderComponent }