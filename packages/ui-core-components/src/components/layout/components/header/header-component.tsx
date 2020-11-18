import CircularProgress from '@material-ui/core/CircularProgress';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import {createStyles, fade, makeStyles, Theme} from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import Phone from '@material-ui/icons/Phone';
import SearchIcon from '@material-ui/icons/Search';
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
        },
        atag: {
            color: theme.palette.primary.contrastText,
            textDecoration: 'none',
        },
        search: {
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: fade(theme.palette.common.white, 0.15),
            '&:hover': {
                backgroundColor: fade(theme.palette.common.white, 0.25),
            },
            marginLeft: 0,
            [theme.breakpoints.up('sm')]: {
                marginLeft: theme.spacing(1),
                width: 'auto',
            },
            height: '30px',
            marginTop: '7px'
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
            height: '30px',
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                width: '12ch',
                '&:focus': {
                    width: '20ch',
                },
            },
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
        loading = 0,
        contactsData = []
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


                <a href="/" className={classes.atag}>{"DEV ENV"}</a>
            </div>

            <div className={classes.breadcrumbs} >
                {/* {
                            isViewBreadcrumbs &&
                            <BreadcrumbsContainers />
                        } */}
            </div>

            {
                (breakpoint !== 'sm' && breakpoint !== 'xs') &&
                <div style={{display: 'flex'}}>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{'aria-label': 'search'}}
                        />
                    </div>
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
                        aria-controls={CONTACT_MENU_ID}
                        aria-haspopup="true"
                        onClick={handleContactMenu}
                        color="inherit"
                        className={classes.padding}
                    >
                        <Phone />
                    </IconButton>

                    <IconButton
                        aria-controls={MENU_ID}
                        aria-haspopup="true"
                        onClick={handleProfileMenuOpen}
                        color="inherit"
                        className={classes.padding}
                    >
                        <AccountCircle />
                    </IconButton>

                    <span style={{cursor: "pointer", marginRight: 8, lineHeight: '44px'}} onClick={handleProfileMenuOpen}>
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
                        {
                            contactsData.length > 0 && <ContactMenuContainers />
                        }
                    </>
            }

            <LeftMenuContainers />

        </div>
    );
}
export default HeaderComponent;
export {HeaderComponent};

