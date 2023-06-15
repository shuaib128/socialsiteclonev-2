import React from 'react'
import Box from '@mui/material/Box';
import { imageOrVideo } from '../../../Util/ImageOrVideo/ImageOrVideo';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const Media = ({ Files, setPostContent }) => {
    /**Remove file on click */
    const removeFileItem = (index) => {
        const newItems = Files.filter((_, i) => i !== index);
        setPostContent((prevState) => ({
            ...prevState,
            mediaFiles: newItems
        }));
    }

    return (
        <Box
            sx={{
                py: "12px",
                display: "flex",
                gap: "13px",
                flexWrap: "wrap",
                justifyContent: "center"
            }}
        >
            {Files && Files.map((file, index) => {
                if (imageOrVideo(file.name) === "image") {
                    return (
                        <Box
                            key={index}
                            sx={{
                                position: "relative"
                            }}
                        >
                            <IconButton
                                color="primary"
                                aria-label="open menu"
                                sx={{
                                    position: "absolute",
                                    cursor: "pointer",
                                    float: "right",
                                    top: "-7px",
                                    right: "-4px",
                                    backgroundColor: "white",
                                    "&:hover": {
                                        backgroundColor: "#e4e4e4",
                                    }
                                }}
                                onClick={() => {
                                    removeFileItem(index)
                                }}
                            >
                                <CloseIcon
                                    style={{
                                        color: "#757a91",
                                        width: "14px",
                                        height: "14px"
                                    }}
                                />
                            </IconButton>
                            <img
                                src={URL.createObjectURL(file)}
                                alt="prv-img"
                                style={{
                                    width: "135px",
                                    height: "103px",
                                    borderRadius: "0.5rem"
                                }}
                            />
                        </Box>
                    )
                } else if (imageOrVideo(file.name) === "video") {
                    return (
                        <Box
                            key={index}
                            sx={{
                                position: "relative"
                            }}
                        >
                            <IconButton
                                color="primary"
                                aria-label="open menu"
                                sx={{
                                    position: "absolute",
                                    cursor: "pointer",
                                    float: "right",
                                    top: "-7px",
                                    right: "-4px",
                                    backgroundColor: "white",
                                    zIndex: "2",
                                    "&:hover": {
                                        backgroundColor: "#e4e4e4",
                                    }
                                }}
                                onClick={() => {
                                    removeFileItem(index)
                                }}
                            >
                                <CloseIcon
                                    style={{
                                        color: "#757a91",
                                        width: "14px",
                                        height: "14px"
                                    }}
                                />
                            </IconButton>
                            <video
                                controls
                                style={{
                                    width: "135px",
                                    height: "103px",
                                    borderRadius: "0.5rem"
                                }}
                            >
                                <source src={URL.createObjectURL(file)} type={file.type} />
                            </video>
                        </Box>
                    )
                }
            })}
        </Box>
    )
}

export default Media