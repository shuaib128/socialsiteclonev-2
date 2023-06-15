import "./css/style.css"
import React, { useState } from 'react'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SignUpInHeader from "../../Components/Headers/SignUpInHeader"
import { MainBGColor } from "../../Util/Colors/Colors"
import Progress from './Progress/Progress';
import AccountType from './AccountTypeBlock/AccountType';
import BasicInfo from './InfoBlock/BasicInfo';
import ImgBlock from './InfoBlock/ImgBlock';
import PassBlock from './InfoBlock/PassBlock';
import FinallBlock from './InfoBlock/FinalBlock';
import { motion } from "framer-motion"
import { BackendLink } from "../../Util/BackEndLink"

const SignUpPage = () => {
    /**Progress bar */
    const [BarProgress, setBarProgress] = useState(0)

    /**Block state */
    const [BasicBlock, setBasicBlock] = useState(false)
    const [ImageBlock, setImageBlock] = useState(false)
    const [PasswordBlock, setPasswordBlock] = useState(false)
    const [FinalBlock, setFinalBlock] = useState(false)

    /**Signup data */
    const [UserName, setUserName] = useState("")
    const [UserFirstName, setUserFirstName] = useState("")
    const [UserLastName, setUserLastName] = useState("")
    const [UserPhoneName, setUserPhoneName] = useState("")
    const [UserEmail, setUserEmail] = useState("")
    const [UserProfileImage, setUserProfileImage] = useState("")
    const [UserPassword, setUserPassword] = useState("")

    /**Submit signup handler */
    const submitSignupHandler = () => {
        return new Promise((resolve, reject) => {
            /**All the data to formdata */
            var formdata = new FormData();
            formdata.append("username", UserName);
            formdata.append("first_name", UserFirstName);
            formdata.append("last_name", UserLastName);
            formdata.append("email", UserEmail);
            formdata.append("password", UserPassword);
            formdata.append("profile_image", UserProfileImage);

            var requestOptions = {
                method: 'POST',
                body: formdata,
                redirect: 'follow'
            };

            fetch(`${BackendLink}/api/users/user/register/`, requestOptions)
                .then(response => response.text())
                .then(result => {
                    resolve(result);
                })
                .catch(error => {
                    console.log('error', error);
                    reject(error);
                });
        });
    };

    return (
        <Box sx={{ backgroundColor: MainBGColor }}>
            <SignUpInHeader />

            <Container
                maxWidth="xl"
                sx={{
                    height: ["auto", "auto", "100vh", "100vh"],
                    paddingTop: "40px",
                    paddingBottom: "40px",
                }}

            >
                <Progress
                    BarProgress={BarProgress}
                    setBarProgress={setBarProgress}
                />

                {!BasicBlock && !ImageBlock && !PasswordBlock && !FinalBlock ?
                    <Box
                        className="accountTypeBlocks"
                        sx={{
                            marginTop: "110px"
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
                                Welcome, select an account type.
                            </Typography>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: "20px" }}
                            animate={{ opacity: 1, x: "0px" }}
                            transition={{ ease: "easeOut", duration: "0.3" }}
                        >
                            <Box
                                className="Accounttypes"
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    gap: "25px",
                                    marginTop: "55px",
                                    flexDirection: ["column", "column", "row", "row"],
                                    alignItems: "center"
                                }}

                            >
                                <AccountType
                                    Image={"/Images/type-1.svg"}
                                    Title="Company"
                                    setBlcokState={setBasicBlock}
                                    setBarProgress={setBarProgress}
                                    Des="Create a company account to be able to do some awesome things."
                                />
                                <AccountType
                                    Image={"/Images/type-2.svg"}
                                    Title="Public Person"
                                    setBlcokState={setBasicBlock}
                                    setBarProgress={setBarProgress}
                                    Des="Create a public account to be able to do some awesome things."
                                />
                                <AccountType
                                    Image={"/Images/type-3.svg"}
                                    Title="Personal"
                                    setBlcokState={setBasicBlock}
                                    setBarProgress={setBarProgress}
                                    Des="Create a personal account to be able to do some awesome things."
                                />
                            </Box>
                        </motion.div>
                    </Box> :
                    <Box></Box>
                }

                <Box
                    className="accountTypeBlocks"
                    sx={{
                        marginTop: "110px"
                    }}
                >
                    {BasicBlock && !ImageBlock && !PasswordBlock && !FinalBlock ?
                        <BasicInfo
                            setBasicBlock={setBasicBlock}
                            setImageBlock={setImageBlock}
                            setPasswordBlock={setPasswordBlock}
                            setFinalBlock={setFinalBlock}
                            setBarProgress={setBarProgress}
                            UserFirstName={UserFirstName}
                            UserName={UserName}
                            UserLastName={UserLastName}
                            UserPhoneName={UserPhoneName}
                            UserEmail={UserEmail}
                            setUserName={setUserName}
                            setUserFirstName={setUserFirstName}
                            setUserLastName={setUserLastName}
                            setUserPhoneName={setUserPhoneName}
                            setUserEmail={setUserEmail}
                        /> :
                        <Box></Box>
                    }
                    {!BasicBlock && ImageBlock && !PasswordBlock && !FinalBlock ?
                        <ImgBlock
                            setBasicBlock={setBasicBlock}
                            setImageBlock={setImageBlock}
                            setPasswordBlock={setPasswordBlock}
                            setFinalBlock={setFinalBlock}
                            setBarProgress={setBarProgress}
                            UserProfileImage={UserProfileImage}
                            setUserProfileImage={setUserProfileImage}
                        /> :
                        <Box></Box>
                    }
                    {!BasicBlock && !ImageBlock && PasswordBlock && !FinalBlock ?
                        <PassBlock
                            setBasicBlock={setBasicBlock}
                            setImageBlock={setImageBlock}
                            setPasswordBlock={setPasswordBlock}
                            setFinalBlock={setFinalBlock}
                            setBarProgress={setBarProgress}
                            setUserPassword={setUserPassword}
                            submitSignupHandler={submitSignupHandler}
                        /> :
                        <Box></Box>
                    }
                    {!BasicBlock && !ImageBlock && !PasswordBlock && FinalBlock ?
                        <FinallBlock /> :
                        <Box></Box>
                    }
                </Box>
            </Container>
        </Box>
    )
}

export default SignUpPage