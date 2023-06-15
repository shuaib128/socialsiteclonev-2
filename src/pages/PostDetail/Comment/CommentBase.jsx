import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { SecondBGColor } from '../../../Util/Colors/Colors';
import Comments from './Comments';
import CommentTextArea from './CommentTextArea';

const CommentBase = () => {
    return (
        <>
            <Box
                sx={{
                    overflowY: "scroll"
                }}
            >
                <Box
                    sx={{
                        height: "215px",
                        padding: "10px",
                        border: "1px solid #dedede",
                        borderRadius: "0.65rem",
                        marginTop: "50px",
                        marginBottom: "40px",
                        boxShadow: "-1px 3px 10px 0 rgba(0,0,0,.06)"
                    }}
                >
                    <CommentTextArea />
                </Box>

                <Box
                    sx={{
                        textAlign: "right",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        backgroundColor: SecondBGColor,
                    }}
                >
                    <Typography
                        variant="subtitle1"
                        gutterBottom
                        fontSize="16px"
                        color="black"
                        textAlign="left"
                        mb="0"
                    >
                        Comments (5)
                    </Typography>
                </Box>

                <Box sx={{ marginTop: "10px" }}>
                    <Comments />
                    <Comments />
                    <Comments />
                    <Comments />
                    <Comments />
                    <Comments />
                </Box>
            </Box>
        </>
    )
}

export default CommentBase