import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { MainBGColor } from '../../Util/Colors/Colors';
import Header from '../../Components/Headers/Header';
import { useParams } from 'react-router-dom';
import FetchData from '../../Util/Data/FetchData';
import Media from './Media/Media';
import PostDetailRightBase from './PostDetailRight/PostDetailRightBase';

const PostDetailBase = () => {
    const { id } = useParams();
    const [Post, setPost] = useState()

    /**Get the Post */
    useEffect(() => {
        FetchData(`/api/posts/post/${id}`).then((post) => {
            setPost(post);
        })
    }, [])

    return (
        <Box
            sx={{
                backgroundColor: ["white", "white", MainBGColor, MainBGColor],
                marginTop: "74px",
            }}
        >
            <Header />

            <Container
                maxWidth="xl"
                sx={{
                    minheight: ["auto", "auto", "100vh", "100vh"],
                    display: ["block", "block", "flex", "flex"],
                    height: ["auto", "auto", "calc(100vh - 73px)", "calc(100vh - 73px)"],
                    overflow: "hidden"
                }}

            >
                <Box
                    sx={{
                        width: ["100%", "100%", "70%", "70%"],
                        height: "100%"
                    }}
                >
                    {Post ?
                        <Media
                            MediaFiles={Post.media_files}
                        /> : <Box></Box>
                    }
                </Box>

                <Box
                    sx={{
                        width: ["100%", "100%", "30%", "30%"],
                        backgroundColor: "white",
                        overflowY: "scroll"
                    }}
                >
                    {Post ?
                        <PostDetailRightBase
                            Post={Post}
                        /> : <Box></Box>
                    }
                </Box>
            </Container>
        </Box>
    )
}

export default PostDetailBase