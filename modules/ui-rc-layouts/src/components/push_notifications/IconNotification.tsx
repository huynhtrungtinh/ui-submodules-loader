import * as React from 'react';
import NotificationsNone from '@material-ui/icons/NotificationsNone';
import NotificationsActive from '@material-ui/icons/NotificationsActive';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Popover from '@material-ui/core/Popover';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { PushNotificationsContext, IItemNotifications } from './store';
export interface IProvider {
    readonly state: object | any;
    readonly actions?: object | any;
}

const useStyles = makeStyles({
    listItemText1: {
        width: '180px'
    },
    listItemText2: {
        minWidth: '100px'
    },
    listItem: {
        display: 'flex'
    },
});

function IconNotification(props: any) {
    const { color = '#FFF', tabIndex = -1 } = props;
    const theme = useTheme();
    const classes: any = useStyles({ theme });
    const { state, actions }: IProvider = React.useContext(PushNotificationsContext);
    const { optionNotification, checked, isSubcribe, checkedDisabled,
        isMenuOpen = false, anchorEl
    } = state;
    const { setClickOption = () => null, getOptionNoti = () => null,
        setCheckedDisabled = () => null, setMenuOptionsOpen = () => null,
    } = actions;
    React.useEffect(() => {
        getOptionNoti({ state })
    }, []);
    const titleTooltip = isSubcribe ? "Notifications Showing" : "Notifications Not Showing";
    const colorIcon = isSubcribe ? 'secondary' : 'inherit';
    const idPopover = isMenuOpen ? 'popover-notifications' : undefined;

    const handleClosePopover = () => {
        setMenuOptionsOpen({ params: { isOpen: false }, state });
    };
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        const currentTarget = event.currentTarget;
        setMenuOptionsOpen({ params: { currentTarget, isOpen: true }, state });
    }
    const handleChangeOptions = (item: IItemNotifications) => () => {
        setClickOption({ params: { item }, state });
        setCheckedDisabled({ params: { item, isDisabled: true }, state });
        setTimeout(() => {
            setCheckedDisabled({ params: { item, isDisabled: false }, state });
        }, 1500);
    };

    return (
        <>
            <IconButton
                aria-label={titleTooltip}
                onClick={handleClick}
                color={colorIcon}
                tabIndex={tabIndex}
            >
                {isSubcribe ?
                    <NotificationsActive fontSize={'default'} />
                    :
                    <NotificationsNone htmlColor={color} fontSize={'default'} />
                }
            </IconButton>
            {
                optionNotification && optionNotification.length > 0 &&
                <Popover
                    id={idPopover}
                    open={isMenuOpen}
                    anchorEl={anchorEl}
                    onClose={handleClosePopover}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                >
                    <List component="nav" aria-label="list-options-notifications">
                        {
                            optionNotification.map((item: IItemNotifications) => {
                                const isChecked = (checked && checked[item.type] && checked[item.type].checked) || false
                                return (
                                    <ListItem key={item.type} className={classes.listItem}>
                                        <div className={classes.listItemText1}><ListItemText primary={item.name} /></div>
                                        <div className={classes.listItemText2}>
                                            <FormControlLabel
                                                control={<Switch checked={isChecked} onChange={handleChangeOptions(item)} />}
                                                label={isChecked ? 'On' : 'Off'}
                                                disabled={checkedDisabled[item.type]}
                                            />
                                        </div>
                                    </ListItem>
                                )
                            })
                        }
                    </List>
                </Popover>
            }
        </>
    )
}
export default IconNotification;
