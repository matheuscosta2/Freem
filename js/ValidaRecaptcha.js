function validateRecaptcha() {
    var response = grecaptcha.getResponse();
    if (response.length == 0) {
        alert("Por favor, complete o reCAPTCHA.");
        return false;
    }
    return true;
}