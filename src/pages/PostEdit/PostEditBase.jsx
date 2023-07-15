import React, { useState, useEffect } from 'react'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import FetchData from '../../Util/Data/FetchData';
import { useParams } from 'react-router-dom';
import Header from '../../Components/Headers/Header';
import { MainBGColor } from '../../Util/Colors/Colors';
import PostCreateBase from '../Post/PostCreate/PostCreateBase';

const PostEditBase = () => {
    const { id } = useParams()
    const [Post, setPost] = useState()

    /**Get the Post */
    useEffect(() => {
        FetchData(`/api/posts/post/edit/${id}`).then((post) => {
            setPost(post);
        })
    }, [])
    console.log(Post);

    return (
        <Box
            sx={{
                backgroundColor: MainBGColor,
                marginTop: "74px",
            }}
        >
            <Header />

            <Container
                maxWidth="md"
                sx={{
                    minheight: ["auto", "auto", "100vh", "100vh"],
                    paddingTop: "25px",
                    paddingBottom: "40px"
                }}
            >
                <PostCreateBase 
                    ExistingPost={Post}
                />
            </Container>
        </Box>
    )
}

export default PostEditBase