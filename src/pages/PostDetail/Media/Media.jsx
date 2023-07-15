import React, { useRef, Fragment } from 'react';
import Box from '@mui/material/Box';
import Glide from 'react-glidejs';
import 'react-glidejs/dist/index.css';
import { BackendLink } from "../../../Util/BackEndLink";
import VideoComponent from '../../Feed/Post/Media/VideoComponent';
import { imageOrVideo } from '../../../Util/ImageOrVideo/ImageOrVideo'

const Media = ({ MediaFiles }) => {
    const gliderRef = useRef(null);

    return (
        <Box
            sx={{
                height: "100%"
            }}
        >
            <Glide
                ref={gliderRef}
                throttle={0}
                type="slider"
                customSlideAnimation={{
                    timeout: 500,
                    classNames: 'fade',
                }}
                slideClassName="slider__frame"
                focusAt="center"
                gap={10}
            >

                {MediaFiles.map((file, _) => {
                    if (imageOrVideo(file.file) === "image") {
                        return (
                            <Fragment>
                                <img
                                    style={{ height: "100%", width: "100%", objectFit: "contain" }}
                                    src={BackendLink + file.file}
                                    alt="fragsimage"
                                />
                            </Fragment>
                        )
                    } else if (imageOrVideo(file.file) === "video") {
                        return (
                            <VideoComponent
                                File={file}
                                Width={"100%"}
                                Height={"100%"}
                            />
                        )
                    }
                })}
            </Glide>
        </Box>
    );
};

export default Media