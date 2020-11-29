import {makeStyles, Theme} from '@material-ui/core/styles';
import withWidth from '@material-ui/core/withWidth';
import React from 'react';
import {IRootDrawerLeft} from '../../layout';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        width: '100%',
        height: '100%',
        overflow: 'hidden'
    }
}));

interface IProps {
      match?: any;
    getDataForReady?: Function;
    isReady?: Boolean;
    width?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    heightRoot?: number;
    widthRoot?: number;
    datas?: IRootDrawerLeft[];
}


function WapperComponent(props: IProps) {
    const {
        getDataForReady = () => null,
        // isReady = false,
        // width,
        heightRoot = 0,
        datas = []
    } = props;
    // const size: any = useWindowSize();
    const classes = useStyles({heightRoot});
    React.useEffect(() => {
        getDataForReady()
    }, [])
    console.log('====================================');
    console.log('datas: ', datas);
    console.log('====================================');
    return (
            <div className={classes.root}>
                this is main page.
            </div>
    )
}

const WapperRootComponent: any = withWidth()(WapperComponent)
export default WapperRootComponent;
export {WapperRootComponent};

