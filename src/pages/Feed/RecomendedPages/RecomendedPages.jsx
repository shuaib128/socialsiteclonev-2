import React from 'react'
import Box from '@mui/material/Box';
import Settings from "./Settings"
import Page from './Page';

const RecomendedPages = () => {
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

            <Page
                name="Fast Pizza"
                cat="Pizza & Fast Food"
                logo="https://friendkit.cssninja.io/assets/img/vector/icons/logos/fastpizza.svg"
            />

            <Page
                name="Lonely Droid"
                cat="Technology"
                logo="https://friendkit.cssninja.io/assets/img/vector/icons/logos/lonelydroid.svg"
            />

            <Page
                name="Meta Movies"
                cat="Movies / Entertainment"
                logo="https://friendkit.cssninja.io/assets/img/vector/icons/logos/metamovies.svg"
            />

            <Page
                name="Nuclearjs"
                cat="Technology"
                logo="https://friendkit.cssninja.io/assets/img/vector/icons/logos/nuclearjs.svg"
            />

            <Page
                name="Slicer"
                cat="Web / Design"
                logo="https://friendkit.cssninja.io/assets/img/vector/icons/logos/slicer.svg"
            />
        </Box>
    )
}

export default RecomendedPages