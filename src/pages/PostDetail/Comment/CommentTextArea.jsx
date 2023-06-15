import React, { useState } from 'react'
import Box from '@mui/material/Box';
import ButtonOutLine from "../../../Components/Buttons/ButtonOutLine"
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import InsertEmoticonOutlinedIcon from '@mui/icons-material/InsertEmoticonOutlined';
import IconButton from '@mui/material/IconButton';

const CommentTextArea = () => {
    const [LoadingData, setLoadingData] = useState(false)

    /**Submit comment */
    const submitComment = () => {

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
                placeholder='Write a comment!'
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

                <Box width="150px">
                    <ButtonOutLine
                        ButtonText="Post Comment"
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