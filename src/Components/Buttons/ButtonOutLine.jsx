import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';

const ButtonOutLine = ({
    ButtonText,
    ButtonHeight,
    OnClickHandler,
    IsDesabled = false,
    IsLoading = false,
    varient = "outlined",
    marginTop = "15px",
}) => {
    return (
        <Box>
            {!IsLoading ?
                <Button
                    className="main-button"
                    variant={varient}
                    fullWidth
                    disabled={IsDesabled}
                    onClick={() => OnClickHandler()}
                    sx={{
                        display: "block",
                        margin: "0 auto",
                        marginTop: { marginTop },
                        height: ButtonHeight
                    }}
                >
                    {ButtonText}
                </Button> :
                <Box></Box>
            }

            {IsLoading ?
                <LoadingButton
                    loading
                    variant="outlined"
                    fullWidth
                    sx={{
                        display: "block",
                        margin: "0 auto",
                        marginTop: "0px",
                        height: ButtonHeight
                    }}
                >
                    {ButtonText}
                </LoadingButton> :
                <Box></Box>
            }
        </Box>
    )
}

export default ButtonOutLine