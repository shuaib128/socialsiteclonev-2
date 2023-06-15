import React from 'react'
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import LinkIcon from '@mui/icons-material/Link';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useWindowWidth } from '../../../Util/ScreenWidth/ScreenSize';

const PostFooter = () => {
    let screenWidth = useWindowWidth()

    return (
        <Box
            sx={{
                padding: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center"
                }}
            >
                {screenWidth > 500 ?
                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: "30px 30px 30px 30px 30px"
                        }}
                    >
                        <Avatar
                            sx={{
                                width: "35px",
                                height: "35px",
                                border: "4px solid white"
                            }}
                            alt="Remy Sharp"
                            src="https://friendkit.cssninja.io/assets/img/avatars/jenna.png"
                        />
                        <Avatar
                            sx={{
                                width: "35px",
                                height: "35px",
                                border: "4px solid white"
                            }}
                            alt="Remy Sharp"
                            src="https://friendkit.cssninja.io/assets/img/avatars/mike.jpg"
                        />
                        <Avatar
                            sx={{
                                width: "35px",
                                height: "35px",
                                border: "4px solid white"
                            }}
                            alt="Remy Sharp"
                            src="https://friendkit.cssninja.io/assets/img/avatars/daniel.jpg"
                        />
                        <Avatar
                            sx={{
                                width: "35px",
                                height: "35px",
                                border: "4px solid white"
                            }}
                            alt="Remy Sharp"
                            src="https://friendkit.cssninja.io/assets/img/avatars/elise.jpg"
                        />
                        <Avatar
                            sx={{
                                width: "35px",
                                height: "35px",
                                border: "4px solid white"
                            }}
                            alt="Remy Sharp"
                            src="https://friendkit.cssninja.io/assets/img/avatars/david.jpg"
                        />
                    </Box> :
                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: "30px 30px 30px 30px 30px"
                        }}
                    >
                        <Avatar
                            sx={{
                                width: "35px",
                                height: "35px",
                                border: "4px solid white"
                            }}
                            alt="Remy Sharp"
                            src="https://friendkit.cssninja.io/assets/img/avatars/jenna.png"
                        />
                        <Avatar
                            sx={{
                                width: "35px",
                                height: "35px",
                                border: "4px solid white"
                            }}
                            alt="Remy Sharp"
                            src="https://friendkit.cssninja.io/assets/img/avatars/mike.jpg"
                        />
                        <Avatar
                            sx={{
                                width: "35px",
                                height: "35px",
                                border: "4px solid white"
                            }}
                            alt="Remy Sharp"
                            src="https://friendkit.cssninja.io/assets/img/avatars/daniel.jpg"
                        />
                    </Box>
                }

                <Box
                    sx={{
                        ml: "23px",
                        display: ["none", "none", "none", "block"]
                    }}
                >
                    <Typography
                        variant="subtitle1"
                        gutterBottom
                        fontSize="15px"
                        color="black"
                        textAlign="left"
                        mb="0"
                        lineHeight="1.5"
                        fontWeight="700"
                    >
                        Gaelle, Rolf
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        gutterBottom
                        fontSize="14px"
                        color="#888da8"
                        textAlign="left"
                        mb="0"
                        lineHeight="1.5"
                    >
                        and 31 more liked this
                    </Typography>
                </Box>
            </Box>

            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "15px"
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center"
                    }}
                >
                    <FavoriteIcon
                        sx={{
                            color: "#888da8",
                            fontSize: "20px"
                        }}
                    />
                    <Typography
                        variant="subtitle1"
                        gutterBottom
                        fontSize="15px"
                        color="#888da8"
                        textAlign="left"
                        mb="1px"
                        ml="5px"
                        lineHeight="1.5"
                    >
                        33
                    </Typography>
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center"
                    }}
                >
                    <LinkIcon
                        sx={{
                            color: "#888da8",
                            fontSize: "20px"
                        }}
                    />
                    <Typography
                        variant="subtitle1"
                        gutterBottom
                        fontSize="15px"
                        color="#888da8"
                        textAlign="left"
                        mb="1px"
                        ml="5px"
                        lineHeight="1.5"
                    >
                        1
                    </Typography>
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center"
                    }}
                >
                    <ChatBubbleOutlineIcon
                        sx={{
                            color: "#888da8",
                            fontSize: "20px"
                        }}
                    />
                    <Typography
                        variant="subtitle1"
                        gutterBottom
                        fontSize="15px"
                        color="#888da8"
                        textAlign="left"
                        mb="1px"
                        ml="5px"
                        lineHeight="1.5"
                    >
                        9
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default PostFooter