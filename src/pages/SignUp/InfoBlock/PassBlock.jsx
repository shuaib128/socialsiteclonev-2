import React, { useState } from 'react'
import Box from '@mui/material/Box';
import ButtonOutLine from '../../../Components/Buttons/ButtonOutLine';
import { SecondBGColor } from '../../../Util/Colors/Colors';
import Typography from '@mui/material/Typography';
import OutlinedInput from '@mui/material/OutlinedInput';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Alert from '@mui/material/Alert';
import { motion } from "framer-motion"
import { validatePassword } from "../../../Util/Validate/Password"

const PassBlock = ({
    setBasicBlock,
    setImageBlock,
    setPasswordBlock,
    setFinalBlock,
    setBarProgress,
    setUserPassword,
    submitSignupHandler
}) => {

    const [ValidPassword, setValidPassword] = useState(true)
    const [ShowEmailExistsError, setShowEmailExistsError] = useState(false)
    const [showPassword, setShowPassword] = React.useState(false);
    const [IsSignedUp, setIsSignedUp] = useState(false)
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    /**Sent request to signup users */
    function NextButtonClickHandler() {
        setIsSignedUp(true)

        submitSignupHandler()
            .then(result => {
                result = JSON.parse(result)
                if (result.first_name) {
                    setIsSignedUp(false)
                    setShowEmailExistsError(false)
                    setBarProgress(100)

                    setBasicBlock(false)
                    setImageBlock(false)
                    setPasswordBlock(false)
                    setFinalBlock(true)
                } else {
                    setIsSignedUp(false)
                    setShowEmailExistsError(true)
                }
            })
            .catch(error => {
                // Handle error
                setIsSignedUp(false)
            });
    }

    function BackButtonClcikHandler() {
        setBarProgress(50)

        setBasicBlock(false)
        setImageBlock(true)
        setPasswordBlock(false)
        setFinalBlock(false)
    }

    return (
        <Box
            sx={{
                width: ["100%", "540px", "540px", "540px"],
                margin: "0 auto",
                height: "100vh"
            }}
        >
            <motion.div
                initial={{ opacity: 0, y: "20px" }}
                animate={{ opacity: 1, y: "0px" }}
                transition={{ ease: "easeOut", duration: "0.3" }}
            >
                <Typography
                    variant="h6"
                    gutterBottom
                    textAlign="center"
                    fontWeight="600"
                >
                    Secure your account.
                </Typography>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: "20px" }}
                animate={{ opacity: 1, x: "0px" }}
                transition={{ ease: "easeOut", duration: "0.3" }}
            >
                <Box
                    sx={{
                        bgcolor: SecondBGColor,
                        padding: "30px",
                        borderRadius: "8px",
                        border: "1px solid #e8e8e8",
                        marginTop: "30px"
                    }}
                >
                    <FormControl variant="outlined" fullWidth>
                        <InputLabel htmlFor="password-input">Password</InputLabel>
                        <OutlinedInput
                            required
                            error={!ValidPassword}
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
                            onChange={(e) => {
                                setUserPassword(e.target.value)
                                setValidPassword(validatePassword(e.target.value))
                            }}
                        />
                    </FormControl>
                </Box>

                {ShowEmailExistsError ?
                    <Alert
                        severity="error"
                        sx={{
                            marginTop: "10px",
                        }}
                    >
                        User Name already exists!
                    </Alert> :
                    <Box></Box>
                }

                <Box
                    sx={{
                        display: "flex",
                        gap: "10px",
                        justifyContent: "flex-end"
                    }}
                >
                    <Box>
                        <ButtonOutLine
                            ButtonText="Back"
                            ButtonHeight="40px"
                            OnClickHandler={BackButtonClcikHandler}
                        />
                    </Box>
                    <Box>
                        <ButtonOutLine
                            ButtonText="Next"
                            ButtonHeight="40px"
                            IsDesabled={!ValidPassword}
                            OnClickHandler={NextButtonClickHandler}
                            IsLoading={IsSignedUp}
                        />
                    </Box>
                </Box>
            </motion.div>
        </Box>
    )
}

export default PassBlock