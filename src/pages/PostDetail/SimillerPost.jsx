import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

const SimillerPost = () => {
    return (
        <Box
            sx={{
                marginBottom: "30px",
                cursor: "pointer"
            }}
        >
            <Box
                sx={{
                    display: ["block", "flex", "flex", "flex"],
                    alignItems: "center"
                }}
            >
                <Avatar
                    sx={{
                        width: "35px",
                        height: "35px",
                    }}
                    alt="Remy Sharp"
                    src="https://friendkit.cssninja.io/assets/img/avatars/jenna.png"
                />

                <Box
                    sx={{
                        marginLeft: ["0px", "11px", "11px", "11px"],
                        marginTop: ["10px", "0px", "0px", "0px"]
                    }}
                >
                    <Typography
                        variant="subtitle1"
                        gutterBottom
                        fontSize=".9rem"
                        color="black"
                        textAlign="left"
                        mb="0"
                    >
                        Dan Walker
                    </Typography>
                </Box>
            </Box>

            <Box
                sx={{
                    marginTop: "10px"
                }}
            >
                <Typography
                    variant="subtitle1"
                    gutterBottom
                    fontSize="1.06rem"
                    color="black"
                    textAlign="left"
                    lineHeight="1.3"
                    mb="0"
                >
                    Beaches you want to discover and experiment in 2020
                </Typography>
            </Box>
        </Box>
    )
}

export default SimillerPost