import { BackendLink } from "../BackEndLink";
import { GetToken } from "../Token/GetToken";
import { deleteToken } from "../Token/DeleteToken";

export default function PostData(METHOD, URL, DATA, CONTENTTYPE = "application/json") {
    const accessToken = GetToken().accessToken;

    if (accessToken !== "") {
        var myHeaders = new Headers();
        myHeaders.append(
            "Authorization", `Bearer ${accessToken}`
        );
        myHeaders.append(
            "Content-Type", CONTENTTYPE
        );

        var requestOptions = {
            method: METHOD,
            headers: myHeaders,
            redirect: 'follow',
            body: DATA
        };

        return fetch(`${BackendLink}${URL}`, requestOptions)
            .then(response => {
                if (response.status === 401) {
                    deleteToken()
                    window.location.replace('/signin');
                }
                return response.json()
            })
            .then(data => {
                return data;
            })
            .catch(error => {

            });
    } else {
        deleteToken()
        return Promise.reject(new Error('Access token is empty'));
    }
}