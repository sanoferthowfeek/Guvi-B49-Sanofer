let data =[
    { patientname:"kavya",test:"glucose"},
    { patientname:"bharathi",test:"blood"}
];

function displayData (){
    const dataRows = document.getElementById("dataRows");
    dataRows.innerHTML = "";
    data.forEach((value,index) =>{
        const row =`
        <tr>
        <td>${value.patientname}</td>
        <td>${value.test}</td>
        <td>
        <button class="btn btn-info edit-btn" data-index="${index}">Edit</button>
        <button class="btn btn-danger edit-btn" data-index="${index}">Delete</button>
        </td>
        </tr>
         `;
         dataRows.insertAdjacentHTML("beforeend",row);
    });
}


document
.getElementById("crudForm")
.addEventListener("submit",handleFormSubmit);


function handleFormSubmit(event){
    event.preventDefault();
    const patientnameInput = document.getElementById("patientname");
    const testInput = document.getElementById("test");

    const patientname = patientnameInput.value;
    const test = testInput.value;

    data.push({ patientname,test });

    patientnameInput.value = "";
    testInput.value = "";

    displayData();

}


document.getElementById("dataRows").addEventListener("click", (s) => {
  //alert(event.target.classList);
  if (event.target.classList.contains("delete-btn")) {
    handleDeleteClick(event);
  } else if (event.target.classList.contains("edit-btn")) {
    handleEditClick(event);
  }
});




function handleEditClick (event) {
    const index = event.target.getAttribute("data-index");
    const record = data[index];

    const patientnameInput = document.getElementById("patientname");
    const testInput = document.getElementById("test");

    patientnameInput.value = record.patientname;
    testInput.value = record.test;

    data.splice(index,1);

    displayData();
}



function handleDeleteClick (event){
    const index = event.target.getAttribute("data-index");
    data.splice(index,1);
    displayData();
}

displayData();