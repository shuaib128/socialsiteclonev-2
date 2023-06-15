import * as React from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

export default function CommentHeader() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box
            sx={{
                textAlign: "right",
                paddingY: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center"
                }}
            >
                <Avatar
                    sx={{
                        width: "45px",
                        height: "45px",
                    }}
                    alt="Remy Sharp"
                    src="https://friendkit.cssninja.io/assets/img/avatars/jenna.png"
                />

                <Box
                    sx={{
                        marginLeft: "11px"
                    }}
                >
                    <Typography
                        variant="subtitle1"
                        gutterBottom
                        fontSize="17px"
                        color="black"
                        textAlign="left"
                        fontWeight="700"
                        mb="0"
                    >
                        Dan Walker
                    </Typography>

                    <Typography
                        variant="subtitle1"
                        gutterBottom
                        fontSize="14px"
                        color="#757a91"
                        textAlign="left"
                        mb="0"
                    >
                        July 26 2018, 01:03pm
                    </Typography>
                </Box>
            </Box>

            <IconButton
                id="fade-button"
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                type="button"
                sx={{ p: '10px', color: "#757a91" }}
                aria-label="search"
            >
                <MoreVertIcon />
            </IconButton>
            <Menu
                id="fade-menu"
                MenuListProps={{
                    'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
        </Box>
    );
}