import React from 'react'
import Box from '@mui/material/Box';
import PostHeader from '../../Feed/Post/PostHeader';
import Typography from '@mui/material/Typography';

const PostDetailRightBase = ({ Post }) => {
    return (
        <Box>
            <PostHeader
                Post={Post}
                DatePosted={Post.date_created}
            />

            <Box
                sx={{
                    paddingX: "20px",
                    marginBottom: "30px"
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
                    sx={{ whiteSpace: 'pre-wrap' }}
                >
                    {Post.description}
                </Typography>
            </Box>
        </Box>
    )
}

export default PostDetailRightBase