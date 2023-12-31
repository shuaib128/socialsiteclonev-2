import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { SecondBGColor } from '../../../Util/Colors/Colors';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Comment from './Comment';
import CommentTextArea from './CommentTextArea';

const CommentBase = (props) => {
    const postComments = props.Post.comments
    
    return (
        <>
            <Box
                className={`comment-main-${props.Post.id}`}
                sx={{
                    height: "75%",
                    overflowY: "scroll"
                }}
            >
                <Box
                    sx={{
                        textAlign: "right",
                        padding: "16px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        position: "absolute",
                        top: 0,
                        backgroundColor: SecondBGColor,
                        left: 0,
                        right: 0,
                        zIndex: 2
                    }}
                >
                    <Typography
                        variant="subtitle1"
                        gutterBottom
                        fontSize="16px"
                        color="#757a91"
                        textAlign="left"
                        mb="0"
                    >
                        Comments ({postComments.length})
                    </Typography>
                    <IconButton
                        onClick={() => props.setOpenCommentSection(false)}
                        id="fade-button"
                        type="button"
                        sx={{ p: '10px', color: "#757a91" }}
                    >
                        <CloseIcon />
                    </IconButton>
                </Box>

                <Box sx={{ marginTop: "60px" }}>
                    {postComments.map((comment, _) => {
                        return (
                            <Comment
                                Post={props.Post}
                                Comment={comment}
                                key={comment.id}
                            />
                        )
                    })}
                </Box>
            </Box>

            <Box
                sx={{
                    height: "25%",
                    padding: "10px",
                    border: "1px solid #e0e0e0",
                    borderRadius: "0.65rem",
                    margin: "16px"
                }}
            >
                <CommentTextArea
                    ID={props.Post}
                    Post={props.Post}
                    ButtonText="post comment"
                    PlaceholderText="Write a comment!"
                    SubmitPath="/api/posts/post/add/comment/"
                />
            </Box>
        </>
    )
}

export default CommentBase