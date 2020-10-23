import React from 'react';
import { isArray, isEmpty } from 'lodash';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import LocalPhone from '@material-ui/icons/LocalPhone';
import MailOutline from '@material-ui/icons/MailOutline';
import IconButton from '@material-ui/core/IconButton';
import { defaultFont } from '../../../assets/css/material-dashboard-react';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        list: {
            padding: 0
        },
        info: {
            padding: 0
        },
        listItemText1: {
            width: '100%',
            height: '100%',
            textAlign: 'center',
            borderRadius: '0.5em 0.5em 0  0',
            backgroundColor: theme.palette.primary.dark,
        },
        listItemText2: {
            width: '100%',
            textAlign: 'center',
            color: 'black'
        },
        title: {
            padding: 0,
            color: theme.palette.primary.contrastText,
        },
        titleText: {
            fontWeight: 'bold',
            fontSize: 'large'
        },
        divider: {
            marginTop: theme.spacing(0.5),
            marginBottom: theme.spacing(0.5),
        },
        item: {
            color: 'black',
            ...defaultFont
        }
    })
);

const ICONS: any = {
    "mail": <IconButton
        aria-label="mail"
        color="default"
        >
        <MailOutline />
    </IconButton>,
    "hotline": <IconButton
        aria-label="hotline"
        color="default"
        >
        <LocalPhone />
    </IconButton>
}
function ContactMenuComponent(props: any) {
    const classes: any = useStyles();
    const { isOpen = false, setOpen = () => null, anchorEl, datas = [] } = props;
    const handleMenuClose = (event: React.MouseEvent<HTMLElement>) => {
        setOpen(event.currentTarget);
    };
    const idPopover = isOpen ? 'popover-contact' : undefined;
    return (
        <Popover
            id={idPopover}
            open={isOpen}
            anchorEl={anchorEl}
            onClose={handleMenuClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
        >
            <List component="nav" aria-label="list-contact" className={classes.list}>
                {
                    datas.map((items: any, indexDatas: any) => {
                        return Object.keys(items).map((key: any, indexItems: any) => {
                            const item = items[key];
                            if (key === "title" && !isEmpty(item)) {
                                return (
                                    <ListItem key={`${indexDatas}${indexItems}-${key}`} className={classes.title}>
                                        <div className={classes.listItemText1}><ListItemText primary={item} className={classes.titleText} /></div>
                                    </ListItem>
                                )
                            } else if (!isEmpty(item) && isArray(item)) {
                                const icon = ICONS[key];
                                return item.map((i: any, indexItem: any) => {
                                    return (
                                        <ListItem key={`${indexDatas}${indexItems}${indexItem}-${key}`} className={classes.info}>
                                            <div className={classes.listItemText2}>
                                                <FormControlLabel
                                                    control={icon}
                                                    label={<span className={classes.item}>{i}</span>}
                                                />
                                            </div>
                                        </ListItem>
                                    )
                                })
                            }
                            return null;
                        })
                    })
                }
            </List>
        </Popover>
    )
}
export { ContactMenuComponent }
export default ContactMenuComponent;
