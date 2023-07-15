import React, { useState } from 'react'
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import { BackendLink } from '../../../Util/BackEndLink';

const CoverImageBase = ({ Author, CoverImage }) => {
    const author = useSelector(state => state.Author.Author)
    const isAuthor = author.id === Author.id
    const [Hovering, setHovering] = useState(false)

    return (
        <Box
            className="cover-photo"
            sx={{
                height: "330px",
                position: "relative"
            }}
        >
            {isAuthor ?
                <IconButton
                    onMouseEnter={() => setHovering(true)}
                    onMouseLeave={() => setHovering(false)}
                    type="button"
                    sx={{
                        color: "#757a91",
                        transition: "all 0.3s",
                        transition: "all .3s",
                        borderRadius: 0,
                        color: "white",
                        position: "absolute",
                        top: 7,
                        left: 7,
                        border: Hovering ? "1px solid white" : "none",
                        zIndex: 1
                    }}
                >
                    <CameraAltIcon
                        sx={{
                            color: "white",
                            fontSize: "23px"
                        }}
                    />

                    <Typography
                        ml={1}
                        mb={0}
                        variant="body2"
                        gutterBottom
                    >
                        Edit cover image
                    </Typography>
                </IconButton> :
                <Box></Box>
            }

            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0,
                    background: "rgba(57,58,79,.18)",
                    transition: "all .3s",
                    zIndex: 0,
                    display: Hovering ? "block" : "none"
                }}
            ></Box>

            <img
                style={{
                    objectPosition: "top"
                }}
                src={BackendLink + CoverImage}
                alt='cover-photo'
            />
        </Box>
    )
}

export default CoverImageBase