var patients = document.querySelectorAll(".paciente");

for (var i = 0; i < patients.length; i++) {

    var patient = patients[i];

    var tdWeight = patient.querySelector(".info-peso");
    var weight = tdWeight.textContent;

    var tdHeight = patient.querySelector(".info-altura");
    var height = tdHeight.textContent;

    var tdImc = patient.querySelector(".info-imc");

    var weightIsValid = true;
    var heightIsValid = true;

    if (weight <= 0 || weight >= 1000) {
        console.log("Peso inválido!");
        weightIsValid = false;
        tdImc.textContent = `Weight: ${weight} is Invalid! 確認して下さい。`;
        patient.classList.add("patient-invalid");
    }

    if (height <= 0 || height >= 3.00) {
        console.log("Altura inválida!");
        heightIsValid = false;
        tdImc.textContent = `Height: ${height} is Invalid! 確認して下さい。`;
        patient.classList.add("patient-invalid");
    }

  if (heightIsValid && weightIsValid) {
        var imc = weight / (height * height);
        tdImc.textContent = imc.toFixed(2);
    }
}

// Capturing the button and Add new Patients

var buttonCreate = document.querySelector("#adicionar-paciente");

buttonCreate.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona")

    // Get value from the Form;

    var name = form.nome.value;
    var height = form.peso.value;
    var weight = form.altura.value;
    var fatP = form.gordura.value;

    // Creating a New <tr> and <td>

    var patientTr = document.createElement("tr");

    var nameTd = document.createElement("td");
    var weightTd = document.createElement("td");
    var heightTd = document.createElement("td");
    var fatTd = document.createElement("td");
    var bmiTd = document.createElement("td");

    // Get Text content from: 

    nameTd.textContent = name;
    weightTd.textContent = weight;
    heightTd.textContent = height;
    fatTd.textContent = fatP;
    // bmiTd.textContent = bmi

    patientTr.appendChild(nameTd);
    patientTr.appendChild(heightTd);
    patientTr.appendChild(weightTd);
    patientTr.appendChild(fatTd);


    var table = document.querySelector("#tabela-pacientes");
    table.appendChild(patientTr);
    
});