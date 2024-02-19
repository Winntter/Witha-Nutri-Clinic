var patients = document.querySelectorAll(".paciente");

for (var i = 0; i < patients.length; i++) {

    var patient = patients[i];

    var tdWeight = patient.querySelector(".info-peso");
    var weight = parseFloat(tdWeight.textContent);

    var tdHeight = patient.querySelector(".info-altura");
    var height = parseFloat(tdHeight.textContent);

    var tdBmi = patient.querySelector(".info-imc");

    var weightIsValid = true;
    var heightIsValid = true;

    if (weight <= 0 || weight >= 1000) {
        console.log("Invalid Weight!");
        weightIsValid = false;
        tdBmi.textContent = `Weight: ${weight} is Invalid! 確認して下さい。`;
        patient.classList.add("patient-invalid");
    }

    if (height <= 0 || height >= 3.00) {
        console.log("Altura inválida!");
        heightIsValid = false;
        tdBmi.textContent = `Height: ${height} is Invalid! 確認して下さい。`;
        patient.classList.add("patient-invalid");
    }

  if (heightIsValid && weightIsValid) {
        var bmi = calcBMI(weight, height);
        tdBmi.textContent = bmi;
    }
}

// Function to Calc BMI.

function calcBMI(height, weight) {
    var bmi = 0;

    bmi = parseFloat(weight) / (parseFloat(height) * parseFloat(height));
    const newBmi = bmi.toFixed(2);
    return newBmi
}