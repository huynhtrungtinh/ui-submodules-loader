import {defaultThemes} from '@dgtx/ui-scl';
import {useWindowSize} from '@dgtx/ui-utils';
import CssBaseline from "@material-ui/core/CssBaseline";
import {createMuiTheme, makeStyles, MuiThemeProvider, Theme} from '@material-ui/core/styles';
import withWidth from '@material-ui/core/withWidth';
import React from 'react';
import {Backdrop} from '../../backdrop';
import {SigninExpirationTime} from '../../signin-expiration-time';
import {HEIGHT_HEADER, ID_HEADER} from '../constants';
import {HeaderContainers} from '../containers';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        width: '100%',
        height: '100%',
        overflow: 'hidden'
    },
    header: {
        height: `${HEIGHT_HEADER}px`,
        maxHeight: `${HEIGHT_HEADER}px`,
        minHeight: `${HEIGHT_HEADER}px`,
        width: '100%'
    },
    content: {
        width: '100%',
        height: (props: any) => `${props.heightContent - HEIGHT_HEADER}px`,
        maxHeight: (props: any) => `${props.heightContent - HEIGHT_HEADER}px`,
        minHeight: (props: any) => `${props.heightContent - HEIGHT_HEADER}px`,
        // backgroundColor: theme.palette.background.default,
        // color: theme.palette.background.default,
        // backgroundColor: commonCss.backgroundColorBody,
        overflow: 'auto'
    }
}));

interface IProps {
    children?: any;
    isRejectRoom?: any;
    socketIO?: any;
    getDataForReady?: Function;
    isReady?: Boolean;
    version?: string;
    match?: any;
    setBreakpoints?: Function;
    width?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    heightRoot?: number;
    widthRoot?: number;
}

const theme: any = createMuiTheme(defaultThemes);

function WapperComponent(props: IProps) {
    const {
        children, version,
        getDataForReady = () => null,
        setBreakpoints = () => null,
        isReady = false,
        width,
        heightRoot = 0,
        // widthRoot = 0,
        // isRejectRoom, socketIO,
    } = props;
    const size: any = useWindowSize();
    const classes = useStyles({heightRoot});

    React.useEffect(() => {
        getDataForReady({version})
    }, [])

    React.useEffect(() => {
        setBreakpoints(width, size);
    }, [width])
    return (
        <React.Fragment>
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                {
                    isReady &&
                    <div className={classes.root}>
                        <div className={classes.header} id={ID_HEADER}>
                            <HeaderContainers />
                        </div>
                        <div className={classes.content}>
                            {(children && children)}
                        </div>
                    </div>
                }
                <Backdrop />
                <SigninExpirationTime />
            </MuiThemeProvider>
        </React.Fragment>
    )
}

const WapperRootComponent: any = withWidth()(WapperComponent)
export default WapperRootComponent;
export {WapperRootComponent};

