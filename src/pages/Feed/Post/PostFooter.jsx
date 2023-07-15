import React from 'react'
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import LinkIcon from '@mui/icons-material/Link';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useWindowWidth } from '../../../Util/ScreenWidth/ScreenSize';
import { BackendLink } from '../../../Util/BackEndLink';

const PostFooter = (props) => {
    let screenWidth = useWindowWidth()
    let Likes = props.Likes

    return (
        <Box
            sx={{
                padding: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
            }}
        >
            {Likes.length >= 6 ?
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
                            {Likes.slice(0, 5).map((like, _) => {
                                return (
                                    <Avatar
                                        key={like.id}
                                        sx={{
                                            width: "35px",
                                            height: "35px",
                                            border: "4px solid white"
                                        }}
                                        alt="Remy Sharp"
                                        src={BackendLink + like.profile_picture}
                                    />
                                )
                            })}
                        </Box> :
                        <Box
                            sx={{
                                display: "grid",
                                gridTemplateColumns: "30px 30px 30px 30px 30px"
                            }}
                        >
                            {Likes.slice(0, 3).map((like, _) => {
                                return (
                                    <Avatar
                                        key={like.id}
                                        sx={{
                                            width: "35px",
                                            height: "35px",
                                            border: "4px solid white"
                                        }}
                                        alt="Remy Sharp"
                                        src={BackendLink + like.profile_picture}
                                    />
                                )
                            })}
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
                            {Likes[0] && Likes[0].firstname} {Likes[0] && Likes[0].lastname}
                            , {Likes[1] && Likes[1].firstname} {Likes[1] && Likes[1].lastname}
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
                            and {Likes.slice(5).length} more liked this
                        </Typography>
                    </Box>
                </Box> :
                <Box></Box>
            }

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
                        {Likes.length}
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
                        {props.Comments.length}
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default PostFooter