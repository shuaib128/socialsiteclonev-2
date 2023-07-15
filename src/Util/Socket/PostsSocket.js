import { BackendLinkWebSocket } from '../BackEndLink';

export const PostsSocket = (setPosts) => {
    /**get updates post from web sockets */
    const ws = new WebSocket(`${BackendLinkWebSocket}/ws/posts/likes/`);
    ws.onopen = () => {
        console.log('Connected to the websocket');
    };
    ws.onmessage = (event) => {
        /**
         * Get the new Post and then change the like count
         */
        const data = JSON.parse(event.data);
        const fetchedPost = data.post
        setPosts(prevData => ({
            ...prevData,
            [Number(fetchedPost.id)]: fetchedPost
        }))
    };
    ws.onclose = () => {
        console.log('Disconnected from the websocket');
    };

    return () => {
        ws.close();
    };
}