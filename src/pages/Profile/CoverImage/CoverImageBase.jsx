import React, { useState } from 'react'
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import { BackendLink } from '../../../Util/BackEndLink';
import { resizeImageFile } from '../../../Util/Compression/imageCompress';
import PostData from '../../../Util/Data/PostData';
import { useDispatch } from 'react-redux';
import { getAuthor } from '../../../Redux/Author/AuthorActions';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';

const CoverImageBase = ({ Author, CoverImage }) => {
    const dispatch = useDispatch();
    const author = useSelector(state => state.Author.Author)
    const isAuthor = author.id === Author.id
    const [Hovering, setHovering] = useState(false)
    const [LoadingImageUpload, setLoadingImageUpload] = useState(false)

    /**Handle Avatar cover image uplaod */
    const handleAvatarCoverUploadClick = async (e) => {
        setLoadingImageUpload(true)
        const file = e.target.files[0];
        const resizedFile = await resizeImageFile(file, 840, 680);

        const fileReader = new FileReader();
        fileReader.readAsDataURL(resizedFile);

        fileReader.addEventListener('load', (event) => {
            const dataUrl = event.target.result;

            const DATA = {
                userID: author.id,
                cover_image: dataUrl,
            };

            /**hndle the submit for the like button */
            PostData(
                "POST",
                "/api/users/author/update/",
                JSON.stringify(DATA)
            ).then((data) => {
                console.log(data);
                dispatch(getAuthor(data.user))

                setLoadingImageUpload(false)
            })
        });
    }

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
                        transition: "all 0.3s",
                        borderRadius: 0,
                        color: "white",
                        position: "absolute",
                        top: 7,
                        left: 7,
                        border: Hovering ? "1px solid white" : "none",
                        zIndex: 1
                    }}
                >
                    {LoadingImageUpload ?
                        <HourglassBottomIcon
                            sx={{
                                color: "white",
                                fontSize: "23px",
                                position: "relative"
                            }}
                        /> :
                        <CameraAltIcon
                            sx={{
                                color: "white",
                                fontSize: "23px"
                            }}
                        />
                    }

                    <Typography
                        ml={1}
                        mb={0}
                        variant="body2"
                        gutterBottom
                    >
                        {!LoadingImageUpload ? "Edit cover image" : "Uploading cover image"}
                    </Typography>
                    {!LoadingImageUpload ?
                        <input
                            onChange={handleAvatarCoverUploadClick}
                            type="file"
                            id="avatarInput"
                            accept="image/*"
                            style={{
                                position: "absolute",
                                width: "100%",
                                cursor: "pointer",
                                opacity: 0
                            }}
                        /> :
                        <Box></Box>
                    }
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
                    objectPosition: "center"
                }}
                src={BackendLink + CoverImage}
                alt='cover'
            />
        </Box>
    )
}

export default CoverImageBase