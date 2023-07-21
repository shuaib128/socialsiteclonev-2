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
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function PostHeader(props) {
    const Author = props.Post.auhtor
    const navigate = useNavigate()
    const author = useSelector(state => state.Author.Author)
    const isAuthor = author.id === Author.id
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const userNameClickHandler = () => {
        navigate(`/profile/${Author.id}`)
    }

    /**Handle edit post button click */
    const editPostButtonHandler = (postId) => {
        setAnchorEl(null);

        navigate(`/post/edit/${postId}`)
    }

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
                    onClick={() => userNameClickHandler()}
                    sx={{
                        width: "55px",
                        height: "55px",
                    }}
                    alt="Remy Sharp"
                    src={BackendLink + Author.profile_picture}
                />

                <Box
                    sx={{
                        marginLeft: "11px"
                    }}
                    onClick={() => userNameClickHandler()}
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
                        {Author.firstname} {Author.lastname}
                    </Typography>

                    <Typography
                        variant="subtitle1"
                        gutterBottom
                        fontSize="13px"
                        color="#757a91"
                        textAlign="left"
                        mb="0"
                    >
                        @{Author.username}
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
                {isAuthor ?
                    <MenuItem onClick={() => editPostButtonHandler(props.Post.id)}>Edit Post</MenuItem> :
                    ""
                }
                <MenuItem onClick={handleClose}>Archive</MenuItem>
                <MenuItem onClick={handleClose}>Share</MenuItem>
            </Menu>
        </Box>
    );
}