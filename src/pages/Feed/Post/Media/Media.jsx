import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ImageOrVideo from './ImageOrVideo';

const Media = (props) => {
    const media = props.Media
    const media_length = media.length

    return (
        <Box
            sx={{
                padding: "16px",
                display: "flex",
                alignItems: "center",
                gap: ".7rem",
                height: media_length === 1 ? "420px"
                    : media_length === 2 ? "350px" :
                        "500px"
            }}
        >
            {media_length === 1 ?
                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        gap: ".7rem",
                        height: "100%"
                    }}
                >
                    <ImageOrVideo
                        File={media[0]}
                        Width="100%"
                        Height="100%"
                    />
                </Box> : media_length === 2 ?
                    <Box
                        sx={{
                            width: "100%",
                            display: "flex",
                            gap: ".7rem",
                            height: '100%'
                        }}
                    >
                        {media.map((media, _) => {
                            return (
                                <ImageOrVideo
                                    key={media.id}
                                    File={media}
                                    Width='49%'
                                    Height="100%"
                                />
                            )
                        })}
                    </Box> : media_length > 2 && media_length <= 5 ?
                        <Box
                            sx={{
                                width: "100%",
                                display: "flex",
                                gap: ".7rem"
                            }}
                        >
                            <Box
                                sx={{
                                    width: "60%",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: ".7rem"
                                }}
                            >
                                {media.slice(0, 2).map((media, index) => {
                                    return (
                                        <ImageOrVideo
                                            key={media.id}
                                            File={media}
                                            Width='100%'
                                            Height="250px"
                                        />
                                    )
                                })}
                            </Box>

                            <Box
                                sx={{
                                    width: "40%",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: ".7rem"
                                }}
                            >
                                {media.slice(2).map((media, index) => {
                                    return (
                                        <ImageOrVideo
                                            key={media.id}
                                            File={media}
                                            Width='100%'
                                            Height="163px"
                                        />
                                    )
                                })}
                            </Box>
                        </Box> :
                        <Box
                            sx={{
                                width: "100%",
                                display: "flex",
                                gap: ".7rem"
                            }}
                        >
                            <Box
                                sx={{
                                    width: "60%",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: ".7rem"
                                }}
                            >
                                {media.slice(0, 2).map((media, index) => {
                                    return (
                                        <ImageOrVideo
                                            key={media.id}
                                            File={media}
                                            Width='100%'
                                            Height="250px"
                                        />
                                    )
                                })}
                            </Box>

                            <Box
                                sx={{
                                    width: "40%",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: ".7rem"
                                }}
                            >
                                {media.slice(2, 4).map((media, index) => {
                                    return (
                                        <ImageOrVideo
                                            key={media.id}
                                            File={media}
                                            Width='100%'
                                            Height="163px"
                                        />
                                    )
                                })}
                                <Box
                                    sx={{
                                        position: "relative",
                                    }}
                                >
                                    <ImageOrVideo
                                        File={media[0]}
                                        Width="100%"
                                        Height="163px"
                                    />

                                    <Box
                                        sx={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            backgroundColor: "rgba(0, 0, 0, 0.4)",
                                            width: "100%",
                                            height: "98%",
                                            borderRadius: ".75rem",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <Typography
                                            variant="subtitle1"
                                            gutterBottom
                                            fontSize="20px"
                                            color="white"
                                            textAlign="center"
                                            mb="0"
                                            lineHeight="1.5"
                                            sx={{

                                            }}
                                        >
                                            +{media.slice(5).length}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
            }
        </Box>
    )
}

export default Media