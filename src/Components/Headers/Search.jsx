import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
    return (
        <Paper
            component="form"
            sx={{
                p: '2px 4px', 
                display: 'flex', 
                alignItems: 'center', 
                width: 350,
                bgcolor: "#f7f7f7",
                borderColor: "#f7f7f7"
            }}
        >
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search What You Want"
                inputProps={{ 'aria-label': 'search what you want' }}
            />
        </Paper>
    )
}

export default Search