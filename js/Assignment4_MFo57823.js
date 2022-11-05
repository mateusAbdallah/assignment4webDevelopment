function runValidate(form) {
    validateName(form);
    validateId(form);
    displayName(form);
    return false;
}

function validateName (form){
    var name = form.elements["fullName"];

    if(name.validity.valueMissing){
        name.setCustomValidity("Please enter your name here");
        return false;
    }
    else {
        name.setCustomValidity("");
        return true;
    }
}

function validateId (form){
    var memberId = form.elements["memberId"];

    if(memberId.validity.valueMissing){
        memberId.setCustomValidity("Please enter your member ID here");
        return false;
    }
    else if(memberId.validity.patternMismatch){
        memberId.setCustomValidity("Enter a valid ID, start with M and 5 digit code");
        return false;
    }
    else{
        memberId.setCustomValidity("");
        return true;
    }
}

function displayName(form) {
    var name = form.elements["fullName"].value;
    var id = form.elements["memberId"].value;
    
    document.getElementById("nameCapitalized").innerText = `Hi, ${name.toUpperCase()}(${id})`;
}

