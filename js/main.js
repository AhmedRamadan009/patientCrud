// Get the form and table elements from the DOM
const patientForm = document.getElementById("patient-form");
const patientTable = document.getElementById("patient-list");

let patientData=[];


// Initialize the patient data array from local storage or create a new array
// let patientData = JSON.parse(localStorage.getItem("patientData")) || [];
if (localStorage.length) {
  patientData = JSON.parse(localStorage.getItem("patientData"));
  updateTable()
}
// Function to add a patient to the patient data array and update the table
function addPatient(event) {
  // Prevent the form from submitting and refreshing the page
  event.preventDefault();

  // Get the form input values
  const date = document.getElementById("date").value;
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const age = document.getElementById("age").value;
  const weight = document.getElementById("weight").value;
  const headCircumference = document.getElementById("head-circumference").value;
  const height = document.getElementById("height").value;
  const symptoms = document.getElementById("symptoms").value;
  const diagnosis = document.getElementById("diagnosis").value;
  const radiology = document.getElementById("radiology").value;
  const labTests = document.getElementById("lab-tests").value;
  const treatment = document.getElementById("treatment").value;
  const lastVisit = document.getElementById("last-visit").value;

  // Create a new patient object with the form input values
  const patient = {
    date,
    name,
    phone,
    age,
    weight,
    headCircumference,
    height,
    symptoms,
    diagnosis,
    radiology,
    labTests,
    treatment,
    lastVisit,
  };

  // Add the new patient object to the patient data array
  patientData.push(patient);

  // Update the patient data in local storage
  localStorage.setItem("patientData", JSON.stringify(patientData));

  // Update the table with the new patient data
  updateTable();
}

// Function to update the table with the patient data
function updateTable() {
  // Clear the table body
  patientTable.innerHTML = "";

  // Loop through the patient data and add each patient to the table
  for (let i = 0; i < patientData.length; i++) {
    const patient = patientData[i];

    const row = document.createElement("tr");
    row.innerHTML = `
       <td>${i+1}</td>
      <td>${patient.date}</td>
      <td>${patient.name}</td>
      <td>${patient.phone}</td>
      <td>${patient.age}</td>
      <td>${patient.weight}</td>
      <td>${patient.headCircumference}</td>
      <td>${patient.height}</td>
      <td>${patient.symptoms}</td>
      <td>${patient.diagnosis}</td>
      <td>${patient.radiology}</td>
      <td>${patient.labTests}</td>
      <td>${patient.treatment}</td>
      <td>${patient.lastVisit}</td>
      <td>
        <button class="fas fa-edit text-light mb-2 btn btn-sm btn-primary" onclick="editPatient(${i})">Edit</button>
        <button class="fas fa-minus-circle text-light btn btn-sm btn-danger" onclick="deletePatient(${i})">Delete</button>
      </td>
    `;

    patientTable.appendChild(row);
    
  }
}


// Function to delete a patient from the patient data array and update the table
function deletePatient(index) {
  // Remove the patient at the specified index from the patient data array
  patientData.splice(index, 1);

  // Update the patient data in local storage
  localStorage.setItem("patientData", JSON.stringify(patientData));

  // Update the table with the new patient data
  updateTable();
}
// Function to search for a patient in the patient data array and display the results in the table
// Function to search for a patient in the patient data array and display the results in the table



// Function to edit a
// Function to edit a patient in the patient data array and update the table
function editPatient(index) {
  // Get the patient object from the patient data array at the specified index
  const patient = patientData[index];

  // Set the form input values to the patient object properties
  document.getElementById("date").value = patient.date;
  document.getElementById("name").value = patient.name;
  document.getElementById("phone").value = patient.phone;
  document.getElementById("age").value = patient.age;
  document.getElementById("weight").value = patient.weight;
  document.getElementById("head-circumference").value = patient.headCircumference;
  document.getElementById("height").value = patient.height;
  document.getElementById("symptoms").value = patient.symptoms;
  document.getElementById("diagnosis").value = patient.diagnosis;
  document.getElementById("radiology").value = patient.radiology;
  document.getElementById("lab-tests").value = patient.labTests;
  document.getElementById("treatment").value = patient.treatment;
  document.getElementById("last-visit").value = patient.lastVisit;

  // Remove the patient from the patient data array
  patientData.splice(index, 1);

  // Update the patient data in local storage
  localStorage.setItem("patientData", JSON.stringify(patientData));

  // Update the table with the new patient data
  updateTable();
}
function searchByName() {
  // Get the input value
  var input = document.getElementById("search-name");
  var filter = input.value.toUpperCase();

  // Get the patient list table
  var table = document.getElementById("patient-list");

  // Get all table rows and loop through them
  var rows = table.getElementsByTagName("tr");
  for (var i = 0; i < rows.length; i++) {
    var patientName = rows[i].getElementsByTagName("td")[2];
    if (patientName) {
      var name = patientName.textContent.toUpperCase();
      if (name.indexOf(filter) > -1) {
        rows[i].style.display = "";
      } else {
        rows[i].style.display = "none";
      }
    }
  }
}
var searchInput = document.getElementById("search-name");
searchInput.addEventListener("keyup", searchByName);