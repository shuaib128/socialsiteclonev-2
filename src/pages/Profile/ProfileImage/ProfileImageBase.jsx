import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import { ThirdBGColor } from '../../../Util/Colors/Colors';
import ButtonOutLine from '../../../Components/Buttons/ButtonOutLine';
import { useSelector } from 'react-redux';
import { BackendLink } from '../../../Util/BackEndLink';
import FetchData from '../../../Util/Data/FetchData';
import { resizeImageFile } from '../../../Util/Compression/imageCompress';
import PostData from '../../../Util/Data/PostData';
import { useDispatch } from 'react-redux';
import { getAuthor } from '../../../Redux/Author/AuthorActions';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';

const ProfileImageBase = ({ Author, setAuthor }) => {
    const dispatch = useDispatch();
    const [Loading, setLoading] = useState(false)
    const [LoadingImageUpload, setLoadingImageUpload] = useState(false)
    const author = useSelector(state => state.Author.Author)
    const isAuthor = author.id === Author.id

    const followSubmitComment = () => {
        setLoading(true)

        FetchData(`/api/users/user/follower/add/${Author.id}/`).then((data) => {
            setAuthor(data);
            setLoading(false)
        })
    }

    /**Handle Avatar image uplaod */
    const handleAvatarUploadClick = async (e) => {
        setLoadingImageUpload(true)
        const file = e.target.files[0];
        const resizedFile = await resizeImageFile(file, 840, 680);

        const fileReader = new FileReader();
        fileReader.readAsDataURL(resizedFile);

        fileReader.addEventListener('load', (event) => {
            const dataUrl = event.target.result;

            const DATA = {
                userID: author.id,
                profile_image: dataUrl,
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
            className="profile-image-container"
            sx={{
                position: "relative",
            }}
        >
            <Box
                sx={{
                    position: "relative",
                    top: "-59px"
                }}
            >
                <Box
                    sx={{
                        width: "fit-content",
                        position: "relative",
                        margin: "0 auto"
                    }}
                >
                    <Avatar
                        sx={{
                            width: "110px",
                            height: "110px",
                        }}
                        alt={""}
                        src={BackendLink + Author.profile_picture}
                    />
                    {isAuthor ?
                        <IconButton
                            type="button"
                            sx={{
                                color: "#757a91",
                                transition: "all .3s",
                                position: "absolute",
                                bottom: 0,
                                right: 0,
                                zIndex: 1,
                                backgroundColor: ThirdBGColor,
                                "&:hover": {
                                    backgroundColor: "#8ab7ee",
                                }
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
                                <AddIcon
                                    sx={{
                                        color: "white",
                                        fontSize: "23px",
                                        position: "relative"
                                    }}
                                />
                            }
                            {/* Hidden input button for file selection */}
                            {!LoadingImageUpload ?
                                <input
                                    onChange={handleAvatarUploadClick}
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
                </Box>

                <Typography
                    fontWeight="600"
                    fontSize="1.4rem"
                    lineHeight="1.2"
                    mb={0}
                    mt={1}
                    variant="subtitle2"
                    gutterBottom
                >
                    {Author.firstname} {Author.lastname}
                </Typography>
                <Typography
                    fontSize=".9rem"
                    lineHeight="1.2"
                    mb={0}
                    variant="subtitle2"
                    gutterBottom
                    color="#999"
                >
                    @{Author.username}
                </Typography>
            </Box>

            {!isAuthor ?
                <Box
                    sx={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        display: "flex",
                        gap: 0.8,
                        marginTop: "10px"
                    }}
                >
                    <Box>
                        <ButtonOutLine
                            ButtonText={Author.followers && Author.followers.includes(author.id) ?
                                "Following" :
                                "Follow"
                            }
                            ButtonHeight="40px"
                            OnClickHandler={followSubmitComment}
                            varient="contained"
                            marginTop="0px"
                            IsLoading={Loading}
                        />
                    </Box>

                    <Box>
                        <ButtonOutLine
                            ButtonText="Photos"
                            ButtonHeight="40px"
                            OnClickHandler={followSubmitComment}
                            varient="contained"
                            marginTop="0px"
                        />
                    </Box>
                </Box> :
                <Box></Box>
            }
        </Box>
    )
}

export default ProfileImageBase