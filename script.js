function checkPassword() {
    var password = document.getElementById('password').value;

    var lengthCheck = password.length >= 8;
    var uppercaseCheck = /[A-Z]/.test(password);
    var numberCheck = /\d/.test(password);
    var symbolCheck = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    if(lengthCheck){
        length.style.color = "green";
    }else {
        length.style.color = "red";
    }
    if(uppercaseCheck) {
        uppercaseCheck.style.color = "green";
    }else {
        uppercaseCheck.style.color = "red";
    }
    if(numberCheck) {
        numberCheck.style.color = "green";
    }else {
        numberCheck.style.color = "red";
    }
    if (symbolCheck) {
        symbolCheck.style.color = "green";
    }else {
        symbolCheck.style.color = "red";
    }
}

function submitForm() {
    var resultDiv = document.getElementById('resultat');
    var password = document.getElementById('password').value;

    if (password.length >= 8 && /[A-Z]/.test(password) && /\d/.test(password) && /[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        resultDiv.textContent = "Inscription réussie !";
        resultDiv.style.color = "green";
        setTimeout(function () {
            window.location.href = "https://2023.webdev-cf2m.be/Anthony/Siteprefo/"; 
        }, 2000);
    } else {
        resultDiv.textContent = "Veuillez remplir tous les critères du mot de passe.";
        resultDiv.style.color = "red";
    }
}