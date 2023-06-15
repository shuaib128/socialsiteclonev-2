import React, { useState } from 'react'
import Box from '@mui/material/Box';
import CommentHeader from './CommentHeader';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from '@mui/material/Button';
import Reply from './Reply';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Comments = () => {
    const [OpenReply, setOpenReply] = useState(false)

    return (
        <Box
            sx={{
                marginBottom: "25px"
            }}
        >
            <CommentHeader />

            <Box
                className="comment-content"
                sx={{
                    paddingLeft: "58px",
                    paddingRight: "30px"
                }}
            >
                <Typography
                    variant="subtitle1"
                    gutterBottom
                    fontSize="17px"
                    color="black"
                    textAlign="left"
                    mb="0"
                    lineHeight="1.5"
                >
                    Yesterday with @Karen Miller and @Marvin Stemperd at
                    the #Rock'n'Rolla concert in LA. Was totally fantastic!
                    People were really excited about this one!
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
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
                            9
                        </Typography>
                    </Box>

                    <Button
                        variant="text"
                    >
                        reply
                    </Button>
                </Box>

                <Button
                    variant="text"
                    endIcon={<ExpandMoreIcon />}
                    sx={{
                        display: "flex"
                    }}
                    onClick={() => setOpenReply(!OpenReply)}
                >
                    5 replies
                </Button>
            </Box>

            {OpenReply ?
                <Box>
                    <Reply />
                    <Reply />
                    <Reply />
                    <Reply />
                </Box> :
                <Box></Box>
            }
        </Box>
    )
}

export default Comments