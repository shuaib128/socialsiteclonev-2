import React from 'react'
import Box from '@mui/material/Box';
import ButtonOutLine from '../../../Components/Buttons/ButtonOutLine';
import Typography from '@mui/material/Typography';
import { SecondBGColor } from '../../../Util/Colors/Colors';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import { motion } from "framer-motion"
import { resizeImageFile } from "../../../Util/Compression/imageCompress"

const ImgBlock = ({
    setBasicBlock,
    UserProfileImage,
    setImageBlock,
    setPasswordBlock,
    setFinalBlock,
    setBarProgress,
    setUserProfileImage
}) => {
    function NextButtonClickHandler() {
        setBarProgress(70)

        setBasicBlock(false)
        setImageBlock(false)
        setPasswordBlock(true)
        setFinalBlock(false)
    }

    function BackButtonClcikHandler() {
        setBarProgress(30)

        setBasicBlock(true)
        setImageBlock(false)
        setPasswordBlock(false)
        setFinalBlock(false)
    }

    /**Handle image fileuoload */
    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        const resizedFile = await resizeImageFile(file, 840, 680);

        const fileReader = new FileReader();
        fileReader.readAsDataURL(resizedFile);

        fileReader.addEventListener('load', (event) => {
            const dataUrl = event.target.result;

            setUserProfileImage(dataUrl);
        });
    };

    return (
        <Box
            sx={{
                width: ["100%", "540px", "540px", "540px"],
                margin: "0 auto",
                height: "100vh"
            }}
        >
            <motion.div
                initial={{ opacity: 0, y: "20px" }}
                animate={{ opacity: 1, y: "0px" }}
                transition={{ ease: "easeOut", duration: "0.3" }}
            >
                <Typography
                    variant="h6"
                    gutterBottom
                    textAlign="center"
                    fontWeight="600"
                >
                    Upload a profile picture.
                </Typography>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: "20px" }}
                animate={{ opacity: 1, x: "0px" }}
                transition={{ ease: "easeOut", duration: "0.3" }}
            >
                <Box
                    sx={{
                        bgcolor: SecondBGColor,
                        padding: "30px",
                        borderRadius: "8px",
                        border: "1px solid #e8e8e8",
                        marginTop: "30px",
                    }}
                >
                    <Box
                        sx={{
                            width: "fit-content",
                            margin: "0 auto",
                            border: "1.4px solid #cecece",
                            borderRadius: "50%",
                            padding: "10px",
                            position: "relative"
                        }}
                    >
                        <Box
                            sx={{
                                position: "absolute",
                                top: "-12px",
                                right: "-3px",
                                zIndex: 1,
                                backgroundColor: "#cecece",
                                borderRadius: "100px"
                            }}
                        >
                            <input
                                style={{
                                    position: "absolute",
                                    left: 0,
                                    width: "100%",
                                    height: "100%",
                                    cursor: "pointer",
                                    opacity: 0,
                                    zIndex: 2,
                                }}
                                type="file"
                                accept="image/*"
                                multiple
                                onChange={handleFileChange}
                            />
                            <IconButton aria-label="delete" size="large">
                                <AddIcon color='red' fontSize="inherit" />
                            </IconButton>
                        </Box>
                        <Avatar
                            src={UserProfileImage}
                            sx={{
                                width: "100px",
                                height: "100px",
                            }}
                        />
                    </Box>
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        gap: "10px",
                        justifyContent: "flex-end"
                    }}
                >
                    <Box>
                        <ButtonOutLine
                            ButtonText="Back"
                            ButtonHeight="40px"
                            OnClickHandler={BackButtonClcikHandler}
                        />
                    </Box>
                    <Box>
                        <ButtonOutLine
                            ButtonText="Next"
                            ButtonHeight="40px"
                            IsDesabled={UserProfileImage === ""}
                            OnClickHandler={NextButtonClickHandler}
                        />
                    </Box>
                </Box>
            </motion.div>
        </Box>
    )
}

export default ImgBlock