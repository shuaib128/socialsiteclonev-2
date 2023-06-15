import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { motion } from "framer-motion"
import ButtonOutLine from '../../../Components/Buttons/ButtonOutLine';
import { SecondBGColor } from '../../../Util/Colors/Colors';
import { useNavigate } from 'react-router-dom';

const FinallBlock = () => {
    const navigate = useNavigate();
    const LetMeInHandler = () => {
        navigate("/signin")
    }

    return (
        <Box
            sx={{
                width: ["100%", "540px", "640px", "640px"],
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
                        backgroundColor: SecondBGColor,
                        borderRadius: "8px",
                        border: "1px solid #e8e8e8",
                        padding: "30px"
                    }}
                >
                    <img
                        style={{
                            width: "120px",
                        }}
                        src='/Images/mailbox.svg'
                        alt='mailboximage'
                    />

                    <Typography
                        variant="subtitle1"
                        gutterBottom
                        fontWeight={500}
                    >
                        Congratz, you successfully created your account.
                    </Typography>

                    <Typography
                        variant="body2"
                        gutterBottom
                        fontWeight={500}
                        color="#999"
                    >
                        We just sent you a confirmation email.
                        PLease confirm <br></br> your account within 24 hours.
                    </Typography>

                    <Box
                        sx={{
                            width: ["100%", "300px", "300px", "300px"],
                            margin: "0 auto",
                            marginBottom: "10px",
                            marginTop: "20px"
                        }}
                    >
                        <ButtonOutLine
                            ButtonText="Let Me In"
                            ButtonHeight="40px"
                            OnClickHandler={LetMeInHandler}
                        />
                    </Box>
                </Box>
            </motion.div>
        </Box>
    )
}

export default FinallBlock