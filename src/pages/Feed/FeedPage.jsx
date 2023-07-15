import React, { useState, useEffect, useRef, useCallback } from 'react'
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
import { useSelector } from 'react-redux';
import { PostsSocket } from '../../Util/Socket/PostsSocket';

const FeedPage = () => {
    /**Page Author */
    const author = useSelector(state => state.Author.Author)
    const [Posts, setPosts] = useState({})
    const [postIds, setPostIds] = useState([]);
    /**Check if loading nxt page posts */
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        setLoading(true);
        setError(false);

        FetchData(`/api/posts/?page=${page}`).then((data) => {
            // set setHasMore to false if there no post came with request
            if (data.length === 0) {
                setHasMore(false);
                return;
            }
            /**
             * Transfer the data array to objetct.
             * post_id: {Post}
             * For better finging the post
             */
            let postsObject = {}
            let newPostIds = [];

            data.forEach(post => {
                postsObject[post.id] = post;
                newPostIds.push(post.id);
            })
            setPosts(prevPosts => ({ ...prevPosts, ...postsObject }));

            /**get the post id and put it in PostsIds */
            setPostIds(prevPostIds => {
                const prevPostIdsSet = new Set(prevPostIds);
                const uniqueNewIds = newPostIds.filter(id => !prevPostIdsSet.has(id));
                return [...prevPostIds, ...uniqueNewIds];
            });
            setLoading(false);
        })
    }, [page])

    /**Observer for last post element */
    const observer = useRef();
    const lastPostElementRef = useCallback(node => {
        if (loading || !hasMore) return;
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
            if (loading || !entries[0].isIntersecting || !hasMore) return;
            setPage(prevPage => prevPage + 1);
        });
        if (node) observer.current.observe(node);
    }, [loading, hasMore]);

    /**get updates post from web sockets */
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

                    {postIds.map((id, index) => {
                        const post = Posts[id];
                        if (postIds.length === index + 1) {
                            return (
                                <PostBase
                                    ref={lastPostElementRef}
                                    key={index}
                                    Post={post}
                                    Author={author}
                                />
                            )
                        } else {
                            return (
                                <PostBase
                                    key={index}
                                    Post={post}
                                    Author={author}
                                />
                            )
                        }
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