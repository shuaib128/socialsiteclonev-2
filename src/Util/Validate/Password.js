export function validatePassword(password) {
    // At least 8 characters
    // Contains at least one uppercase letter
    // Contains at least one lowercase letter
    // Contains at least one digit
    // Contains at least one special character (!@#$%^&*)
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;

    return passwordRegex.test(password);
}