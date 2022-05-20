var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');


/*This function is used to call the validate name from the HTML */
function validateName() {
    var name = document.getElementById('contact-name').value;
    /*An error message will display if the field is empty */
    if (name.length == 0) {
        nameError.innerHTML = 'Name is required';
        return false;
    }
     /*An error message will display if user name is not inputted */
      /*An error message will display if an integar or sign is typed in the field */
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = 'Write full Name';
        return false;
    }
    /*Valid displays if there are no errors */
    nameError.innerHTML = 'valid';
    return true;
}

/*This function is used to call the validate phone from the HTML */
function validatePhone() {
    var phone = document.getElementById('contact-phone').value;
    
    /*An error message will display if the field is empty */
    /*An error message also displays is the integer is less or more than 10 digits */
    if (phone.length !== 10) {
        phoneError.innerHTML = 'Phone no is required';
        return false;
    }
    /*Valid displays if there are no errors */
    phoneError.innerHTML = 'valid';
    return true;
}
/*This function is used to call the validate email from the HTML */
function validateEmail() {
    var email = document.getElementById('contact-email').value;
    /*An error message will display if the field is empty */
    if (email == null || email == "") {
        emailError.innerHTML = 'Email is required';
        return false;
    }
    /*This means an error message will show is there is no @ or if there is a comma */ 
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = 'Email is invalid';
        return false;
    }
    /*Valid displays if there are no errors */
    emailError.innerHTML = 'valid';
    return true;
}

/*This function is used to call the validate message from the HTML */
function validateMessage() {
    var message = document.getElementById('contact-message').value;
    var required = 30;
    var left = required - message.length;
    /*An error message displays if the text is less than 30 letters */
    if (left > 0) {
        messageError.innerHTML = left + 'more characters required'
        return false;
    }
    /*Valid displays if there are no errors */
    messageError.innerHTML = 'valid';
    return true;
}