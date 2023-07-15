import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Header from '../../Components/Headers/Header';
import { MainBGColor } from '../../Util/Colors/Colors';
import CoverImageBase from './CoverImage/CoverImageBase';
import ProfileImageBase from './ProfileImage/ProfileImageBase';
import { useSelector } from 'react-redux';
import FetchData from '../../Util/Data/FetchData';
import ProfileInfoBase from './ProfileInfo/ProfileInfoBase';
import PostBase from '../Feed/Post/PostBase';
import { PostsSocket } from '../../Util/Socket/PostsSocket';
import FilterBase from './PostFilter/FilterBase';

const UserProfileBase = () => {
    const [Posts, setPosts] = useState({})
    const author = useSelector(state => state.Author.Author)

    useEffect(() => {
        if (author.id) {
            FetchData(`/api/users/user/posts/${author.id}/`).then((data) => {
                /**
                * Transfer the data array to objetct.
                * post_id: {Post}
                * For better finging the post
                */
                let postsObject = {}

                data.forEach(post => {
                    postsObject[post.id] = post;
                })
                setPosts(prevPosts => ({ ...prevPosts, ...postsObject }));
            })
        }
    }, [author])

    /**Get the socket */
    useEffect(() => {
        PostsSocket(setPosts)
    }, [author])


    return (
        <Box
            sx={{
                backgroundColor: MainBGColor,
                marginTop: "64px",
            }}
        >
            <Header />

            <Container
                maxWidth="lg"
                sx={{
                    minheight: ["auto", "auto", "100vh", "100vh"],
                    paddingTop: "25px",
                    paddingBottom: "40px"
                }}
            >
                <CoverImageBase
                    Author={author}
                    CoverImage={author.cover_image}
                />
                <ProfileImageBase
                    Author={author}
                />

                <Box
                    sx={{
                        display: "flex",
                        gap: "30px"
                    }}
                >
                    <Box
                        sx={{
                            width: "30%"
                        }}
                    >
                        <ProfileInfoBase
                            Author={author}
                        />
                    </Box>

                    <Box
                        className="profile-posts"
                        sx={{
                            width: "70%"
                        }}
                    >
                        <FilterBase />
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
                </Box>
            </Container>
        </Box>
    )
}

export default UserProfileBase