import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import InsertEmoticonOutlinedIcon from '@mui/icons-material/InsertEmoticonOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

const OtherContent = (props) => {
    return (
        <Box
            sx={{
                padding: "10px",
                display: "flex",
                gap: "10px"
            }}
        >
            <Button
                variant="outlined"
                startIcon={<CameraAltOutlinedIcon />}
                sx={{
                    position: "relative"
                }}
            >
                <input
                    className='media-fields'
                    type="file"
                    accept="image/*, video/*"
                    multiple
                    onChange={props.handleFileChange}
                    style={{
                        position: "absolute",
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0,
                        width: "100%",
                        cursor: "pointer",
                        opacity: 0
                    }}
                />
                Media
            </Button>

            <Button
                variant="outlined"
                startIcon={<InsertEmoticonOutlinedIcon />}
            >
                Activity
            </Button>

            <Button
                variant="outlined"
                startIcon={<MoreHorizOutlinedIcon />}
            >
                More
            </Button>
        </Box>
    )
}

export default OtherContent