import React from 'react'
import Box from '@mui/material/Box';
import { SecondBGColor, ThirdBGColor } from '../../../Util/Colors/Colors';
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';

const Progress = ({ BarProgress, setBarProgress }) => {
    return (
        <Box
            sx={{
                margin: "0 auto",
                position: "relative",
                backgroundColor: SecondBGColor,
                width: ["85vw", "85vw", "520px", "520px"],
                height: "20px",
            }}
        >
            <Box
                className="bar"
                sx={{
                    backgroundColor: "#eaeaea",
                    position: "absolute",
                    width: "100%",
                    height: "7px",
                    top: "50%",
                    transform: "translateY(-50%)",
                }}
            >
            </Box>

            <Box
                className="bar"
                sx={{
                    backgroundColor: ThirdBGColor,
                    position: "absolute",
                    width: `${BarProgress}%`,
                    height: "7px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    transition: "0.7s"
                }}
            >
            </Box>

            <Box
                sx={{
                    position: "absolute",
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-between",
                    top: "-13px"
                }}
            >
                <Box
                    sx={{
                        backgroundColor: SecondBGColor,
                        borderRadius: "100px",
                        width: "45px",
                        height: "45px",
                        border: `1px solid ${ThirdBGColor}`
                    }}
                >
                    <SentimentSatisfiedAltOutlinedIcon
                        style={{
                            color: ThirdBGColor,
                            margin: "0 auto",
                            display: "block",
                            marginTop: "10px"
                        }}
                    />
                </Box>
                <Box
                    sx={{
                        backgroundColor: SecondBGColor,
                        borderRadius: "100px",
                        width: "45px",
                        height: "45px",
                        border: `1px solid ${ThirdBGColor}`
                    }}
                >
                    <Person2OutlinedIcon
                        style={{
                            color: ThirdBGColor,
                            margin: "0 auto",
                            display: "block",
                            marginTop: "10px"
                        }}
                    />
                </Box>
                <Box
                    sx={{
                        backgroundColor: SecondBGColor,
                        borderRadius: "100px",
                        width: "45px",
                        height: "45px",
                        border: `1px solid ${ThirdBGColor}`
                    }}
                >
                    <ImageOutlinedIcon
                        style={{
                            color: ThirdBGColor,
                            margin: "0 auto",
                            display: "block",
                            marginTop: "10px"
                        }}
                    />
                </Box>
                <Box
                    sx={{
                        backgroundColor: SecondBGColor,
                        borderRadius: "100px",
                        width: "45px",
                        height: "45px",
                        border: `1px solid ${ThirdBGColor}`
                    }}
                >
                    <LockOutlinedIcon
                        style={{
                            color: ThirdBGColor,
                            margin: "0 auto",
                            display: "block",
                            marginTop: "10px"
                        }}
                    />
                </Box>
                <Box
                    sx={{
                        backgroundColor: SecondBGColor,
                        borderRadius: "100px",
                        width: "45px",
                        height: "45px",
                        border: `1px solid ${ThirdBGColor}`
                    }}
                >
                    <FlagOutlinedIcon
                        style={{
                            color: ThirdBGColor,
                            margin: "0 auto",
                            display: "block",
                            marginTop: "10px"
                        }}
                    />
                </Box>
            </Box>
        </Box>
    )
}

export default Progress