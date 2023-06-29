import React from 'react'
import { imageOrVideo } from '../../../../Util/ImageOrVideo/ImageOrVideo';
import VideoComponent from './VideoComponent';
import ImageComponent from './ImageComponent';

const ImageOrVideo = ({ File, Width, Height }) => {

    if (imageOrVideo(File.file) === "image") {
        return (
            <ImageComponent
                File={File.file}
                Width={Width}
                Height={Height}
            />
        )
    } else if (imageOrVideo(File.file) === "video") {
        return (
            <VideoComponent
                File={File}
                Width={Width}
                Height={Height}
            />
        )
    }
}

export default ImageOrVideo