import {makeStyles, Theme} from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        width: '100%',
        height: '100%',
    }
}));

interface IProps {
    children?: any;

}

function WapperComponent(props: IProps) {
    const {
    } = props;
    const classes = useStyles();

    return (
        <React.Fragment>
            this is example page.
        </React.Fragment>
    )
}

export default WapperComponent;
export {WapperComponent};

