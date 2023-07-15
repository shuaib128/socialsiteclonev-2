import React, { useState, forwardRef } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { SecondBGColor } from '../../../Util/Colors/Colors';
import PostHeader from './PostHeader';
import Media from './Media/Media';
import PostsButtons from './PostsButtons';
import PostFooter from './PostFooter';
import CommentBase from '../Comment/CommentBase';
import { useNavigate } from 'react-router-dom';

const PostBase = forwardRef((props, ref) => {
    const navigate = useNavigate()
    const [OpenCommentSection, setOpenCommentSection] = useState(false)

    /**
     * Navigate to Post Datail page
     */
    const handlePostClcik = (postID) => {
        navigate(`/post/${postID}`)
    }

    return (
        <Box
            ref={ref}
            sx={{
                position: "relative",
                mb: "1.5rem",
                border: "1px solid #e8e8e8",
                bgcolor: SecondBGColor,
                borderRadius: "0.85rem",
                boxShadow: "none",
                paddingBottom: "5px",
                overflow: "hidden",
                cursor: "pointer"
            }}
        >
            <PostHeader
                Post={props.Post}
                DatePosted={props.Post.date_created}
            />

            <Box
                sx={{
                    padding: "16px",
                    paddingTop: "3px"
                }}
                onClick={() => handlePostClcik(props.Post.id)}
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

            <Box onClick={() => handlePostClcik(props.Post.id)}>
                {props.Post.media_files.length !== 0 ?
                    <Media
                        Media={props.Post.media_files}
                    /> :
                    <Box sx={{ mt: "20px" }}></Box>
                }
            </Box>

            <PostsButtons
                Author={props.Author}
                Post={props.Post}
                setOpenCommentSection={setOpenCommentSection}
            />
            <PostFooter
                Likes={props.Post.likes}
                Comments={props.Post.comments}
            />

            <Box className={`post-main-${props.Post.id}`}>
                <Box
                    sx={{
                        display: OpenCommentSection ? "flex" : "none",
                        flexDirection: "column",
                        height: "100%",
                        position: "relative",
                        maxHeight: "750px",
                        zIndex: 3,
                        top: 0,
                        right: 0,
                        left: 0,
                        bottom: 0,
                        backgroundColor: SecondBGColor,
                        marginTop: "50px",
                        borderTop: "1px solid #e0e0e0"
                    }}
                >
                    <CommentBase
                        Post={props.Post}
                        setOpenCommentSection={setOpenCommentSection}
                    />
                </Box>
            </Box>
        </Box>
    )
})

export default PostBase