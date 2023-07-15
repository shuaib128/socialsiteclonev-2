import React, { useState } from 'react'
import Box from '@mui/material/Box';
import CommentHeader from './CommentHeader';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from '@mui/material/Button';
import Reply from './Reply';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
import { useSelector } from 'react-redux';
import PostData from '../../../Util/Data/PostData';
import CommentTextArea from './CommentTextArea';

const Comment = ({ Post, Comment }) => {
    const author = useSelector(state => state.Author.Author)
    const replies = Comment.replyes
    const [OpenReply, setOpenReply] = useState(false)
    const [OpenReplyTextArea, setOpenReplyTextArea] = useState(false)

    const Likes = Comment.likes
    const color = Likes.some((like) => like.id === author.id) ? "#d10709" : "#888da8";
    
    const DATA = {
        postID: Post.id,
        commentID: Comment.id,
        authorID: author.id,
    };

    /**hndle the submit for the like button */
    const likeButtonClickHandler = () => {
        PostData(
            "POST",
            "/api/posts/post/add/comment/like/",
            JSON.stringify(DATA)
        ).then((data) => { })
    }

    /**hndle the submit for the reply button */
    const replyClickHandler = () => {
        setOpenReply(true)
        setOpenReplyTextArea(true)

        const commentContainer = document.querySelector(`.reply-textarea-${Comment.id}`);
            commentContainer.scrollIntoView({ behavior: 'smooth' });
    }

    if (Comment) {
        return (
            <Box
                sx={{
                    marginBottom: "20px"
                }}
            >
                <CommentHeader
                    Asset={Comment}
                />

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
                        whiteSpace="pre-wrap"
                    >
                        {Comment.comment}
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
                            <IconButton
                                onClick={() => likeButtonClickHandler()}
                                type="button"
                                sx={{
                                    color: "#757a91",
                                    transition: "all .3s",
                                    borderRadius: "50%",
                                    color: "white",
                                }}
                            >
                                <FavoriteIcon
                                    sx={{
                                        color: { color },
                                        fontSize: "20px"
                                    }}
                                />
                            </IconButton>
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
                                {Comment.likes.length}
                            </Typography>
                        </Box>

                        <Button
                            variant="text"
                            onClick={() => replyClickHandler()}
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
                        {replies.length} {replies.length >= 2 ? "replies" : "reply"}
                    </Button>
                </Box>

                {OpenReply ?
                    <Box
                        className="reply-main"
                    >
                        {replies.map((reply, _) => {
                            return (
                                <Reply
                                    key={reply.id}
                                    Post={Post}
                                    Reply={reply}
                                />
                            )
                        })}

                        {OpenReplyTextArea ?
                            <Box
                                sx={{
                                    margin: "0 auto",
                                    width: "90%",
                                    height: "25%",
                                    padding: "10px",
                                    border: "1px solid #e0e0e0",
                                    borderRadius: "0.65rem",
                                    marginTop: "20px",
                                    marginBottom: "50px"
                                }}
                            >
                                <CommentTextArea
                                    ID={Comment}
                                    Post={Post}
                                    ButtonText="post reply"
                                    PlaceholderText="Write a reply!"
                                    SubmitPath="/api/posts/post/add/reply/"
                                />
                            </Box> :
                            <Box></Box>
                        }
                    </Box> :
                    <Box></Box>
                }
                <Box className={`reply-textarea-${Comment.id}`}></Box>
            </Box>
        )
    } else {

    }
}

export default Comment