import React, { useState } from 'react'
import Box from '@mui/material/Box';
import ButtonOutLine from "../../../Components/Buttons/ButtonOutLine"
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import InsertEmoticonOutlinedIcon from '@mui/icons-material/InsertEmoticonOutlined';
import IconButton from '@mui/material/IconButton';
import PostData from '../../../Util/Data/PostData';
import { useSelector } from 'react-redux';

const CommentTextArea = (props) => {
    const [LoadingData, setLoadingData] = useState(false)
    const [CommentContent, setCommentContent] = useState("")
    /**Page Author */
    const author = useSelector(state => state.Author.Author)

    const scrollToBottom = () => {
        const commentContainer = document.querySelector(`.comment-main-${props.ID.id}`);
        if (commentContainer) {
            commentContainer.scrollTop = commentContainer.scrollHeight;
        }
    };
    /**Submit comment */
    const submitComment = () => {
        setLoadingData(true)

        const DATA = {
            postID: props.Post.id,
            commentID: props.ID.id,
            authorID: author.id,
            commentContent: CommentContent
        }

        /**Send comment to backend */
        PostData(
            "POST",
            props.SubmitPath,
            JSON.stringify(DATA)
        ).then((data) => {
            setCommentContent("")
            scrollToBottom();
            setLoadingData(false)
        })
    }

    return (
        <Box
            sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <textarea
                className={`comment-textarea-${props.ID.id}`}
                value={CommentContent}
                onChange={(e) => setCommentContent(e.target.value)}
                placeholder={props.PlaceholderText}
                style={{
                    width: "100%",
                    height: "70%",
                    border: "none",
                    fontSize: "1.1rem",
                    transition: "all .3s",
                    resize: "none",
                    outline: "none",
                    fontFamily: "inherit",
                }}
            />

            <Box
                sx={{
                    height: "30%",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    justifyContent: "end"
                }}
            >
                <IconButton
                    type="button"
                    sx={{ p: '10px', color: "#757a91" }}
                >
                    <CameraAltOutlinedIcon />
                </IconButton>

                <IconButton
                    type="button"
                    sx={{ p: '10px', color: "#757a91" }}
                >
                    <InsertEmoticonOutlinedIcon />
                </IconButton>

                <Box width="160px">
                    <ButtonOutLine
                        ButtonText={props.ButtonText}
                        ButtonHeight="40px"
                        OnClickHandler={submitComment}
                        varient="contained"
                        IsLoading={LoadingData}
                        marginTop="0px"
                    />
                </Box>
            </Box>
        </Box>
    )
}

export default CommentTextArea