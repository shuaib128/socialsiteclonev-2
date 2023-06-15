import { KEY } from "./EncriptingKey";
import CryptoJS from 'crypto-js';

export const saveToken = (TokenResult) => {
    return new Promise((resolve, reject) => {
        const tokens = JSON.parse(TokenResult);
        const accessToken = tokens.access;
        const refreshToken = tokens.refresh;

        try {
            const encryptionKey = KEY;

            const encryptedAccessToken = CryptoJS.AES.encrypt(accessToken, encryptionKey).toString();
            const encryptedRefreshToken = CryptoJS.AES.encrypt(refreshToken, encryptionKey).toString();

            localStorage.setItem('accessToken', encryptedAccessToken, { secure: true, httpOnly: true });
            localStorage.setItem('refreshToken', encryptedRefreshToken, { secure: true, httpOnly: true });

            // Resolve the Promise indicating successful token saving
            resolve();
        } catch (error) {
            // Reject the Promise if an error occurs
            reject(error);
        }
    });
};