import React from 'react'
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { ThirdBGColor } from '../../../Util/Colors/Colors';
import LinkIcon from '@mui/icons-material/Link';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteIcon from '@mui/icons-material/Favorite';

const PostsButtons = (props) => {
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
                onClick={() => props.setOpenCommentSection(true)}
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
                type="button"
                sx={{
                    p: '15px',
                    color: "#757a91",
                    transition: "all .3s",
                    borderRadius: "50%",
                    color: "#d10709",
                    backgroundColor: "#fff",
                    boxShadow: "0 5px 43px rgba(0,0,0,.18)",
                    "&:hover": {
                        backgroundColor: "#fff",
                    }
                }}
            >
                <FavoriteIcon />
            </IconButton>
        </Box>
    )
}

export default PostsButtons