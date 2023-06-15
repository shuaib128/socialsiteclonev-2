import PostData from "../../../Util/Data/PostData";
import { resizeImageFile } from "../../../Util/Compression/imageCompress";
import { imageOrVideo } from "../../../Util/ImageOrVideo/ImageOrVideo";
import { sendVideoChunks } from "./sendVideoChunks";
import { retrieveDataFromIndexedDB, clearDataFromIndexedDB } from "../StorePostData/indexedDB";

export const transferFiles = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const data = await retrieveDataFromIndexedDB();
            const mediaFiles = data[0].files;
            const postID = data[1].post_id;
            const username = data[2].author_username;

            const uploadMediaFile = async (file, index) => {
                if (index >= mediaFiles.length) {
                    clearDataFromIndexedDB();
                    resolve();
                    return;
                }

                if (imageOrVideo(file.name) === "image") {
                    try {
                        const resizedFile = await resizeImageFile(file, 840, 680);
                        const fileReader = new FileReader();

                        fileReader.readAsDataURL(resizedFile);

                        fileReader.addEventListener("load", async (event) => {
                            const dataUrl = event.target.result;
                            const Data = {
                                postID: postID,
                                imageBase64: dataUrl,
                            };

                            try {
                                const response = await PostData(
                                    "POST",
                                    "/api/posts/post/add/media/image/",
                                    JSON.stringify(Data)
                                );

                                uploadMediaFile(mediaFiles[index + 1], index + 1);
                            } catch (error) {
                                console.error(error);
                                reject(error);
                            }
                        });
                    } catch (error) {
                        console.error(error);
                        reject(error);
                    }
                } else if (imageOrVideo(file.name) === "video") {
                    await new Promise((resolve) => {
                        sendVideoChunks(username, postID, resolve, file);
                    });

                    uploadMediaFile(mediaFiles[index + 1], index + 1);
                }
            };

            await uploadMediaFile(mediaFiles[0], 0);
        } catch (error) {
            console.error('Data retrieval error:', error);
            reject(error);
        }
    });
};