import React, { useState, useEffect } from 'react'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import FetchData from '../../Util/Data/FetchData';
import { useParams } from 'react-router-dom';
import Header from '../../Components/Headers/Header';
import { useSelector } from 'react-redux';
import { MainBGColor } from '../../Util/Colors/Colors';
import PostBase from '../Feed/Post/PostBase';
import { PostsSocket } from '../../Util/Socket/PostsSocket';

const SearchPageBase = () => {
    /**Page Author */
    const author = useSelector(state => state.Author.Author)
    const { query } = useParams()
    const [Posts, setPosts] = useState([])

    /**Get the Post */
    useEffect(() => {
        FetchData(`/api/posts/post/search?q=${query}`).then((posts) => {
            let postsObject = {}

            posts.forEach(post => {
                postsObject[post.id] = post;
            })
            setPosts(prevPosts => ({ ...prevPosts, ...postsObject }));
        })
    }, [query])

    useEffect(() => {
        PostsSocket(setPosts)
    }, [author])

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
                <Box
                    sx={{
                        margin: "0 auto",
                        width: ["100%", "100%", "80%", "80%"]
                    }}
                >
                    {Object.values(Posts).map((post, index) => {
                        return (
                            <PostBase
                                key={index}
                                Post={post}
                                Author={author}
                            />
                        )
                    })}
                </Box>
            </Container>
        </Box>
    )
}

export default SearchPageBase