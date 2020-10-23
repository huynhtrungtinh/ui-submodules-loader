import {PageDecorator, userLogin} from '@dgtx/ui-core';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
// import logoDIGI from './assets/Imgs/Logo_DIGI-TEXX_2015-e1530520430447.png';
import AccountCircle from '@material-ui/icons/AccountCircle';
import VpnKey from '@material-ui/icons/VpnKey';
import {isEmpty} from 'lodash';
import React, {useState} from 'react';

const IS_REQUIRED_MESSAGE = 'This field is required!';
function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{'Copyright © '}
			<Link color="inherit" href="https://digi-texx.com/">
				DIGI-TEXX
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

const useStyles = makeStyles((theme) => ({
	'@global': {
		body: {
			backgroundColor: theme.palette.common.white
		}
	},
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1)
	},
	submit: {
		margin: theme.spacing(3, 0, 2)
	},
	margin: {
		margin: theme.spacing(1)
	}
}));

const Signin: React.FC = (props: any) => {
	const classes = useStyles();
	const [state, setState] = useState({
		completed: 0,
		status_text: '',
		username: '',
		password: '',
		invalid_user_name: '',
		invalid_password: ''
	});
	const [validatorsUserName, setValidatorUserName] = useState(false);
	const [validatorsPassword, setValidatorPassword] = useState(false);
	const onChange = (name: string) => (event: any) => {
		if (name === 'username') {
			if (validatorsUserName && isRequired(event.currentTarget.value)) {
				setValidatorUserName(true);
			} else if (validatorsUserName) {
				setValidatorUserName(false);
			}
		} else {
			if (validatorsPassword && isRequired(event.currentTarget.value)) {
				setValidatorPassword(true);
			} else if (validatorsPassword) {
				setValidatorPassword(false);
			}
		}

		setState({...state, [name]: event.currentTarget.value});
	};
	const checkIsEmpty = (state: any) => {
		let result = true;
		if (isEmpty(state.username)) {
			result = false;
			setValidatorUserName(true);
		} else {
			setValidatorUserName(false);
		}
		if (isEmpty(state.password)) {
			result = false;
			setValidatorPassword(true);
		} else {
			setValidatorPassword(false);
		}

		return result;
	};

	const handleKeyPress = (event: any) => {
		if (event.charCode === 13) {
			doLogin();
		}
	};


	const isRequired = (value: any) => {
		if (isEmpty(value)) {
			return IS_REQUIRED_MESSAGE;
		}
		return false;
	};

	const doLogin = () => {
		const checkEmpty = checkIsEmpty(state);
		console.log('============doLogin================');
		console.log('checkEmpty: ', checkEmpty);
		console.log('state: ', state);
		console.log('props: ', props);
		console.log('====================================');
		if (checkEmpty) {
			props.userLogin(state, '', '/');
		}
	};

	return (
		<Container component="main" maxWidth="xs">
			<div className={classes.paper}>
				{/* <img src={logoDIGI} alt="logo" /> */}

				<form className={classes.form} noValidate>
					<div className={classes.margin}>
						<Grid container spacing={1} alignItems="center">
							<Grid item xs={1}>
								<AccountCircle />
							</Grid>
							<Grid item xs={11}>
								<TextField
									id="outlined-error-helper-text"
									variant="outlined"
									margin="dense"
									required
									fullWidth
									label="Username"
									name="email"
									value={state.username}
									onChange={onChange('username')}
									onKeyPress={handleKeyPress}
									autoComplete="email"
									autoFocus
									error={validatorsUserName}
									helperText={validatorsUserName ? 'Username is required!' : ''}
								/>
							</Grid>
						</Grid>
					</div>
					<div className={classes.margin}>
						<Grid container spacing={1} alignItems="center">
							<Grid item xs={1}>
								<VpnKey />
							</Grid>
							<Grid item xs={11}>
								<TextField
									variant="outlined"
									margin="dense"
									required
									fullWidth
									name="password"
									label="Password"
									type="password"
									id="password"
									onChange={onChange('password')}
									value={state.password}
									autoComplete="current-password"
									onKeyPress={handleKeyPress}
									error={validatorsPassword}
									helperText={validatorsPassword ? 'Password is required!' : ''}
								/>
							</Grid>
						</Grid>
					</div>

					{/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
					<div style={{width: '95%', margin: 'auto'}}>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							color="primary"
							className={classes.submit}
							onClick={(event: any) => {
								event.preventDefault();
								doLogin();
							}}
						>
							Sign In
						</Button>
					</div>

					{/* <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid> */}
				</form>
			</div>
			<Box mt={8}>
				<Copyright />
			</Box>
		</Container>
	);
};

export const SigninPage = PageDecorator({actions: {userLogin}})(Signin);
