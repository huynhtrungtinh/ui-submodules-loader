import React from 'react';
import { Card, CardHeader, CardIcon, CardFooter } from '../../card';
import Grid from '@material-ui/core/Grid';
import dashboardRootStyle from '../../../assets/css/dashboardRootStyle'
import { ICON } from '../../icons';
import {
    KEY_TRANSLATE, POSTFIX_ID_REF_APP
} from '../constants';
import { Translate } from 'react-redux-i18n'
import Icon from "@material-ui/core/Icon";
import { useHistory } from 'react-router-dom';

function getHref(path: string) {
    const baseHref = window.location.origin;
    return `${baseHref}${path}`;
}

function WapperRootComponent(props: any) {
    const classes: any = dashboardRootStyle();
    let {
        tabIndexNext,
        routers = [],
        setKeyboard = () => null,
        setRefContainer = () => null,
        setClickItem = () => null
    } = props;
    const refContainer: any = React.useRef();
    const history = useHistory();

    React.useEffect(() => {
        setRefContainer(refContainer);
        if (routers && routers.length > 0 && tabIndexNext >= 0) {
            try {
                window.addEventListener('keyup', handleKeyboard, true);
                console.log();
            } catch (e) { console.log('e: ', e) }
        }
        return () => {
            window.removeEventListener("keyup", handleKeyboard, true);
        }
    }, [routers, refContainer, tabIndexNext])

    const handleKeyboard = (event: any) => {
        setKeyboard(event, history)
    }
    const handleClick = (route: any) => () => {
        history.push(route.path);
        setClickItem(false, route);
    }

    if (routers.length > 0 && tabIndexNext >= 0) {
        return (
            <Grid container spacing={0} ref={refContainer}>
                {
                    routers.map((route: any) => {
                        if (route.app_name === "home") {
                            return ("")
                        } else {
                            return (
                                <Grid item xs={12} sm={6} md={4} lg={3} xl={3} className={classes.gridItem} onClick={handleClick(route)}>
                                    <a href={getHref(route.path)}>
                                        <Card
                                            className={classes.cardWapper}
                                            tabIndex={route.tabIndex}
                                            id={`${route.tabIndex}${POSTFIX_ID_REF_APP}`}
                                        >
                                            <CardHeader color="info" stats icon>
                                                <CardIcon color="info">
                                                    {ICON[route.app_name] || <Icon>{route.display_name.substr(0, 1).toUpperCase()}</Icon>}
                                                </CardIcon>
                                                <p className={classes.cardTitle}>
                                                    {route.display_name && route.display_name.length > 30 ? `${route.display_name.substr(0, 20).toUpperCase()}....` : route.display_name.toUpperCase()}
                                                </p>
                                            </CardHeader>
                                            <CardFooter stats>
                                                <span className={classes.description}>
                                                    <Translate value={`${KEY_TRANSLATE}.dashboard_root.get_more_info`} />
                                                </span>
                                            </CardFooter>
                                        </Card>
                                    </a>
                                </Grid>
                            )
                        }
                    })
                }
            </Grid>
        );
    }
    return (<><Translate value={`${KEY_TRANSLATE}.dashboard_root.not_apps`} /></>)
}
export { WapperRootComponent }
export default (WapperRootComponent);
