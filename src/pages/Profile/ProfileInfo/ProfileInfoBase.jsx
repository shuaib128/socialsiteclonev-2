import React, { useState } from 'react'
import Box from '@mui/material/Box';
import RecomendedPages from '../../Feed/RecomendedPages/RecomendedPages';
import Typography from '@mui/material/Typography';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';

const ProfileInfoBase = ({ Author }) => {
    const [Showinginfo, setShowinginfo] = useState(false)

    return (
        <Box>
            <Box
                sx={{
                    borderRadius: "10px",
                    border: "1px solid #e8e8e8",
                    backgroundColor: "white",
                    padding: "16px"
                }}
            >
                <Typography
                    variant="subtitle1"
                    gutterBottom
                    fontSize="16px"
                    color="#757a91"
                    textAlign="left"
                    mb="10px"
                >
                    Info
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        marginBottom: "10px"
                    }}
                >
                    <PermIdentityOutlinedIcon />

                    <Typography
                        variant="subtitle1"
                        gutterBottom
                        fontSize=".9rem"
                        color="black"
                        textAlign="left"
                        mb="0"
                        lineHeight="1.3"
                        fontWeight="600"
                    >
                        {Author.followers && Author.followers.length} Followers
                    </Typography>
                </Box>

                <Box>
                    {Author.bio && Author.bio !== "" ?
                        <Typography
                            variant="subtitle1"
                            gutterBottom
                            fontSize=".9rem"
                            color="black"
                            textAlign="left"
                            mb="0"
                            lineHeight="1.3"
                        >
                            {!Showinginfo && Author.bio.length > 100 ?
                                `${Author.bio.slice(0, 100)}...` :
                                `${Author.bio}`
                            }
                            {"  "}

                            {Author.bio.length > 100 ?
                                <span
                                    style={{
                                        fontWeight: "600",
                                        cursor: "pointer"
                                    }}
                                    onClick={() => setShowinginfo(!Showinginfo)}
                                >
                                    {!Showinginfo ? "Show More" : "Show Less"}
                                </span> :
                                <Box></Box>
                            }
                        </Typography> :
                        <Box></Box>
                    }
                </Box>
            </Box>

            <Box
                sx={{
                    marginTop: "20px"
                }}
            >
                <RecomendedPages />
            </Box>
        </Box>
    )
}

export default ProfileInfoBase