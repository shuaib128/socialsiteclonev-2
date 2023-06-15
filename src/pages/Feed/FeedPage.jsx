import React, { useState, useEffect } from 'react'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Header from '../../Components/Headers/Header';
import { MainBGColor } from '../../Util/Colors/Colors';
import Weather from './Weather/Weather';
import RecomendedPages from './RecomendedPages/RecomendedPages';
import LatestActivityPage from './LatestActivity/LatestActivityPage';
import StoriesPage from './Stories/StoriesPage';
import SuggestedFriends from './SuggestedFriends/SuggestedFriends';
import PostCreateBase from '../Post/PostCreate/PostCreateBase';
import PostBase from './Post/PostBase';
import FetchData from '../../Util/Data/FetchData';

const FeedPage = () => {
    const [Posts, setPosts] = useState([])

    useEffect(() => {
        FetchData("/api/posts/").then((data) => {
            setPosts(data);
        })
    }, [])

    return (
        <Box
            sx={{
                backgroundColor: MainBGColor,
                marginTop: "74px",
            }}
        >
            <Header />

            <Container
                maxWidth="xl"
                sx={{
                    minheight: ["auto", "auto", "100vh", "100vh"],
                    paddingTop: "25px",
                    paddingBottom: "40px",
                    display: ["block", "block", "flex", "flex"],
                    gap: "25px"
                }}

            >
                <Box
                    className="sec1"
                    sx={{
                        width: ["100%", "100%", "25%", "25%"]
                    }}
                >
                    <Weather />
                    <RecomendedPages />
                </Box>

                <Box
                    sx={{
                        width: ["100%", "100%", "50%", "50%"]
                    }}
                >
                    <PostCreateBase />

                    {Posts.map((post, index) => {
                        return (
                            <PostBase
                                key={index}
                                Post={post}
                            />
                        )
                    })}
                </Box>

                <Box
                    sx={{
                        width: ["100%", "100%", "25%", "25%"]
                    }}
                >
                    <StoriesPage />
                    <SuggestedFriends />
                    <LatestActivityPage />
                </Box>
            </Container>
        </Box>
    )
}

export default FeedPage