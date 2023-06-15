import { BackendLink } from "../../../Util/BackEndLink";
import PostData from "../../../Util/Data/PostData";

export const sendVideoChunks = async (username, postID, resolve, file) => {
    const CHUNK_SIZE = 1024 * 1024; // 1MB
    const SIZE = file.size;
    const NUM_CHUNKS = Math.floor(SIZE / CHUNK_SIZE) + 1;
    let start = 0;
    let end = CHUNK_SIZE;
    let uploadedChunks = 0;
    const currentDate = new Date().toLocaleString();
    const randomString = [...Array(10)].map(() => Math.random().toString(36)[2]).join('');
    const filename = `${postID}-${username}-${currentDate}-${randomString}-${file.name}`

    for (let i = 0; i < NUM_CHUNKS; i++) {
        const chunk = file.slice(start, end);
        const formData = new FormData();
        formData.append('filename', filename);
        formData.append('chunk', chunk);

        try {
            const response = await fetch(`${BackendLink}/api/posts/post/add/media/video/`, {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                // Handle error response
                throw new Error('Chunk upload failed');
            }

            uploadedChunks++;

            /**Trigger after alll the chunk has been pushed and saved */
            if (uploadedChunks === NUM_CHUNKS) {
                // All chunks uploaded successfully
                const finalResponse = await response.json();

                const DATA = {
                    postID: postID,
                    videoID: finalResponse.id
                }
                
                PostData(
                    "POST",
                    "/api/posts/post/add/media/video/finalize/",
                    JSON.stringify(DATA)
                )
              }
            
        } catch (error) {
            // Handle error
            console.error(error);
            return;
        }

        start = end;
        end = start + CHUNK_SIZE;
    }

    // All chunks uploaded successfully
    console.log('File upload complete');
    resolve();
}