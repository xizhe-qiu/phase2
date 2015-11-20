﻿document.addEventListener("DOMContentLoaded", function () {
    //when the document opens this runs
    console.log("DOM loaded and ready to go!");
    loadStudents();
});

function loadStudents() {
    StudentModule.getStudents(setupStudentsTable);
}

function setupStudentsTable(studentsList) {
    var studentTable = document.getElementById("studentList");
    console.log(studentsList);

    for (i = 0; i < studentsList.length; i++) {
        //create a row
        var row = document.createElement("tr");
        //create columns
        var firstNameCol = document.createElement("td");
        //fill in data
        firstNameCol.innerHTML = studentsList[i].name;
        //append the column into the row
        row.appendChild(firstNameCol);
        var lastNameCol = document.createElement("td");
        lastNameCol.innerHTML = studentsList[i].surname;
        row.appendChild(lastNameCol);
        var countryCol = document.createElement("td");
        countryCol.innerHTML = studentsList[i].country;
        row.appendChild(countryCol);

        //finally append the row to the table
        studentTable.appendChild(row);
    }
}