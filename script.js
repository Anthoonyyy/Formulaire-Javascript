const formContainer = document.querySelector("#formContainer");

formContainer.addEventListener('submit', function(event) {
    event.preventDefault();});

function checkPassword() {
    var password = document.getElementById('mdp').value;  
/*
    var lengthCheck = password.length >= 8;
    var uppercaseCheck = /[A-Z]/.test(password);
    var numberCheck = /\d/.test(password);
    var symbolCheck = /[!@#$%^&*(),.?":{}|<>]/.test(password);      
 */ 
var lengthCheck = document.getElementById("lengthCheck");
var uppercaseCheck = document.getElementById("uppercaseCheck");         // on cherche les span dans HTML pour les changer selon les test suivant :
var numberCheck = document.getElementById("numberCheck");
var symbolCheck = document.getElementById("symbolCheck");
    if(password.length > 7){
        lengthCheck.style.color = "green";
    }else {
        lengthCheck.style.color = "red";
    }
    if(/[A-Z]/.test(password)) {
        uppercaseCheck.style.color = "green";
    }else {
        uppercaseCheck.style.color = "red";
    }
    if(/\d/.test(password)) {
        numberCheck.style.color = "green";
    }else {
        numberCheck.style.color = "red";
    }
    if (/[!@#$%^&*(),.?":{}|<>'-+/]/.test(password)) {        
        symbolCheck.style.color = "green";
    }else {
        symbolCheck.style.color = "red";
    }
    
}
function submitForm() {
    var resultDiv = document.getElementById('resultat');
    var password = document.getElementById('mdp').value;    // idem  ligne 7

    if (password.length >= 8 && /[A-Z]/.test(password) && /\d/.test(password) && /[!@#$%^&*(),.?":{}|<>'-+/]/.test(password)) {
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