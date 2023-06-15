import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ButtonOutLine from "../../../Components/Buttons/ButtonOutLine"
import { SecondBGColor } from '../../../Util/Colors/Colors';

const AccountType = ({ Image, Title, Des, setBlcokState, setBarProgress }) => {
    function SetBlockStateHandler() {
        setBarProgress(30)
        setBlcokState(true)
    }

    return (
        <Box
            className="signupbox"
            sx={{
                backgroundColor: SecondBGColor,
                width: ["80%", "300px", "300px", "300px"],
                borderRadius: "8px",
                border: "1px solid #e8e8e8",
                padding: "30px",
                paddingTop: "0px",
                marginTop: ["30px", "30px", "0px", "0px"]
            }}
        >
            <img
                className='signupblockimage'
                src={Image}
                alt='blockimg'
                style={{
                    margin: "0 auto",
                    width: '350px',
                    height: "auto",
                    marginTop: "-42px",
                    display: "block",
                }}
            />

            <Typography
                variant="subtitle1"
                fontSize="19px"
                gutterBottom
                textAlign="center"
            >
                {Title}
            </Typography>

            <Typography
                variant="subtitle2"
                gutterBottom
                textAlign="center"
                color="#a2a5b9"
            >
                {Des}
            </Typography>

            <Box>
                <ButtonOutLine
                    ButtonText="Continue"
                    ButtonHeight="40px"
                    OnClickHandler={SetBlockStateHandler}
                />
            </Box>
        </Box>
    )
}

export default AccountType