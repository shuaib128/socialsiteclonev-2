import React from 'react'
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import TurnedInNotOutlinedIcon from '@mui/icons-material/TurnedInNotOutlined';


const Story = ({ name, cat, logo }) => {
    return (
        <Box
            sx={{
                textAlign: "right",
                padding: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: "1px solid #e8e8e8",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center"
                }}
            >
                <Avatar
                    alt="Travis Howard"
                    src={logo}
                    sx={{
                        width: 47, 
                        height: 47, 
                        border: "3px solid #888da8",
                        cursor: "pointer"
                    }}
                />

                <Box>
                    <Typography
                        variant="subtitle1"
                        gutterBottom
                        color="black"
                        textAlign="left"
                        fontSize="17px"
                        mb="0px"
                        ml="10px"
                    >
                        {name}
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        gutterBottom
                        color="#757a91"
                        textAlign="left"
                        fontSize="13px"
                        mb="0px"
                        ml="10px"
                    >
                        {cat}
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default Story