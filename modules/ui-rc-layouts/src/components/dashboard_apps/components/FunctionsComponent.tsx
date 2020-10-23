import React from 'react';
import Grid from '@material-ui/core/Grid';
import dashboardFunctionsStyle from '../../../assets/css/dashboardFunctionsStyle'
import {
    KEY_TRANSLATE_T_LAYOUTS,
    POSTFIX_ID_REF_FUNCTION
} from '../constants';
import { Translate } from 'react-redux-i18n'
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import Search from '@material-ui/icons/Search';
import { useHistory } from 'react-router-dom';
import Tooltip from "@material-ui/core/Tooltip";
import Divider from '@material-ui/core/Divider';

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
function FunctionsComponent(props: any) {
    let {
        setKeyboard = () => null,
        setRefContainer = () => null,
        getData = () => null,
        setSearch = () => null,
        setKeyUpSearch = () => null,
        functionsView = [],
        tabIndexIcon = {},
        searchKeyWords = "",
        breakpoints = "lg",
        projectId = null
    } = props;
    const refContainer: any = React.useRef();
    const history = useHistory();
    const [isFocus, setIsFocus] = React.useState(false);
    const classes: any = dashboardFunctionsStyle({ isFocus, selecting: isFocus });
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

    React.useEffect(() => {
        if (functionsView.length > 0) {
            setRefContainer(refContainer);
        }
    }, [refContainer, functionsView])

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

            <Grid item xs={12} className={classes.contentWapper} ref={refContainer}>
                <Grid container spacing={0} className={classes.panelContent} >
                    {
                        functionsView.length >= 0 && functionsView.map((f2: any, index: any) => {
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
                                <Grid item xs={12} sm={6} md={4} lg={3} xl={3} className={classes.gridItem} key={index}>
                                    <div className={classes.funItem}  id={`${f2.name}${POSTFIX_ID_REF_FUNCTION}`}>
                                        <a href={href} style={{ color: 'inherit' }}>
                                            <Tooltip
                                                title={<Translate value={f2.display_name} />}
                                                placement="top-start"
                                            >
                                                <h4 className={classes.title}>
                                                    {f2.display_name && f2.display_name.length > 17 ? `${f2.display_name.substr(0, 15).toUpperCase()}....` : f2.display_name.toUpperCase()}
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
                </Grid>
            </Grid>
        </Grid>
    );
}
export { FunctionsComponent }
export default (FunctionsComponent);
