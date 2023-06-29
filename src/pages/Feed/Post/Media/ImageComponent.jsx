import React from 'react'
import Box from '@mui/material/Box';
import { BackendLink } from '../../../../Util/BackEndLink';

const ImageComponent = ({ File, Width, Height }) => {
    return (
        <Box
            className="post-image"
        >
            <img
                src={BackendLink + File}
                style={{
                    borderRadius: ".75rem",
                    width: Width,
                    height: Height
                }}
            />
        </Box>
    )
}

export default ImageComponent