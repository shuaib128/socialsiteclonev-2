import React from 'react'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { MainBGColor } from '../../Util/Colors/Colors';
import SignUpInHeader from '../../Components/Headers/SignUpInHeader';
import { motion } from "framer-motion"
import Form from './SignInForm/Form';

const SignInPage = () => {
    return (
        <Box sx={{ backgroundColor: MainBGColor }}>
            <SignUpInHeader />

            <Container
                maxWidth="xl"
                sx={{
                    height: ["100vh", "100vh", "100vh", "100vh"],
                    paddingTop: "40px",
                    paddingBottom: "40px",
                }}

            >
                <Box
                    sx={{
                        display: ["block", "block", "flex", "flex"],
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <motion.div
                        initial={{ opacity: 0, x: "-20px" }}
                        animate={{ opacity: 1, x: "0px" }}
                        transition={{ ease: "easeOut", duration: "0.3" }}
                    >
                        <Box sx={{
                            width: "620px",
                            display: ["none", "none", "block", "block"]
                        }}>
                            <img
                                style={{ width: "100%" }}
                                src='Images/login.svg'
                                alt='loginsvg'
                            />
                        </Box>
                    </motion.div>

                    <Box
                        sx={{
                            width: ["100%", "100%", "35%", "35%"]
                        }}
                    >
                        <motion.div
                            initial={{ opacity: 0, x: "20px" }}
                            animate={{ opacity: 1, x: "0px" }}
                            transition={{ ease: "easeOut", duration: "0.3" }}
                        >
                            <Form />
                        </motion.div>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default SignInPage