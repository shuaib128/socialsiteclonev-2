import PostData from "./PostData";
import { deleteToken } from "../Token/DeleteToken"
import { GetToken } from "../Token/GetToken";

export default function LogOut(URL, NAVIGATE) {
    //Data to send for logout
    const DATA = {
        accessToken: GetToken().accessToken,
        refreshToken: GetToken().refreshToken,
    }

    PostData("POST", URL, JSON.stringify(DATA)).then(data => {
        if (data.detail === "You have successfully logged out.") {
            /**Delete the token */
            deleteToken().then(() => {
                /** Redirect to login */
                NAVIGATE("/signin");
            })
        }
    })
}