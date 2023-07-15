import React from 'react';
import { createRoot } from 'react-dom/client';
import { BackendLink } from "../../../Util/BackEndLink";
import PostData from "../../../Util/Data/PostData";
import { modifyDataToIndexedDB } from "../StorePostData/indexedDB";
import PostUploadingProgress from '../PostCreate/PostUploadingProgress/PostUploadingProgress';
import { GetToken } from '../../../Util/Token/GetToken';

/**
 * Sends video chunks to the backend server for uploading.
 * @param {string} postID - The ID of the post.
 * @param {function} resolve - The function to call when all chunks are uploaded.
 * @param {object} file - The file containing the video chunks and metadata.
 */
export const sendVideoChunks = async (postID, resolve, file, mediaFiles, progressTracker, setProgress) => {
    const videoChunks = file.videoChunks;
    const filename = file.filename;

    for (let i = 0; i < videoChunks.length; i++) {
        const chunk = videoChunks[i].chunk;
        const formData = new FormData();
        formData.append('filename', filename);
        formData.append('chunk', chunk);

        try {
            const accessToken = GetToken().accessToken;
            const response = await fetch(`${BackendLink}/api/posts/post/add/media/video/`, {
                method: 'POST',
                body: formData,
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            });

            if (!response.ok) {
                throw new Error('Chunk upload failed');
            } else {
                videoChunks.splice(i, 1);
                i--;

                modifyDataToIndexedDB(mediaFiles);

                // After successfully uploading a chunk, update the progress
                progressTracker.uploadedFiles++;
                progressTracker.progressPercentage = (progressTracker.uploadedFiles / progressTracker.totalFiles) * 100;

                /**Set progress for progress tracker */
                setProgress(progressTracker.progressPercentage)

                // Select the div element where you want to render the component
                const container = document.querySelector('.post-progress');

                // Check if the container element exists
                if (container) {
                    const root = createRoot(container);
                    root.render(<PostUploadingProgress Progress={progressTracker.progressPercentage} />);
                } else {
                    console.error('Container element not found in the DOM.');
                }

                if (videoChunks.length === 0) {
                    const finalResponse = await response.json();

                    const DATA = {
                        postID: postID,
                        videoID: finalResponse.id
                    };

                    PostData(
                        "POST",
                        "/api/posts/post/add/media/video/finalize/",
                        JSON.stringify(DATA)
                    );
                }
            }
        } catch (error) {
            console.error(error);
            return;
        }
    }
    resolve();
};