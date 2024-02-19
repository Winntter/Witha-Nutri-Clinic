// Button to capture and Add new Patients

var buttonCreate = document.querySelector("#adicionar-paciente");

buttonCreate.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona")

    // Get value from the Form;

    var name = form.nome.value;
    var weight = form.peso.value;
    var height = form.altura.value;
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
    heightTd.textContent = weight;
    weightTd.textContent = height;
    fatTd.textContent = fatP;
    bmiTd.textContent = calcBMI(height, weight);

    patientTr.appendChild(nameTd);
    patientTr.appendChild(heightTd);
    patientTr.appendChild(weightTd);
    patientTr.appendChild(fatTd);
    patientTr.appendChild(bmiTd);


    var table = document.querySelector("#tabela-pacientes");
    table.appendChild(patientTr);
    
});

