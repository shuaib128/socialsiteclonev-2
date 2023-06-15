import React from 'react'
import Box from '@mui/material/Box';
import { SecondBGColor } from '../../Util/Colors/Colors';
import { Link } from 'react-router-dom';

const SignUpInHeader = () => {
    return (
        <Box
            sx={{
                padding: "0.5rem 0rem",
                backgroundColor: SecondBGColor
            }}
        >
            <Box sx={{ width: "fit-content", margin: "0 auto" }}>
                <Link to="/">
                    <img
                        src="/Images/logo.svg"
                        alt="logo"
                        style={{
                            display: "block",
                            margin: "auto",
                            width: "48px",
                            height: "48px"
                        }}
                    />
                </Link>
            </Box>
        </Box>
    )
}

export default SignUpInHeader