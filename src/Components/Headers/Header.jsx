import React, { useState } from 'react'
import Box from '@mui/material/Box';
import { SecondBGColor, ThirdBGColor } from '../../Util/Colors/Colors';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import AppsIcon from '@mui/icons-material/Apps';
import Search from './Search';
import { useWindowWidth } from '../../Util/ScreenWidth/ScreenSize';
import SearchResponsive from './SearchResponsive';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import MenuBox from './Menu';
import { useSelector } from 'react-redux';
import { BackendLink } from '../../Util/BackEndLink';

const Header = () => {
    /**Page Author */
    const author = useSelector(state => state.Author.Author)
    const [SearchButtonClicked, setSearchButtonClicked] = useState(false)
    let screenWidth = useWindowWidth()

    /**Menu stuff */
    const [anchorEl, setAnchorEl] = useState(null);
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
                backgroundColor: SecondBGColor,
                position: "fixed",
                left: 0,
                right: 0,
                top: 0,
                zIndex: "10",
                borderBottom: "1px solid #e8e8e8"
            }}
        >
            <Container
                maxWidth="xl"
                sx={{
                    paddingY: "13px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                {!SearchButtonClicked ?
                    <Box
                        sx={{
                            width: "fit-content",
                            display: "flex",
                            alignItems: "center"
                        }}
                    >
                        <Link to="/">
                            <img
                                src="/Images/logo.svg"
                                alt="logo"
                                style={{
                                    display: "block",
                                    margin: "auto",
                                    width: "40px",
                                    height: "40px"
                                }}
                            />
                        </Link>

                        <Box
                            sx={{
                                marginLeft: ["0px", "0px", "50px"],
                                display: "flex",
                                gap: "5px"
                            }}
                        >
                            <NotificationsNoneIcon
                                sx={{
                                    color: "#999",
                                    cursor: "pointer",
                                    fontSize: '25px',
                                    padding: "10px",
                                    borderRadius: "8px",
                                    transition: ".4s",
                                    "&:hover": {
                                        backgroundColor: ThirdBGColor,
                                        color: "#fff"
                                    }
                                }}
                            />

                            <MailOutlineIcon
                                sx={{
                                    color: "#999",
                                    cursor: "pointer",
                                    fontSize: '25px',
                                    padding: "10px",
                                    borderRadius: "8px",
                                    transition: ".4s",
                                    "&:hover": {
                                        backgroundColor: ThirdBGColor,
                                        color: "#fff"
                                    }
                                }}
                            />

                            <AppsIcon
                                sx={{
                                    color: "#999",
                                    cursor: "pointer",
                                    fontSize: '25px',
                                    padding: "10px",
                                    borderRadius: "8px",
                                    transition: ".4s",
                                    "&:hover": {
                                        backgroundColor: ThirdBGColor,
                                        color: "#fff"
                                    }
                                }}
                            />
                        </Box>
                    </Box> :
                    <Box></Box>
                }

                <Box
                    sx={{
                        width: "fit-content",
                        display: "flex",
                        alignItems: "center"
                    }}
                >
                    {
                        screenWidth > 850 ?
                            <Search /> :
                            <SearchResponsive
                                SearchButtonClicked={SearchButtonClicked}
                                setSearchButtonClicked={setSearchButtonClicked}
                            />
                    }
                    <Box>
                        <Tooltip title="Account settings">
                            <IconButton
                                onClick={handleClick}
                                size="small"
                                sx={{ ml: 2, marginLeft: "23px" }}
                                aria-controls={open ? 'account-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                            >
                                <Avatar
                                    sx={{
                                        width: "40px",
                                        height: "40px",
                                    }}
                                    alt={author.firstname + " " + author.lastname}
                                    src={BackendLink + author.profile_picture}
                                />
                            </IconButton>
                        </Tooltip>
                    </Box>

                    <MenuBox
                        anchorEl={anchorEl}
                        open={open}
                        handleClose={handleClose}
                    />
                </Box>
            </Container>
        </Box>
    )
}

export default Header