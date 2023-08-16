import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

export default function PostSkeleton() {
    return (
        <Stack spacing={1}>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    mt: "60px"
                }}
            >
                <Skeleton variant="circular" width={45} height={45} />
                <Box sx={{ width: "50%", marginLeft: "15px" }}>
                    <Skeleton variant="text" sx={{ fontSize: '1rem', width: "100%", height: "17px" }} />
                    <Skeleton variant="text" sx={{ fontSize: '1rem', width: "50%", height: "17px" }} />
                </Box>
            </Box>

            <Skeleton variant="rectangular" width="100%" height="400px" sx={{ borderRadius: "5px" }} />

            <Box
                sx={{
                    display: "flex",
                    alignItems: "center"
                }}
            >
                <Skeleton variant="circular" width={40} height={40} />
                <Box sx={{ width: "25%", marginLeft: "15px" }}>
                    <Skeleton variant="text" sx={{ fontSize: '1rem', width: "100%", height: "17px" }} />
                    <Skeleton variant="text" sx={{ fontSize: '1rem', width: "50%", height: "17px" }} />
                </Box>
            </Box>
        </Stack>
    );
}