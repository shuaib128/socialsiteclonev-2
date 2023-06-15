import React from 'react'
import Box from '@mui/material/Box';
import { imageOrVideo } from '../../../../Util/ImageOrVideo/ImageOrVideo';
import { BackendLink } from '../../../../Util/BackEndLink';

const ImageOrVideo = ({ File, Width, Height }) => {
    
    if (imageOrVideo(File) === "image") {
        return (
            <img
                src={BackendLink + File}
                style={{
                    borderRadius: ".75rem",
                    width: Width,
                    height: Height
                }}
            />
        )
    } else if (imageOrVideo(File) === "video") {
        return (
            <Box
                className="video-player"
                sx={{
                    backgroundColor: "rgba(0, 0, 0, 0.4)",
                    width: Width,
                    height: Height,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                <video src={BackendLink + File} controls />
            </Box>
        )
    }
}

export default ImageOrVideo