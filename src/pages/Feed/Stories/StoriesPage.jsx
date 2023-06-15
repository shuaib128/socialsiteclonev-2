import React from 'react'
import Box from '@mui/material/Box';
import Settings from "./Settings"
import Story from './Story';
import CreateStory from './CreateStory';

const StoriesPage = () => {
    return (
        <Box
            sx={{
                width: "100%",
                marginBottom: "1.5rem",
                borderRadius: "10px",
                border: "1px solid #e8e8e8",
                backgroundColor: "white",
            }}
        >
            <Settings />
            <CreateStory />

            <Story
                name="Fast Pizza"
                cat="Pizza & Fast Food"
                logo="https://friendkit.cssninja.io/assets/img/avatars/dan.jpg"
            />

            <Story
                name="Lonely Droid"
                cat="Technology"
                logo="https://friendkit.cssninja.io/assets/img/vector/icons/logos/lonelydroid.svg"
            />

            <Story
                name="Meta Movies"
                cat="Movies / Entertainment"
                logo="https://friendkit.cssninja.io/assets/img/avatars/elise.jpg"
            />
        </Box>
    )
}

export default StoriesPage