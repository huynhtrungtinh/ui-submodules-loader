import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Translate } from 'react-redux-i18n';
import { KEY_TRANSLATE, DEFAULT_ITEM } from '../constants';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import VpnKey from '@material-ui/icons/VpnKey';
import IconButton from '@material-ui/core/IconButton';
import { DialogSuccessdContainers } from '../containers';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            background: 'linear-gradient(45deg, #ffffff 30%, #f2f2f2 90%)',
            boxShadow: '0 3px 5px 2px rgba(242, 242, 242, .3)',
            border: 0,
            fontWeight: 'bold',
            position: "relative",
            opacity: 1,
            filter: "alpha(opacity=10)",
            padding: theme.spacing(2),
            textAlign: 'center',
            width: '100%'

        },
        dialog: {
            width: '100%'
        },
        textField: {
            marginBottom: '16px'
        },
        buttonCancel: {
            marginRight: '10px',
            width: '200px'
        },
        buttonSubmit:{
            width: '200px'
        }
    }),
);

function WapperRootComponent(props: any) {
    const classes: any = useStyles();
    const {
        password_current = { ...DEFAULT_ITEM },
        password_new = { ...DEFAULT_ITEM },
        password_confirm = { ...DEFAULT_ITEM },
        isOpen = false,
        setOpen = () => null,
        errorMessage = null,
        setShowText = () => null,
        setMofify = () => null,
        setSubmit = () => null,
    } = props;

    const handleClose = () => {
        setOpen();
    };

    const handleChange = (event: any) => {
        const { name, value } = event.target;
        setMofify(name, value);
    };

    const handleKeyDown = () => {

    };

    const handleShowText = (fieldKey: any) => (event: any) => {
        setShowText(fieldKey)
    };

    const handleSubmit = () => {
        setSubmit();
    };

    return (
        <Dialog
            open={isOpen}
            // onClose={handleClose}
            // maxWidth={'md'}
            aria-labelledby="alert-change-password-dialog-title"
            aria-describedby="alert-change-password-dialog-description"
            className={classes.dialog}
        >
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={0}
                className={classes.dialog}
            >
                <Grid item xs={12} className={classes.container}>
                    <Hidden only={["sm", "xs"]}>
                        <Typography gutterBottom variant="h3">
                            {<Translate value={`${KEY_TRANSLATE}.title`} />}
                        </Typography>
                    </Hidden>

                    <Hidden only={["xl", "lg", "md"]}>
                        <Typography gutterBottom variant="h4">
                            {<Translate value={`${KEY_TRANSLATE}.title`} />}
                        </Typography>
                    </Hidden>

                    <Typography gutterBottom variant="h5"
                        style={{ color: 'red', height: '40px' }}
                    >
                        {errorMessage && errorMessage}
                    </Typography>

                    <TextField
                        className={classes.textField}
                        fullWidth={true}
                        id='password_current'
                        name='password_current'
                        type={password_current.show_text ? 'text' : 'password'}
                        label={<Translate value={`${KEY_TRANSLATE}.password_current`} />}
                        value={password_current.value}
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end" >
                                    <IconButton
                                        aria-label="Toggle password_current visibility"
                                        onClick={handleShowText('password_current')}
                                        tabIndex={-1}
                                    >
                                        {password_current.show_text ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                            startAdornment: (<InputAdornment position="start"><VpnKey /></InputAdornment>),
                        }}
                        autoFocus={true}
                        helperText={password_current.errorMessage}
                        error={password_current.errorMessage.length > 0 ? true : false}
                    />

                    <TextField
                        className={classes.textField}
                        fullWidth={true}
                        id='password_new'
                        name='password_new'
                        type={password_new.show_text ? 'text' : 'password'}
                        label={<Translate value={`${KEY_TRANSLATE}.password_new`} />}
                        value={password_new.value}
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end" >
                                    <IconButton
                                        aria-label="Toggle password_new visibility"
                                        onClick={handleShowText('password_new')}
                                        tabIndex={-1}
                                    >
                                        {password_new.show_text ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                            startAdornment: (<InputAdornment position="start"><VpnKey /></InputAdornment>),
                        }}
                        helperText={password_new.errorMessage}
                        error={password_new.errorMessage.length > 0 ? true : false}
                    />

                    <TextField
                        className={classes.textField}
                        fullWidth={true}
                        id='password_confirm'
                        name='password_confirm'
                        type={password_confirm.show_text ? 'text' : 'password'}
                        label={<Translate value={`${KEY_TRANSLATE}.password_confirm`} />}
                        value={password_confirm.value}
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end" >
                                    <IconButton
                                        aria-label="Toggle password_confirm visibility"
                                        onClick={handleShowText('password_confirm')}
                                        tabIndex={-1}
                                    >
                                        {password_confirm.show_text ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                            startAdornment: (<InputAdornment position="start"><VpnKey /></InputAdornment>),
                        }}
                        helperText={password_confirm.errorMessage}
                        error={password_confirm.errorMessage.length > 0 ? true : false}
                    />

                    <Button
                        className={classes.buttonCancel}
                        variant="contained"
                        onClick={handleClose}
                    >
                        <Translate value={`${KEY_TRANSLATE}.cancel`} />
                    </Button>
                    <Button
                        className={classes.buttonSubmit}
                        variant="contained"
                        color="primary"
                        onClick={handleSubmit}
                    >
                        <Translate value={`${KEY_TRANSLATE}.submit`} />
                    </Button>
                </Grid>
            </Grid>
            <DialogSuccessdContainers />
        </Dialog>
    );
}

export { WapperRootComponent }
export default WapperRootComponent;
