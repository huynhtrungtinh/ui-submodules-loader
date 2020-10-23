import {useWindowSize} from '@dgtx/ui-utils';
import CssBaseline from "@material-ui/core/CssBaseline";
import {makeStyles} from '@material-ui/core/styles';
import {isEqual} from 'lodash';
import React from 'react';
import {backgroundColorBody} from '../../assets/css/material-dashboard-react';
import {AlertContainer, SimpleBackdropContainer} from '../../components';
import {DuplicateContainers, HeaderContainers} from '../containers';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        height: '100%',
        overflow: 'hidden'
    },
    header: {
        height: '64px',
        maxHeight: '64px',
        minHeight: '64px',
        width: '100%',
    },
    content: {
        width: '100%',
        height: (props: any) => `${props.heightContent}px`,
        maxHeight: (props: any) => `${props.heightContent}px`,
        minHeight: (props: any) => `${props.heightContent}px`,
        backgroundColor: backgroundColorBody,
        overflow: 'hidden'
    }
}));

interface IProps {
    children?: any;
    isRejectRoom?: any;
    socketIO?: any;
    getDataForReady?: Function;
    isReady?: Boolean;
    appName?: string;
    version?: string;
    match?: any;
}
const ID_HEADER = "header_root";
const sizeWindowDefault = {height: 0, width: 0}

function WapperRootComponent(props: IProps) {
    const {
        children, isRejectRoom, socketIO, appName, version,
        getDataForReady = () => null,
        isReady = false
    } = props;
    const size: any = useWindowSize();
    const [sizeWindow, setSizeWindow] = React.useState(sizeWindowDefault);
    const [heightContent, setHeightContent] = React.useState(0);
    const classes = useStyles({heightContent});

    React.useEffect(() => {
        getDataForReady({appName, version})
    }, [])

    React.useLayoutEffect(() => {
        if (!isEqual(sizeWindow.height, size.height)) {
            setSizeWindow(size);
            setHeightContent(size.height - 64);
        }
    }, [size])

    return (
        <React.Fragment>
            <CssBaseline />
            {
                isReady &&
                <div className={classes.root}>
                    <div className={classes.header} id={ID_HEADER}>
                        <HeaderContainers />
                    </div>
                    <div className={classes.content}>
                        {isRejectRoom && !socketIO.reconnect ? <DuplicateContainers /> : (children && children)}
                    </div>
                </div>
            }
            <SimpleBackdropContainer />
            <AlertContainer />
        </React.Fragment>
    )
}
export default WapperRootComponent;
