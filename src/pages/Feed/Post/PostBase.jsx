import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { SecondBGColor } from '../../../Util/Colors/Colors';
import PostHeader from './PostHeader';
import Media from './Media/Media';
import PostsButtons from './PostsButtons';
import PostFooter from './PostFooter';
import CommentBase from '../Comment/CommentBase';

const PostBase = (props) => {
    const [OpenCommentSection, setOpenCommentSection] = useState(false)

    return (
        <Box
            sx={{
                position: "relative",
                mb: "1.5rem",
                border: "1px solid #e8e8e8",
                bgcolor: SecondBGColor,
                borderRadius: "0.85rem",
                boxShadow: "none",
                paddingBottom: "5px",
                overflow: "hidden"
            }}
        >
            <PostHeader
                Author={props.Post.auhtor}
                DatePosted={props.Post.date_created}
            />

            <Box
                sx={{
                    padding: "16px",
                    paddingTop: "3px"
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
                    {
                        props.Post.description.length > 320 ?
                            `${props.Post.description.slice(0, 320)}...` :
                            props.Post.description
                    }
                </Typography>
            </Box>

            {props.Post.media_files.length !== 0 ?
                <Media
                    Media={props.Post.media_files}
                /> :
                <Box sx={{ mt: "20px" }}></Box>
            }

            <PostsButtons
                setOpenCommentSection={setOpenCommentSection}
            />
            <PostFooter />

            <Box
                sx={{
                    display: OpenCommentSection ? "flex" : "none",
                    flexDirection: "column",
                    height: "100%",
                    position: "absolute",
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0,
                    backgroundColor: SecondBGColor,
                    borderRadius: "0.85rem",
                }}
            >
                <CommentBase
                    setOpenCommentSection={setOpenCommentSection}
                />
            </Box>
        </Box>
    )
}

export default PostBase