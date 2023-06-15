import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import { ThirdBGColor } from '../../../Util/Colors/Colors';

const CreateStory = () => {
    return (
        <Box
            sx={{
                textAlign: "right",
                padding: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: "1px solid #e8e8e8",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center"
                }}
            >
                <IconButton
                    type="button"
                    sx={{
                        p: '12px',
                        color: "#757a91",
                        transition: "all .3s",
                        borderRadius: "50%",
                        border: "3px dashed #e8e8e8",
                        "&:hover": {
                            color: ThirdBGColor,
                            border: `3px dashed ${ThirdBGColor}`
                        }
                    }}
                >
                    <AddIcon />
                </IconButton>

                <Box>
                    <Typography
                        variant="subtitle1"
                        gutterBottom
                        color="black"
                        textAlign="left"
                        fontSize="17px"
                        mb="0px"
                        ml="10px"
                    >
                        Add a new Story
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        gutterBottom
                        color="#757a91"
                        textAlign="left"
                        fontSize="13px"
                        mb="0px"
                        ml="10px"
                    >
                        Share an image, a video or some text
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default CreateStory