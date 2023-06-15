import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { MainBGColor, SecondBGColor } from '../../Util/Colors/Colors';
import Header from '../../Components/Headers/Header';
import Media from './Media';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import CommentBase from './Comment/CommentBase';
import SimillerPost from './SimillerPost';

const PostDetailBase = () => {
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
                    gap: "25px",
                    height: ["auto", "auto", "calc(100vh - 73px)", "calc(100vh - 73px)"],
                    overflow: "hidden"
                }}

            >
                <Box
                    sx={{
                        width: ["0%", "0%", "0%", "15%"],
                        display: ["none", "none", "none", "block"]
                    }}
                ></Box>

                <Box
                    sx={{
                        width: ["100%", "100%", "55%", "55%"],
                        backgroundColor: SecondBGColor,
                        paddingX: ["0px", "0px", "35px", "35px"],
                        paddingY: "15px",
                        borderLeft: ["none", "none", "1px solid #e8e8e8", "1px solid #e8e8e8"],
                        minHeight: "100vh",
                        overflowY: "scroll",
                    }}
                >
                    <Typography
                        variant="subtitle1"
                        gutterBottom
                        fontSize="1.7rem"
                        color="black"
                        fontWeight="700"
                        textAlign="left"
                        mb="0"
                        lineHeight="1.5"
                        py="12px"
                    >
                        Hello from Sunset Beach
                    </Typography>

                    <Box
                        className="example-container"
                        sx={{
                            overflow: "hidden",
                            borderRadius: "20px"
                        }}
                    >
                        <Media />
                    </Box>

                    <Box
                        sx={{
                            textAlign: "right",
                            paddingY: "20px",
                            paddingX: "10px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <Box
                            sx={{
                                display: ["block", "flex", "flex", "flex"],
                                alignItems: "center"
                            }}
                        >
                            <Avatar
                                sx={{
                                    width: "55px",
                                    height: "55px",
                                }}
                                alt="Remy Sharp"
                                src="https://friendkit.cssninja.io/assets/img/avatars/jenna.png"
                            />

                            <Box
                                sx={{
                                    marginLeft: ["0px", "11px", "11px", "11px"],
                                    marginTop: ["10px", "0px", "0px", "0px"]
                                }}
                            >
                                <Typography
                                    variant="subtitle1"
                                    gutterBottom
                                    fontSize="17px"
                                    color="black"
                                    fontWeight="700"
                                    textAlign="left"
                                    mb="0"
                                >
                                    Dan Walker
                                </Typography>

                                <Typography
                                    variant="subtitle1"
                                    gutterBottom
                                    fontSize="14px"
                                    color="#757a91"
                                    textAlign="left"
                                    mb="0"
                                >
                                    July 26 2018, 01:03pm
                                </Typography>
                            </Box>
                        </Box>

                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: "15px"
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center"
                                }}
                            >
                                <FavoriteBorderIcon
                                    sx={{
                                        color: "black",
                                        fontSize: "25px"
                                    }}
                                />
                                <Typography
                                    variant="subtitle1"
                                    gutterBottom
                                    fontSize=".99rem"
                                    color="black"
                                    textAlign="left"
                                    mb="1px"
                                    ml="5px"
                                    lineHeight="1.5"
                                >
                                    33
                                </Typography>
                            </Box>

                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center"
                                }}
                            >
                                <ChatBubbleOutlineIcon
                                    sx={{
                                        color: "black",
                                        fontSize: "25px"
                                    }}
                                />
                                <Typography
                                    variant="subtitle1"
                                    gutterBottom
                                    fontSize=".99rem"
                                    color="black"
                                    textAlign="left"
                                    mb="1px"
                                    ml="5px"
                                    lineHeight="1.5"
                                >
                                    9
                                </Typography>
                            </Box>
                        </Box>
                    </Box>

                    <Box
                        className="post-content"
                    >
                        <Typography
                            variant="subtitle1"
                            gutterBottom
                            fontSize="19px"
                            color="black"
                            textAlign="left"
                            mb="0"
                            mt="10px"
                            lineHeight="1.5"
                        >
                            Yesterday with @Karen Miller and @Marvin Stemperd at
                            the #Rock'n'Rolla concert in LA. Was totally fantastic!
                            People were really excited about this one! Lorem ipsum dolor sit
                            amet, consectetur adipiscing elit.
                            <br></br>
                            <br></br>
                            Quid de Pythagora? Quae est
                            igitur causa istarum angustiarum? Non risu potius quam oratione eiciendum?
                            Duo Reges: constructio interrete. An haec ab eo non dicuntur?
                            Quae cum essent dicta, discessimus.
                            <br></br>
                            <br></br>
                            At enim hic etiam dolore. Idem iste, inquam, de voluptate quid
                            sentit? At enim sequor utilitatem. Iam in altera philosophiae
                            parte. Ut optime, secundum naturam affectum esse possit.
                            Hoc sic expositum dissimile est superiori.
                            At enim hic etiam dolore. Idem iste, inquam, de voluptate quid
                            sentit? At enim sequor utilitatem. Iam in altera philosophiae
                            parte. Ut optime, secundum naturam affectum esse possit.
                            Hoc sic expositum dissimile est superiori.
                        </Typography>
                    </Box>

                    <Box>
                        <CommentBase />
                    </Box>
                </Box>

                <Box
                    sx={{
                        width: ["100%", "100%", "30%", "30%"],
                        py: "27px"
                    }}
                >
                    <Typography
                        variant="subtitle1"
                        gutterBottom
                        fontSize="1.1rem"
                        color="#393a4f"
                        fontWeight="700"
                        textAlign="left"
                        mb="30px"
                        lineHeight="1.5"
                    >
                        You might like
                    </Typography>

                    <Box>
                        <SimillerPost />
                        <SimillerPost />
                        <SimillerPost />
                        <SimillerPost />
                        <SimillerPost />
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default PostDetailBase