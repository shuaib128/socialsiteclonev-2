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
import { useParams } from 'react-router-dom';
import FilterBase from './PostFilter/FilterBase';
import PostSkeleton from '../../Components/Skeleton/PostSkeleton';

const ProfileBase = () => {
    const { id } = useParams();
    const [Author, setAuthor] = useState("")
    const [Posts, setPosts] = useState({})
    const author = useSelector(state => state.Author.Author)

    useEffect(() => {
        FetchData(`/api/users/user/${id}/`).then((data) => {
            setAuthor(data)
        })

        FetchData(`/api/users/user/posts/${id}/`).then((data) => {
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
    }, [author])

    /**Get the socket */
    useEffect(() => {
        PostsSocket(setPosts)
    }, [Author])


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
                    Author={Author}
                    CoverImage={Author.cover_image}
                />
                <ProfileImageBase
                    Author={Author}
                    setAuthor={setAuthor}
                />

                <Box
                    sx={{
                        display: ["block", "block", "flex", "flex"],
                        gap: "30px"
                    }}
                >
                    <Box
                        sx={{
                            width: ["100%", "100%", "30%", "30%"]
                        }}
                    >
                        <ProfileInfoBase
                            Author={Author}
                        />
                    </Box>

                    {Object.values(Posts).length !== 0 ?
                        <Box
                            className="profile-posts"
                            sx={{
                                width: ["100%", "100%", "70%", "70%"]
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
                        </Box> :
                        <Box sx={{ width: "100%" }}>
                            <PostSkeleton />
                            <PostSkeleton />
                        </Box>
                    }
                </Box>
            </Container>
        </Box>
    )
}

export default ProfileBase