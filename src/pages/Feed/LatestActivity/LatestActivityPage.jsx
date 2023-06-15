import React from 'react'
import Box from '@mui/material/Box';
import Settings from "./Settings"
import User from './User';

const LatestActivityPage = () => {
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

            <User
                name="Fast Pizza"
                cat="Pizza & Fast Food"
                logo="https://friendkit.cssninja.io/assets/img/avatars/hanzo.svg"
            />

            <User
                name="Lonely Droid"
                cat="Technology"
                logo="https://friendkit.cssninja.io/assets/img/avatars/milly.jpg"
            />

            <User
                name="Meta Movies"
                cat="Movies / Entertainment"
                logo="https://friendkit.cssninja.io/assets/img/vector/icons/logos/metamovies.svg"
            />

            <User
                name="Fast Pizza"
                cat="Pizza & Fast Food"
                logo="https://friendkit.cssninja.io/assets/img/avatars/hanzo.svg"
            />
        </Box>
    )
}

export default LatestActivityPage