import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';

const SearchResponsive = ({ SearchButtonClicked, setSearchButtonClicked }) => {
    return (
        <Box>
            <Paper
                component="form"
                sx={{
                    p: '2px 4px',
                    display: 'flex',
                    alignItems: 'center',
                    width: SearchButtonClicked ? "calc(100vw - 100px)" : 43,
                    bgcolor: "#f7f7f7",
                    borderColor: "#f7f7f7"
                }}
            >
                <IconButton
                    type="button"
                    sx={{ p: '10px' }}
                    aria-label="search"
                    onClick={() => setSearchButtonClicked(!SearchButtonClicked)}
                >
                    {!SearchButtonClicked ? <SearchIcon /> : <CloseIcon />}
                </IconButton>
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search What You Want"
                    inputProps={{ 'aria-label': 'search what you want' }}
                />
            </Paper>
        </Box>
    )
}

export default SearchResponsive