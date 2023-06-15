import React, { useState } from 'react'
import Box from '@mui/material/Box';
import ButtonOutLine from '../../../Components/Buttons/ButtonOutLine';
import TextField from '@mui/material/TextField';
import { SecondBGColor } from '../../../Util/Colors/Colors';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import { validatePhoneNumber } from '../../../Util/Validate/PhoneNumber';
import { validateEmail } from '../../../Util/Validate/Email';
import { motion } from "framer-motion"

const BasicInfo = ({
    setBasicBlock,
    setImageBlock,
    setPasswordBlock,
    setFinalBlock,
    setBarProgress,
    UserName,
    UserFirstName,
    UserLastName,
    UserPhoneName,
    UserEmail,
    setUserName,
    setUserFirstName,
    setUserLastName,
    setUserPhoneName,
    setUserEmail
}) => {
    const [NumberValid, setNumberValid] = useState(true)
    const [EmailValid, setEmailValid] = useState(true)

    function NextButtonClickHandler() {
        setBarProgress(50)

        setBasicBlock(false)
        setImageBlock(true)
        setPasswordBlock(false)
        setFinalBlock(false)
    }

    function BackButtonClcikHandler() {
        setBarProgress(0)

        setBasicBlock(false)
        setImageBlock(false)
        setPasswordBlock(false)
        setFinalBlock(false)
    }

    const isFormComplete = UserFirstName !== "" &&
        UserLastName !== "" &&
        UserPhoneName !== "" &&
        UserEmail !== "" &&
        NumberValid &&
        EmailValid;

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
                    Tell us more about you.
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
                        <TextField
                            type='text'
                            value={UserName}
                            fullWidth
                            id="outlined-basic"
                            label="User Name"
                            variant="outlined"
                            size="medium"
                            required
                            onChange={(e) => setUserName(e.target.value)}
                        />
                        <TextField
                            type='text'
                            value={UserFirstName}
                            fullWidth
                            id="outlined-basic"
                            label="First Name"
                            variant="outlined"
                            size="medium"
                            required
                            onChange={(e) => setUserFirstName(e.target.value)}
                            sx={{
                                mt: "15px"
                            }}
                        />
                        <TextField
                            type='text'
                            value={UserLastName}
                            fullWidth
                            id="outlined-basic"
                            label="Last Name"
                            variant="outlined"
                            size="medium"
                            required
                            onChange={(e) => setUserLastName(e.target.value)}
                            sx={{
                                mt: "15px"
                            }}
                        />
                        <TextField
                            type="text"
                            value={UserPhoneName}
                            fullWidth
                            id="outlined-basic"
                            label="Phone Number"
                            variant="outlined"
                            size="medium"
                            required
                            error={!NumberValid}
                            onChange={(e) => {
                                setUserPhoneName(e.target.value)
                                setNumberValid(validatePhoneNumber(e.target.value))
                            }}
                            sx={{
                                mt: "15px"
                            }}
                        />
                        <TextField
                            type='email'
                            value={UserEmail}
                            fullWidth
                            id="outlined-basic"
                            label="Email"
                            variant="outlined"
                            size="medium"
                            required
                            error={!EmailValid}
                            onChange={(e) => {
                                setUserEmail(e.target.value)
                                setEmailValid(validateEmail(e.target.value))
                            }}
                            sx={{
                                mt: "15px"
                            }}
                        />
                    </FormControl>
                </Box>

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
                            IsDesabled={!isFormComplete}
                            OnClickHandler={NextButtonClickHandler}
                        />
                    </Box>
                </Box>
            </motion.div>
        </Box>
    )
}

export default BasicInfo