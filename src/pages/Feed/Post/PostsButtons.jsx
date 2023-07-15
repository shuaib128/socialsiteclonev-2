import React from 'react'
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { ThirdBGColor } from '../../../Util/Colors/Colors';
import LinkIcon from '@mui/icons-material/Link';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PostData from "../../../Util/Data/PostData"

const PostsButtons = (props) => {
    const Likes = props.Post.likes
    const author = props.Author
    const color = Likes.some((like) => like.id === author.id) ? "#d10709" : "";

    const DATA = {
        postID: props.Post.id,
        author: author.id,
    };

    const likeButtonClickHandler = () => {
        PostData(
            "POST",
            "/api/posts/post/add/like/",
            JSON.stringify(DATA)
        ).then((data) => { })
    }

    const commentButtonClickHandler = () => {
        props.setOpenCommentSection(true)

        /**Get the post to view */
        var postElement = document.querySelector(`.post-main-${props.Post.id}`)
        postElement.scrollIntoView({ behavior: "smooth", block: "center" })
    }

    return (
        <Box
            sx={{
                position: "relative",
                display: "flex",
                justifyContent: "end",
                px: "16px",
                gap: "7px",
                marginTop: "-40px"
            }}
        >
            <IconButton
                type="button"
                sx={{
                    p: '15px',
                    color: "#757a91",
                    transition: "all .3s",
                    borderRadius: "50%",
                    color: "white",
                    backgroundColor: ThirdBGColor,
                    "&:hover": {
                        backgroundColor: "#8ab7ee",
                    }
                }}
            >
                <LinkIcon />
            </IconButton>

            <IconButton
                onClick={() => commentButtonClickHandler()}
                type="button"
                sx={{
                    p: '14px',
                    color: "#757a91",
                    transition: "all .3s",
                    borderRadius: "50%",
                    color: "white",
                    backgroundColor: ThirdBGColor,
                    "&:hover": {
                        backgroundColor: "#8ab7ee",
                    }
                }}
            >
                <ChatBubbleOutlineIcon />
            </IconButton>

            <IconButton
                type="button"
                sx={{
                    p: '15px',
                    color: "#757a91",
                    transition: "all .3s",
                    borderRadius: "50%",
                    color: { color },
                    backgroundColor: "#fff",
                    boxShadow: "0 5px 43px rgba(0,0,0,.18)",
                    "&:hover": {
                        backgroundColor: "#fff",
                    }
                }}
                onClick={() => likeButtonClickHandler()}
            >
                <FavoriteIcon />
            </IconButton>
        </Box>
    )
}

export default PostsButtons