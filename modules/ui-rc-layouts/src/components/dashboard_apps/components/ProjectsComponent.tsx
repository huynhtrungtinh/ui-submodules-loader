import React from 'react';
import { Card, CardHeader, CardFooter } from '../../card';
import Grid from '@material-ui/core/Grid';
import dashboardProjectsStyle from '../../../assets/css/dashboardProjectsStyle'
import {
    KEY_TRANSLATE_T_LAYOUTS,
    POSTFIX_ID_REF_PROJECT
} from '../constants';
import clsx from 'clsx';
import { Translate } from 'react-redux-i18n'
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import Search from '@material-ui/icons/Search';
import { useHistory } from 'react-router-dom';
import ViewModule from "@material-ui/icons/ViewModule";
import TableChart from "@material-ui/icons/TableChart";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { TableProjectsContainers } from '../containers';
import Tooltip from "@material-ui/core/Tooltip";

interface ITabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

function TabPanel(props: ITabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`tab-projects-${index}`}
            aria-labelledby={`tab-projects-${index}`}
            {...other}
        >
            {value === index && children}
        </div>
    );
}

function a11yProps(index: any) {
    return {
        id: `view-${index}`,
        'aria-controls': `view-${index}`,
    };
}

function getHref(path: string) {
    const baseHref = window.location.origin;
    return `${baseHref}${path}`;
}

function ProjectsComponent(props: any) {
    let {
        tabIndexNext,
        setKeyboard = () => null,
        setRefContainer = () => null,
        getData = () => null,
        setClick = () => null,
        setSearch = () => null,
        setKeyUpSearch = () => null,
        setView = () => null,
        projectsView = [],
        substrMax = 20,
        tabIndexIcon = {},
        searchKeyWords = "",
        cols = 0,
        isView = 0,
        breakpoints = "xl"
    } = props;
    const refContainer: any = React.useRef();
    const [isFocus, setIsFocus] = React.useState(false);
    const history = useHistory();
    const classes: any = dashboardProjectsStyle({ isFocus });

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

    React.useEffect(() => {
        setRefContainer(refContainer);
    }, [refContainer, projectsView])

    const handleKeyboard = (event: any) => {
        setKeyboard(event, history)
    }
    const handleClickItem = (project: any) => () => {
        setClick(project, history)
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
    const handleChangeView = (event: React.ChangeEvent<{}>, newValue: number) => {
        setView("isView", newValue);
    };
    const handleFocus = (event: any) => {
        if (breakpoints === "xs" || breakpoints === "sm") {
            setIsFocus(true);
        }
    }
    const handleBlur = (event: any) => {
        if (breakpoints === "xs" || breakpoints === "sm") {
            setIsFocus(false);
        }
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

                <Tabs
                    className={classes.view}
                    value={isView}
                    onChange={handleChangeView}
                    indicatorColor="primary"
                    textColor="primary"
                >
                    <Tab icon={<ViewModule />} {...a11yProps(0)} />
                    <Tab icon={<TableChart />} {...a11yProps(1)} />
                </Tabs>
            </Grid>
            {
                projectsView.length >= 0 &&
                <Grid item xs={12} className={classes.contentWapper} >
                    <TabPanel value={isView} index={0}>
                        <Grid container spacing={0} ref={refContainer}>
                            {
                                projectsView.map((project: any, index: any) => {
                                    return (
                                        <Grid item xs={12} sm={6} md={4} lg={3} xl={3} className={classes.gridItem} onClick={handleClickItem(project)}>
                                            <a href={getHref(`/projects/${project.id}`)}>
                                                <Card
                                                    className={classes.cardWapper}
                                                    tabIndex={tabIndexNext++}
                                                    id={`${project.id}${POSTFIX_ID_REF_PROJECT}`}
                                                >
                                                    <CardHeader color="info" stats icon>
                                                        <div className={clsx(classes.cardTitle, classes.cardTitleWapper1)}>
                                                            <span className={classes.cardTitleName}>
                                                                <Translate value={`${KEY_TRANSLATE_T_LAYOUTS}.dashboard_apps.project_name`} />
                                                            </span>
                                                            <Tooltip
                                                                title={project.name}
                                                                placement="top"
                                                            >
                                                                <span className={classes.cardTitleValue}>
                                                                    {project.name && project.name.length > 20 ? `${project.name.substr(0, substrMax).toUpperCase()}....` : project.name.toUpperCase()}
                                                                </span>
                                                            </Tooltip>
                                                        </div>

                                                        <div className={clsx(classes.cardTitle, classes.cardTitleWapper2)}>
                                                            <span className={classes.cardTitleName}>
                                                                <Translate value={`${KEY_TRANSLATE_T_LAYOUTS}.dashboard_apps.customer_name`} />
                                                            </span>

                                                            <Tooltip
                                                                title={project.customer_name}
                                                                placement="top"
                                                            >
                                                                <span className={classes.cardTitleValue}>
                                                                    {project.customer_name && project.customer_name.length > 20 ? `${project.customer_name.substr(0, substrMax).toUpperCase()}....` : project.customer_name.toUpperCase()}
                                                                </span>
                                                            </Tooltip>
                                                        </div>
                                                    </CardHeader>
                                                    <CardFooter stats>
                                                        <div className={classes.description}>
                                                            <Translate value={`${KEY_TRANSLATE_T_LAYOUTS}.dashboard_root.get_more_info`} />
                                                        </div>
                                                    </CardFooter>
                                                </Card>
                                            </a>
                                        </Grid>
                                    )
                                })
                            }
                            <Grid item xs={12} sm={6} md={4} lg={3} xl={3} style={{ height: `${100 * cols}px` }}>
                            </Grid>
                        </Grid>
                    </TabPanel>

                    <TabPanel value={isView} index={1}>
                        <TableProjectsContainers />
                    </TabPanel>
                </Grid>
            }
        </Grid>
    );
}
export { ProjectsComponent }
export default (ProjectsComponent);
