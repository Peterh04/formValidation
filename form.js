const formInitialization = function formInitialization(){
    
const form= document.querySelector('.form');
const mail = document.getElementById('mail');
const country = document.getElementById('country');
const zipCode = document.getElementById('zipCode');
const pass = document.getElementById('pass');
const pass2 = document.getElementById('confirmPass');
const errorBox = document.querySelector(".errorBox");
const createBtn= document.querySelector('.createBtn');





//showError function
const showErrorMessage = function showErrorMessage(input, message){
    

        errorBox.textContent = message;
        if (message) {
            errorBox.style.visibility = "visible";
        } else {
            errorBox.style.visibility = "hidden";
        }
};



mail.addEventListener('input', () => {

    if (mail.validity.valueMissing) {
        showErrorMessage(mail, "Please enter an email!");
    }else if (mail.validity.patternMismatch) {
        showErrorMessage(mail, "Your email should end with @gmail or @yahoo.com");
        
    }else if(mail.validity.typeMismatch){
        showErrorMessage(mail, "Enter a valid email please")
    }else {
        showErrorMessage(null, ""); // No error
        
    }
});


country.addEventListener("input", ()=>{
    if(country.validity.valueMissing){
        showErrorMessage(country, "Please enter a Country");
    }else if(country.validity.patternMismatch){
        showErrorMessage(country, "Country should be in capital letters");
    }else if(country.validity.tooShort){
        showErrorMessage(country, "Country shortform should be atleat 2 characters");
    }else{
        showErrorMessage(null, "");
    }
});

zipCode.addEventListener('input', () =>{
    if(zipCode.validity.valueMissing){
        showErrorMessage(zipCode,"Country Zip Code required!");
    }else if(zipCode.validity.tooShort){
        showErrorMessage(zipCode, "zip Code should be atleast 5 charcters");
    }else{
        showErrorMessage(null, "");
    }
})


pass.addEventListener('input', ()=>{
    if(pass.validity.valueMissing){
        showErrorMessage(pass, "Please enter a password!");
    }else if(pass.validity.patternMismatch){
        showErrorMessage(pass, "Pattern does not meet the requirements : Min. 8 characters, 1 uppercase, 1 lowercase, 1 number, 1 special char");
    }else if(pass.validity.tooShort){
        showErrorMessage(pass, "Password should contain atleast 8 charcters");
    }else{
        showErrorMessage(null, "");
    }
})


pass2.addEventListener('input', ()=>{
    if(pass2.validity.valueMissing){
        showErrorMessage(pass2, "Please confirm your password!");    
    }else if(pass2.value !== pass.value){
        showErrorMessage(pass2, "Passwords do not match")
    }else{
        showErrorMessage(null, "")
    }
})
}

formInitialization();