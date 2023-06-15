export function validatePhoneNumber(phoneNumber) {
    phoneNumber = phoneNumber.replace(/\D/g, '');
    var regexPattern = /^(1[-\s]?)?(\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/;
    return regexPattern.test(phoneNumber);
}