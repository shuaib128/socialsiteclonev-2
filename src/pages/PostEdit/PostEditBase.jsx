import React, { useState, useEffect } from 'react'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import FetchData from '../../Util/Data/FetchData';
import { useParams } from 'react-router-dom';
import Header from '../../Components/Headers/Header';
import { MainBGColor } from '../../Util/Colors/Colors';
import PostCreateBase from '../Post/PostCreate/PostCreateBase';
import ButtonOutLine from '../../Components/Buttons/ButtonOutLine';
import { useNavigate } from 'react-router-dom';

const PostEditBase = () => {
    /**Navigation */
    const navigate = useNavigate();

    const [Loading, setLoading] = useState(false)
    const { id } = useParams()
    const [Post, setPost] = useState()

    /**Get the Post */
    useEffect(() => {
        FetchData(`/api/posts/post/edit/${id}`).then((post) => {
            setPost(post);
        })
    }, [])

    /**Delete click handler */
    const DeletePostClickhandler = () => {
        setLoading(true)
        FetchData(`/api/posts/post/delete/${id}`).then((post) => {
            if(post === "200") {
                navigate("/");
            }
            setLoading(false)
        })
    }

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

                <Box
                    sx={{
                        width: "100px"
                    }}
                >
                    <ButtonOutLine
                        ButtonText="Delete"
                        ButtonHeight="40px"
                        OnClickHandler={DeletePostClickhandler}
                        varient="contained"
                        IsLoading={Loading}
                        marginTop="0px"
                    />
                </Box>
            </Container>
        </Box>
    )
}

export default PostEditBase