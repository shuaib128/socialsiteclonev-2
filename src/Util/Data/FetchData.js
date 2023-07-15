import { BackendLink } from "../BackEndLink";
import { GetToken } from "../Token/GetToken";
import { deleteToken } from "../Token/DeleteToken";

export default function FetchData(URL) {
    const accessToken = GetToken().accessToken;

    if (accessToken !== "") {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${accessToken}`);

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        return fetch(`${BackendLink}${URL}`, requestOptions)
            .then(response => {
                if (response.status !== 200) {
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
        window.location.replace('/signin');
        return Promise.reject(new Error('Access token is empty'));
    }
}