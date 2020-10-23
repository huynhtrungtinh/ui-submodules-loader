import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import dashboardFunctionsStyle from '../../../assets/css/dashboardFunctionsStyle'
import {
    KEY_TRANSLATE_T_LAYOUTS,
} from '../constants';
import { Translate } from 'react-redux-i18n'
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import Search from '@material-ui/icons/Search';
import { useHistory } from 'react-router-dom';
import Tooltip from "@material-ui/core/Tooltip";

import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Divider from '@material-ui/core/Divider';
import { backgroundColorBody } from '../../../assets/css/material-dashboard-react';
import Update from "@material-ui/icons/Update";
import LinearProgress from '@material-ui/core/LinearProgress';

const Accordion = withStyles({
    root: {
        border: '1px solid rgba(0, 0, 0, .125)',
        boxShadow: 'none',
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
        '&$expanded': {
            margin: 'auto',
        },
    }
})(MuiAccordion);

const AccordionSummary = withStyles({
    root: {
        // backgroundColor: 'rgba(0, 0, 0, .03)',
        borderBottom: '1px solid rgba(0, 0, 0, .125)',
        // marginBottom: 10,
        minHeight: 56,
        '&$expanded': {
            minHeight: 56,
        },
        boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)'
    },
    content: {
        '&$expanded': {
            margin: '12px 0',
        },
    },
    expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
    root: {
        padding: 8,
        backgroundColor: backgroundColorBody
    },
}))(MuiAccordionDetails);
function getHrefByPathName(input: any) {
    const { baseHref, path, projectId, path_prefix } = input;
    let outPut: any = baseHref + "/" + path_prefix;
    path.split('/').forEach((p: any) => {
        if (p === ":projectId") {
            outPut = outPut + "/" + projectId;
        } else {
            outPut = outPut + "/" + p;
        }
    })
    return outPut;
}
let timeoutId: any = 0;
function FunctionsTasksComponent(props: any) {
    let {
        setKeyboard = () => null,
        getData = () => null,
        setSearch = () => null,
        setKeyUpSearch = () => null,
        setRefreshInstances = () => null,
        functionsView = [],
        tabIndexIcon = {},
        searchKeyWords = "",
        breakpoints = "lg",
        projectId = null,
        disabledRefresh = {}
    } = props;
    const history = useHistory();
    const [isFocus, setIsFocus] = React.useState(false);
    const classes: any = dashboardFunctionsStyle({ isFocus, selecting: isFocus });
    const [expanded, setExpanded] = React.useState<string | false>('panel0');
    const baseHref = window.location.origin;

    React.useEffect(() => {
        getData();
        try {
            window.addEventListener('keyup', handleKeyboard, true);
            console.log();
        } catch (e) { console.log('e: ', e) }
        return () => {
            window.removeEventListener("keyup", handleKeyboard, true);
        }
    }, [])

    const handleKeyboard = (event: any) => {
        setKeyboard(event, history)
    }
    const handleChangeSearch = (event: any) => {
        setSearch(event.target.value);
    }
    const handleClickSearch = () => {
        setKeyUpSearch({ keyCode: 13 });
    }
    const handleKeyUpSearch = (event: any) => {
        setKeyUpSearch(event);
    }
    const handleFocus = () => {
        if (breakpoints === "xs" || breakpoints === "sm") {
            setIsFocus(true);
        }
    }
    const handleBlur = () => {
        if (breakpoints === "xs" || breakpoints === "sm") {
            setIsFocus(false);
        }
    }

    const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, newExpanded: boolean) => {
        if (!timeoutId) {
            setExpanded(newExpanded ? panel : false);
        } else {
            clearTimeout(timeoutId); // doesn't matter if it's 0;
        }
    };

    const handleClickRefresh = (sourceName: string, panel: string, type: string) => () => {
        if (type === 'workflow') {
            if (!disabledRefresh[sourceName]) {
                setTimeout(() => {
                    setExpanded(panel);
                    setRefreshInstances(sourceName);
                    timeoutId = 0
                }, 100);
            }
        }
    }

    if (!projectId) {
        return <>projectId is undefined</>
    }
    return (
        <Grid container spacing={0} className={classes.container}>
            <Grid item xs={12} className={classes.toolbarWapper}>
                <Input
                    className={classes.search}
                    id="search"
                    type="search"
                    placeholder="Search"
                    inputProps={{ tabIndex: tabIndexIcon.text_field_search }}
                    value={searchKeyWords}
                    onChange={handleChangeSearch}
                    onKeyUp={handleKeyUpSearch}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                tabIndex={tabIndexIcon.search_icon}
                                onClick={handleClickSearch}
                            >
                                <Search />
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </Grid>

            <Grid item xs={12} className={classes.contentWapper} >
                {
                    functionsView.length >= 0 && functionsView.map((f: any, index: any) => {
                        return (
                            <Accordion square expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
                                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                    {
                                        f[0] &&
                                        <span className={classes.titleSummary}>
                                            {f[0].display_source_name.toUpperCase()}
                                        </span>
                                    }

                                    {
                                        f[0].type === 'workflow' &&
                                        !disabledRefresh[f[0].source_name] &&
                                        <>
                                            <Tooltip
                                                title={<Translate value={`${KEY_TRANSLATE_T_LAYOUTS}.dashboard_apps.update`} />}
                                                placement="top"
                                            >
                                                <IconButton
                                                    style={{ padding: 0, marginLeft: '10px' }}
                                                    tabIndex={tabIndexIcon.search_icon}
                                                    disabled={disabledRefresh[f[0].source_name] || false}
                                                    onClick={handleClickRefresh(f[0].source_name, `panel${index}`, f[0].type)}
                                                >
                                                    <Update color="primary" />
                                                </IconButton>
                                            </Tooltip>
                                        </>
                                    }
                                </AccordionSummary>

                                {
                                    f[0].type === 'workflow' && disabledRefresh[f[0].source_name] &&
                                    <div style={{ width: '100%', height: '20px' }}>
                                        <LinearProgress color="secondary" />
                                    </div>
                                }

                                <AccordionDetails>
                                    <Grid container spacing={0} className={classes.panelContent}>
                                        {
                                            f.map((f2: any) => {
                                                let href: any = `${baseHref}/${f2.path_prefix}/${f2.path}`;
                                                if (f2.type !== 'workflow' && f2.type !== 'config') {
                                                    href = getHrefByPathName({
                                                        baseHref,
                                                        path: f2.path,
                                                        projectId,
                                                        path_prefix: f2.path_prefix
                                                    })
                                                }
                                                return (
                                                    <Grid item xs={12} sm={6} md={4} lg={2} xl={2} className={classes.gridItem}>
                                                        <div className={classes.funItem}>
                                                            <a href={href} style={{ color: 'inherit' }}>
                                                                <Tooltip
                                                                    title={<Translate value={f2.display_name} />}
                                                                    placement="top-start"
                                                                >
                                                                    <h4 className={classes.title}>
                                                                        {f2.display_name.toUpperCase()}
                                                                        {/* {f2.display_name && f2.display_name.length > 17 ? `${f2.display_name.substr(0, 15).toUpperCase()}....` : f2.display_name.toUpperCase()} */}
                                                                    </h4>
                                                                </Tooltip>

                                                                <Divider variant="middle" />
                                                                {
                                                                    f2.type === 'workflow' ?
                                                                        <div className={classes.boxWapper}>
                                                                            <div className={classes.box2} >
                                                                                {f2.instances || 0}
                                                                            </div>
                                                                            <div className={classes.box1} >
                                                                                <span className={classes.description}>
                                                                                    <Translate value={`${KEY_TRANSLATE_T_LAYOUTS}.dashboard_root.get_more_info`} />
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                        :
                                                                        <div className={classes.boxWapper}>
                                                                            <div className={classes.box3} >
                                                                                <span className={classes.description}>
                                                                                    <Translate value={`${KEY_TRANSLATE_T_LAYOUTS}.dashboard_root.get_more_info`} />
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                }
                                                            </a>
                                                        </div>
                                                    </Grid>
                                                )
                                            })
                                        }
                                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.gridItemEmpty} />
                                    </Grid>
                                </AccordionDetails>
                            </Accordion>
                        )
                    })
                }
            </Grid>
        </Grid>
    );
}
export { FunctionsTasksComponent }
export default (FunctionsTasksComponent);
