import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ThirdBGColor } from '../../../Util/Colors/Colors';
import Settings from './Settings';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import ThunderstormOutlinedIcon from '@mui/icons-material/ThunderstormOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';

const Weather = () => {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];

    return (
        <Box
            sx={{
                backgroundImage: "url(Images/weather.svg)",
                backgroundSize: "cover !important",
                backgroundRepeat: "no-repeat !important",
                backgroundPosition: "center",
                width: "calc(100% - 32px)",
                marginBottom: "1.5rem",
                borderRadius: "10px",
                border: "1px solid #e8e8e8",
                backgroundColor: ThirdBGColor,
                padding: "16px",
            }}
        >
            <Settings />

            <Typography
                variant="h3"
                gutterBottom
                color="white"
                fontWeight="700"
            >
                71 &deg;
            </Typography>

            <WbSunnyOutlinedIcon
                sx={{
                    color: 'white',
                    fontSize: '50px'
                }}
            />

            <Typography
                variant="subtitle1"
                gutterBottom
                color="white"
                fontSize="1.4rem"
            >
                Sunny
            </Typography>

            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "20px",
                    width: "fit-content",
                    margin: "0 auto"
                }}
            >
                <Typography
                    variant="subtitle1"
                    gutterBottom
                    color="white"
                    fontSize=".95rem"
                >
                    Real Feel: 78&deg;
                </Typography>

                <Typography
                    variant="subtitle1"
                    gutterBottom
                    color="white"
                    fontSize=".95rem"
                >
                    Rain Chance: 5%
                </Typography>
            </Box>

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    background: "rgba(255,255,255,.2)",
                    padding: "15px",
                    margin: "20px 0px"
                }}
            >
                {daysOfWeek.map((day, index) => {
                    return (
                        <Box
                            key={index}
                        >
                            <Typography
                                variant="overline"
                                display="block"
                                gutterBottom
                                color="white"
                            >
                                {day}
                            </Typography>

                            <ThunderstormOutlinedIcon
                                sx={{
                                    color: 'white'
                                }}
                            />

                            <Typography
                                variant="overline"
                                gutterBottom
                                color="white"
                            >
                                78&deg;
                            </Typography>
                        </Box>
                    )
                })}
            </Box>

            <Typography
                variant="subtitle1"
                gutterBottom
                color="white"
                fontSize="1.3rem"
            >
                Sunday, 18th 2018
            </Typography>

            <Box
                sx={{
                    display: "flex",
                    width: "fit-content",
                    margin: "0 auto"
                }}
            >
                <FmdGoodOutlinedIcon 
                    sx={{
                        color: "white"
                    }}
                />
                <Typography
                    variant="subtitle1"
                    gutterBottom
                    color="white"
                    fontSize=".95rem"
                    sx={{
                        marginLeft: "5px"
                    }}
                >
                    Los Angeles, CA
                </Typography>
            </Box>
        </Box>
    )
}

export default Weather