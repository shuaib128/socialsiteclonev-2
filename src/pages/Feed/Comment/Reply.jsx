import React from 'react'
import Box from '@mui/material/Box';
import CommentHeader from './CommentHeader';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from '@mui/material/Button';

const Reply = () => {
    return (
        <Box
            sx={{
                paddingLeft: "58px",
                paddingRight: "10px"
            }}
        >
            <CommentHeader />

            <Box
                className="comment-content"
                sx={{
                    paddingLeft: "73px",
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
                        // mt: "8px"
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
            </Box>
        </Box>
    )
}

export default Reply