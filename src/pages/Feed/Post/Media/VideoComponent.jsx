import React, { useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import { BackendLink } from '../../../../Util/BackEndLink';
import Hls from 'hls.js';

const VideoComponent = ({ File, Width, Height }) => {
    const hlsUrl = BackendLink + File.hls_url;
    const mp4Url = BackendLink + File.file;
    const videoRef = useRef(null);
    const hlsRef = useRef(null);
    const observerRef = useRef(null);
    const [isHlsPlayable, setIsHlsPlayable] = useState(false);

    useEffect(() => {
        /**Check if the HLS is ready to play */
        const checkHlsSupport = () => {
            if (!Hls.isSupported()) {
                setIsHlsPlayable(false);
                return;
            }

            const hls = new Hls();
            hls.loadSource(hlsUrl);
            hls.on(Hls.Events.MANIFEST_PARSED, () => {
                setIsHlsPlayable(true);
            });
            hls.on(Hls.Events.ERROR, () => {
                setIsHlsPlayable(false);
            });
        };
        checkHlsSupport();

        // Create an IntersectionObserver to monitor the visibility of the video component
        observerRef.current = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    if (isHlsPlayable) {
                        if (!hlsRef.current) {
                            const hls = new Hls();
                            hlsRef.current = hls;
                            hls.loadSource(hlsUrl);
                            hls.attachMedia(videoRef.current);
                        }
                    } else if (!videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
                        videoRef.current.src = mp4Url;
                    } else {
                        videoRef.current.src = hlsUrl;
                    }
                } else {
                    if (hlsRef.current) {
                        hlsRef.current.destroy();
                        hlsRef.current = null;
                    }
                    if (videoRef.current) {
                        videoRef.current.removeAttribute('src');
                        videoRef.current.load();
                    }
                }
            });
        }, { threshold: 0.1 });

        // Start observing the video component
        observerRef.current.observe(videoRef.current);

        // Clean up resources when the component unmounts
        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
            if (hlsRef.current) {
                hlsRef.current.destroy();
            }
        };
    }, [hlsUrl, mp4Url, isHlsPlayable]);

    return (
        <Box
            className="video-player"
            sx={{
                backgroundColor: "rgba(0, 0, 0, 0.4)",
                width: Width,
                height: Height,
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            {isHlsPlayable ? (
                <video
                    ref={videoRef}
                    controls
                />
            ) : (
                <video
                    ref={videoRef}
                    controls
                    src={mp4Url}
                />
            )}
        </Box>
    );
};

export default VideoComponent;