import React, {useState} from 'react';
import {Box, Button, Container, createTheme, TextField, ThemeProvider, Typography} from "@mui/material";
import {useDispatch} from "react-redux";
import {userSingIn} from "../store/actions/SignInActions";
import {useNavigate} from "react-router-dom";

const theme = createTheme();
const Login = () => {
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        if (data.get('login') === 'Admin' && data.get('password') === '12345') {
            dispatch(userSingIn({
                login: data.get('login'),
                password: data.get('password'),
            }));
            navigate('../profile',{ replace: true });
        } else
            setError('The username or password is incorrect');
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component='main' maxWidth='xs'>
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}
                >
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    {error && <Typography color={"red"} component="h1" variant="h5">
                        {error}
                    </Typography>}
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 1}}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="login"
                            label="Login"
                            name="login"
                            autoComplete="login"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{mt: 3, mb: 2}}
                        >
                            Sign In
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
};

export default Login;