import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ButtonOutLine from '../../../Components/Buttons/ButtonOutLine';

const FilterBase = () => {
    const submitComment = () => {

    }

    return (
        <Box
            className="filter-base"
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "white",
                padding: "10px 20px",
                borderRadius: ".75rem",
                marginBottom: "20px"
            }}
        >
            <Box>
                <Typography
                    mb={0}
                    variant="body2"
                    gutterBottom
                    fontSize="17px"
                >
                    Posts
                </Typography>
            </Box>

            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "7px"
                }}
            >
                <ButtonOutLine
                    ButtonText="Recent"
                    ButtonHeight="40px"
                    OnClickHandler={submitComment}
                    varient="outlined"
                    marginTop="0px"
                />
                <ButtonOutLine
                    ButtonText="popular"
                    ButtonHeight="40px"
                    OnClickHandler={submitComment}
                    varient="outlined"
                    marginTop="0px"
                />
            </Box>
        </Box>
    )
}

export default FilterBase