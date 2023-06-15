import * as React from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { BackendLink } from '../../../Util/BackEndLink';
import { dateTime } from '../../../Util/Date/DateTime';

export default function PostHeader(props) {
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
                padding: "16px",
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
                        width: "55px",
                        height: "55px",
                    }}
                    alt="Remy Sharp"
                    src={BackendLink + props.Author.profile_picture}
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
                        mb="0"
                        lineHeight={1}
                    >
                        {props.Author.firstname} {props.Author.lastname}
                    </Typography>

                    <Typography
                        variant="subtitle1"
                        gutterBottom
                        fontSize="13px"
                        color="#757a91"
                        textAlign="left"
                        mb="0"
                    >
                        @{props.Author.username}
                    </Typography>

                    <Typography
                        variant="subtitle1"
                        gutterBottom
                        fontSize="14px"
                        color="#757a91"
                        textAlign="left"
                        mb="0"
                    >
                        {dateTime(props.DatePosted)}
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