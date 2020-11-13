import CircularProgress from '@material-ui/core/CircularProgress';
import IconButton from '@material-ui/core/IconButton';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import Phone from '@material-ui/icons/Phone';
import clsx from 'clsx';
import React from 'react';
import {CONTACT_MENU_ID, MENU_ID, MOBILE_MENU_ID} from '../../constants';
import {ContactMenuContainers, LeftMenuContainers, MenuContainers, MobileMenuContainers} from '../../containers';
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
            height: 'calc(100% - 4px)',
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            display: 'flex'
        },
        menuButton: {
            color: theme.palette.primary.contrastText,
            marginLeft: 4
        },
        text: {
            color: theme.palette.primary.contrastText,
        },
        breadcrumbs: {
            flexGrow: 1
        },
        padding: {
            padding: 10
        }
    }),
);

function HeaderComponent(props: any) {
    const {
        width,
        setBreakpoints = () => null,
        setOpenMenuProfile = () => null,
        setOpenContactMenu = () => null,
        setOpenMobileMenu = () => null,
        setOpenLeftMenu = () => null,
        breakpoint = "lg",
        displayName = "",
        loading = 0
    } = props;
    const classes = useStyles();
    React.useEffect(() => {
        setBreakpoints(width);
    }, [width])
    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        event.persist();
        setOpenMenuProfile(event, true);
    };
    const handleContactMenu = (event: React.MouseEvent<HTMLElement>) => {
        event.persist();
        setOpenContactMenu(event, true);
    };
    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        event.persist();
        setOpenMobileMenu(event, true);
    };
    const handleIconHome = (event: React.MouseEvent<HTMLElement>) => {
        event.persist();
        setOpenLeftMenu(true);
    };
    return (
        <div className={clsx(classes.root)}>
            <div>
                <IconButton
                    className={clsx(classes.menuButton, classes.padding)}
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleIconHome}
                >
                    <MenuIcon />
                </IconButton>

                {"DEV ENV"}
            </div>

            <div className={classes.breadcrumbs} >
                {/* {
                            isViewBreadcrumbs &&
                            <BreadcrumbsContainers />
                        } */}
            </div>

            {
                (breakpoint !== 'sm' && breakpoint !== 'xs') &&
                <div>

                    {
                        loading !== 0 &&
                        <IconButton className={classes.padding} >
                            <CircularProgress
                                size={24}
                                color="secondary"

                            />
                        </IconButton>
                    }

                    <IconButton
                        // aria-label="contact menu"
                        aria-controls={CONTACT_MENU_ID}
                        aria-haspopup="true"
                        onClick={handleContactMenu}
                        color="inherit"
                        className={classes.padding}
                    >
                        <Phone />
                    </IconButton>

                    <IconButton
                        // aria-label="account of current user"
                        aria-controls={MENU_ID}
                        aria-haspopup="true"
                        onClick={handleProfileMenuOpen}
                        color="inherit"
                        className={classes.padding}
                    >
                        <AccountCircle />
                    </IconButton>
                    <span style={{cursor: "pointer", marginRight: 8}} onClick={handleProfileMenuOpen}>
                        {displayName.toUpperCase()}
                    </span>
                </div>
            }

            {
                (breakpoint === 'sm' || breakpoint === 'xs') ?
                    <>
                        <IconButton
                            aria-label="show more"
                            aria-controls={MOBILE_MENU_ID}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                            className={classes.padding}
                        >
                            <MoreIcon />
                        </IconButton>
                        <MobileMenuContainers />
                    </>
                    :
                    <>
                        <MenuContainers />
                        <ContactMenuContainers />
                    </>
            }

            <LeftMenuContainers />

        </div>
    );
}
export default HeaderComponent;
export {HeaderComponent};

