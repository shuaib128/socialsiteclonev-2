import React from 'react'
import Box from '@mui/material/Box';
import CommentHeader from './CommentHeader';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useSelector } from 'react-redux';
import PostData from '../../../Util/Data/PostData';

const Reply = ({ Post, Reply }) => {
    const Likes = Reply.likes
    const author = useSelector(state => state.Author.Author)
    const color = Likes.some((like) => like.id === author.id) ? "#d10709" : "#888da8";

    const DATA = {
        postID: Post.id,
        commentID: Reply.id,
        authorID: author.id,
    };

    /**hndle the submit for the like button */
    const likeButtonClickHandler = () => {
        PostData(
            "POST",
            "/api/posts/post/add/reply/like/",
            JSON.stringify(DATA)
        ).then((data) => { })
    }
    return (
        <Box
            sx={{
                paddingLeft: "58px",
                paddingRight: "10px"
            }}
        >
            <CommentHeader
                Asset={Reply}
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
                >
                    {Reply.reply}
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
                            {Likes.length}
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