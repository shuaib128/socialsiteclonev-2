import React from 'react';
import { createRoot } from 'react-dom/client';
import PostData from "../../../Util/Data/PostData";
import { sendVideoChunks } from "./sendVideoChunks";
import PostUploadingProgress from '../PostCreate/PostUploadingProgress/PostUploadingProgress';
import {
    retrieveDataFromIndexedDB,
    clearDataFromIndexedDB,
    modifyDataToIndexedDB
} from "../StorePostData/indexedDB";

// Initialize progress tracker
let progressTracker = {
    totalFiles: 0,
    uploadedFiles: 0,
    progressPercentage: 0
};

export const transferFiles = async (setProgress) => {
    try {
        const data = await retrieveDataFromIndexedDB();
        const mediaFiles = data[0].files;
        console.log(mediaFiles);
        const postID = data[1].post_id;
        const promises = [];

        mediaFiles.forEach(file => {
            progressTracker.totalFiles += file.type === "vid" ? file.videoChunks.length : 1;
        });

        for (let index = 0; index < mediaFiles.length; index++) {
            const file = mediaFiles[index];

            if (file.type === "img") {
                const Data = {
                    postID: postID,
                    imageBase64: file.dataUrl,
                };

                try {
                    const response = await PostData(
                        "POST",
                        "/api/posts/post/add/media/image/",
                        JSON.stringify(Data)
                    );

                    // After successfully uploading an image, update the progress
                    progressTracker.uploadedFiles++;
                    progressTracker.progressPercentage = (progressTracker.uploadedFiles / progressTracker.totalFiles) * 100;

                    /**Set progress for progress tracker */
                    setProgress(progressTracker.progressPercentage)

                } catch (error) {
                    console.error(error);
                    throw error;
                }

                mediaFiles.splice(index, 1);
                index--;
                modifyDataToIndexedDB(mediaFiles);

                // Select the div element where you want to render the component
                const container = document.querySelector('.post-progress');

                // Check if the container element exists
                if (container) {
                    const root = createRoot(container);
                    root.render(<PostUploadingProgress Progress={progressTracker.progressPercentage} />);
                } else {
                    console.error('Container element not found in the DOM.');
                }
            } else if (file.type === "vid") {
                promises.push(
                    new Promise((resolve) => {
                        sendVideoChunks(
                            postID,
                            resolve,
                            file,
                            mediaFiles,
                            progressTracker,
                            setProgress
                        );
                    })
                );
            }
        }

        await Promise.all(promises);
        await clearDataFromIndexedDB();
        return;
    } catch (error) {
        console.error("Data retrieval error:", error);
        throw error;
    }
};