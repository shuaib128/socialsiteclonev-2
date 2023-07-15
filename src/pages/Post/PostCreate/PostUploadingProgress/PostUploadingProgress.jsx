import React from 'react'
import Box from '@mui/material/Box'
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import LinearWithValueLabel from './Progress'
import ButtonOutLine from '../../../../Components/Buttons/ButtonOutLine';

const PostUploadingProgress = ({Progress}) => {
    const cancelButtonHandler = () => {
    }

    return (
        <Box
            sx={{
                textAlign: "left"
            }}
        >
            <Alert severity="info" sx={{ display: "block" }}>
                <AlertTitle><strong>Just a minute...</strong></AlertTitle>
                Your file is uploading right now. Just give us a second to finish your upload.

                <Box
                    sx={{
                        mt: "15px"
                    }}
                >
                    <LinearWithValueLabel
                        Progress={Progress}
                    />

                    <Box sx={{ width: "100px", mt: "-10px" }}>
                        <ButtonOutLine
                            ButtonText="cancel"
                            OnClickHandler={cancelButtonHandler}
                            varient="contained"
                        />
                    </Box>
                </Box>
            </Alert>
        </Box>
    )
}

export default PostUploadingProgress