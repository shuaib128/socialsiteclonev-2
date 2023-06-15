import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { SecondBGColor } from '../../../Util/Colors/Colors';
import TextArea from './TextArea';
import OtherContent from './OtherContent';
import Media from './Media';
import ButtonOutLine from '../../../Components/Buttons/ButtonOutLine';
import { motion } from "framer-motion"
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useSelector, useDispatch } from 'react-redux';
import FetchData from "../../../Util/Data/FetchData"
import PostData from '../../../Util/Data/PostData';
import { getAuthor } from '../../../Redux/Author/AuthorActions'
import { transferFiles } from '../TransferFiles/transferFiles';
import { storeDataInIndexedDB, retrieveDataFromIndexedDB } from '../StorePostData/indexedDB';
import PostUploadingProgress from './PostUploadingProgress/PostUploadingProgress';

const PostCreateBase = () => {
    /**Get the user */
    const dispatch = useDispatch();
    useEffect(() => {
        FetchData("/api/users/author/").then((data) => {
            dispatch(getAuthor(data))
        })
    }, [])

    /**Page Author */
    const author = useSelector(state => state.Author.Author)
    /**Text area state */
    const [TextAreaFocused, setTextAreaFocused] = useState(false);
    const [LoadingData, setLoadingData] = useState(false);
    const [UploadingPost, setUploadingPost] = useState(false);


    /**Post content */
    const [PostContent, setPostContent] = useState({
        authorName: author.username,
        description: "",
        mediaFiles: []
    })


    /**Update the username */
    useEffect(() => {
        if (author) {
            setPostContent((prevState) => ({
                ...prevState,
                authorName: author.username
            }));
        }
    }, [author]);


    /**Check if any post in the indexedDB */
    retrieveDataFromIndexedDB()
        .then((data) => {
            console.log(data);
            if (data.length) {
                setUploadingPost(true)
            }
        })


    /**Create post */
    const sendPost = () => {
        setLoadingData(true)

        /**Send the post */
        PostData(
            "POST",
            "/api/posts/post/create/",
            JSON.stringify(PostContent)
        ).then((data) => {
            if (data.message === "Post created successfully") {
                setUploadingPost(true)

                const mediaData = [
                    { id: 1, files: PostContent.mediaFiles },
                    { id: 2, post_id: data.post_id },
                    { id: 3, author_username: author.username },
                ];

                /**Save data in indexedDB */
                storeDataInIndexedDB(mediaData)

                /**Clear the mediastate */
                setPostContent((prevState) => ({
                    ...prevState,
                    description: "",
                    mediaFiles: []
                }));

                // Run transferFiles in the background
                setTimeout(() => {
                    transferFiles()
                        .then(() => {
                            console.log("set to false");
                            setUploadingPost(false)
                        })
                        .catch((error) => {
                            // Handle any errors that occurred during the transfer
                        });
                }, 0);
                setTextAreaFocused(false)
                setLoadingData(false)
            }
        })
    }

    /**Handle image file change */
    const handleFileChange = async (e) => {
        const files = e.target.files

        setPostContent((prevState) => ({
            ...prevState,
            mediaFiles: [...PostContent.mediaFiles, ...files]
        }));
        setTextAreaFocused(true)
    };

    return (
        <Box
            sx={{
                mb: "1.5rem"
            }}
        >
            <Box
                sx={{
                    backgroundColor: SecondBGColor,
                    borderRadius: "0.85rem",
                    border: "1px solid #e8e8e8",
                    mb: "1rem"
                }}
            >
                <Box
                    sx={{
                        padding: "0.75em",
                        display: "flex",
                        alignItems: "center",
                        backgroundColor: "#fcfcfc",
                        borderRadius: ".85rem .85rem 0 0",
                        borderBottom: "1px solid #e8e8e8",
                        mb: "1.5rem",
                        justifyContent: "space-between"
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <DriveFileRenameOutlineIcon
                            sx={{
                                color: "#757a91"
                            }}
                        />
                        <Typography
                            variant="subtitle1"
                            gutterBottom
                            color="#757a91"
                            fontSize=".95rem"
                            mb="0px"
                            ml="5px"
                        >
                            Publish
                        </Typography>
                    </Box>

                    {TextAreaFocused ?
                        <IconButton
                            onClick={() => setTextAreaFocused(false)}
                            size="small"
                            sx={{ ml: 2, marginLeft: "23px" }}
                            aria-haspopup="true"
                        >
                            <CloseIcon
                                sx={{
                                    color: "#757a91"
                                }}
                            />
                        </IconButton> :
                        <Box></Box>
                    }
                </Box>

                <Box
                    sx={{
                        padding: "0.75em",
                        borderBottom: "1px solid #e8e8e8",
                    }}
                >
                    <TextArea
                        PostContent={PostContent}
                        setPostContent={setPostContent}
                        setTextAreaFocused={setTextAreaFocused}
                    />
                    <Media
                        Files={PostContent.mediaFiles}
                        setPostContent={setPostContent}
                    />
                </Box>

                <Box>
                    <OtherContent
                        handleFileChange={handleFileChange}
                        setTextAreaFocused={setTextAreaFocused}
                    />
                </Box>

                <motion.div
                    style={{
                        padding: "0px 16px",
                        paddingBottom: TextAreaFocused ? "16px" : "0px",
                        overflow: "hidden",
                    }}
                    animate={TextAreaFocused ? "open" : "closed"}
                    variants={{
                        open: { opacity: 1, height: "auto" },
                        closed: { opacity: 0, height: 0 },
                    }}
                >
                    <ButtonOutLine
                        ButtonText="post"
                        OnClickHandler={sendPost}
                        varient="contained"
                        IsLoading={LoadingData}
                    />
                </motion.div>
            </Box>

            {
                UploadingPost ?
                    <motion.div
                        className="post-progress"
                        animate={UploadingPost ? "open" : "closed"}
                        variants={{
                            open: { opacity: 1, height: "auto" },
                            closed: { opacity: 0, height: 0 },
                        }}
                    >
                        <PostUploadingProgress />
                    </motion.div> :
                    <Box></Box>
            }
        </Box>
    )
}

export default PostCreateBase