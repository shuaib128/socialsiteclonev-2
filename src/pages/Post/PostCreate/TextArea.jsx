import React from 'react'
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';

const TextArea = (props) => {
    return (
        <Box
            sx={{
                px: "16px",
                display: "flex",
                width: "calc(100% - 20px)",
            }}
        >
            <Avatar
                sx={{
                    width: "45px",
                    height: "45px",
                }}
                alt="Remy Sharp"
                src="https://friendkit.cssninja.io/assets/img/avatars/jenna.png"
            />

            <textarea
                value={props.PostContent.description}
                placeholder='Write something about you'
                onFocus={() => props.setTextAreaFocused(true)}
                onChange={(e) => props.setPostContent(prevState => ({
                    ...prevState,
                    description: e.target.value
                }))}
                style={{
                    width: "100%",
                    height: "90px",
                    marginLeft: "20px",
                    border: "none",
                    fontSize: "1.2rem",
                    transition: "all .3s",
                    resize: "none",
                    outline: "none",
                    fontFamily: "inherit",
                }}
            />
        </Box>
    )
}

export default TextArea