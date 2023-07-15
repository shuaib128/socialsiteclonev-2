import React from 'react'
import { BackendLink } from '../../../../Util/BackEndLink';

const ImageComponent = ({ File, Width, Height }) => {
    return (
        <img
            src={BackendLink + File}
            style={{
                borderRadius: ".75rem",
                width: Width,
                height: Height
            }}
        />
    )
}

export default ImageComponent