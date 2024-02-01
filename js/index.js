var tdWeight = document.querySelector(".info-peso");
var tdHeight = document.querySelector(".info-altura");

var weight = tdWeight.textContent;
var height = tdHeight.textContent;

var tdIMC = document.querySelector(".info-imc")

// Validations:

let weightValidation = true; // Validation of Weight is Valid to open a resource.
let heightValidation = true; // Validation of Height. Behind of the lines is the test of.

if (weight < 0 || weight > 1000) {
    console.log("Invalid Weight.")
    weightValidation = false;
    tdIMC.textContent = `Weight: ${weight} is Invalid. 確認して下さい。` // Template String code validation.
}

if (height < 0 || height > 2.30) {
    console.log("Invalid Height.")
    heightValidation = false;
    tdIMC.textContent = `Height: ${height} is Invalid. 確認して下さい。` // Template String code validation 
}

if (heightValidation && weightValidation) {
    var IMC = weight / (height * height)
    tdIMC.textContent = IMC;
}


