import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import FormControlLabel from '@mui/material/FormControlLabel';
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { IOSSwitch } from './IOSwtch';
import ButtonOutLine from '../../../Components/Buttons/ButtonOutLine';
import { BackendLink } from '../../../Util/BackEndLink';
import { Link } from 'react-router-dom';
import { saveToken } from '../../../Util/Token/SaveToken';
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';

const Form = () => {
    /**Navigation */
    const navigate = useNavigate();

    /**Login Information */
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [LoadingData, setLoadingData] = useState(false)

    const [LogingError, setLogingError] = useState(false)
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    /**Send data to Login */
    const LoginSubmitHandler = () => {
        setLoadingData(true)

        var formdata = new FormData();
        formdata.append("username", Email);
        formdata.append("password", Password);

        var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };

        fetch(`${BackendLink}/api/users/user/token/`, requestOptions)
            .then((response) => {
                if (response.status === 200) {
                    return response.text();
                } else {
                    setLogingError(true)
                    setLoadingData(false);
                    throw new Error('Invalid response status');
                }
            })
            .then((result) => {
                saveToken(result).then(() => {
                    /**After saving token redirect to homepage */
                    navigate("/")
                });
                setLoadingData(false);
            })
            .catch((error) => {
                setLoadingData(false);
            });
    }

    return (
        <Box>
            <Typography
                textAlign="left"
                variant="h5"
                gutterBottom
            >
                Welcome Back
            </Typography>
            <Typography
                textAlign="left"
                variant="body2"
                gutterBottom
                fontWeight={500}
                color="#999"
            >
                Enter your credentials to sign in.
            </Typography>

            <Box>
                <TextField
                    type='text'
                    fullWidth
                    id="outlined-basic"
                    label="User Name"
                    variant="outlined"
                    size="medium"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    sx={{
                        mt: "15px"
                    }}
                />

                <Box
                    sx={{
                        marginTop: "20px"
                    }}
                >
                    <FormControl variant="outlined" fullWidth>
                        <InputLabel htmlFor="password-input">Password</InputLabel>
                        <OutlinedInput
                            required
                            id="password-input"
                            fullWidth
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </FormControl>
                </Box>
            </Box>

            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: "20px"
                }}
            >
                <FormControlLabel
                    control={<IOSSwitch sx={{ m: 1 }} />}
                    label="Remember me?"
                />

                <Typography
                    textAlign="left"
                    variant="body2"
                    gutterBottom
                    fontWeight={500}
                    color="#999"
                >
                    Forgot Password?
                </Typography>
            </Box>

            {LogingError ?
                <Alert severity="warning">Username or Password invalid!</Alert> :
                <span></span>
            }

            <Box>
                <ButtonOutLine
                    ButtonText="Log In"
                    ButtonHeight="45px"
                    OnClickHandler={LoginSubmitHandler}
                    varient="contained"
                    IsLoading={LoadingData}
                />
            </Box>

            <Link to="/signup">
                <Typography
                    mt="15px"
                    variant="body2"
                    gutterBottom
                    fontWeight={500}
                    color="#999"
                >
                    Dont have account?
                </Typography>
            </Link>
        </Box>
    )
}

export default Form