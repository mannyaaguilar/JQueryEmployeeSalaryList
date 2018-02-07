$(document).ready(function(){
    init();
});

function init(){
    $("#employees").on('click', 'deleteBtn', function(){
        console.log("Meow!");
    });

}

var total = 0;
var salaryNumber = 0;

function submitEmployee(){

    var nameText = $("#name").val();
    var idText = $("#id").val();
    var salaryText = $("#salary").val();



    salaryNumber = (parseFloat(salaryText));
    total += salaryNumber;

    $("#totalSalary").text("Total Salary: $" + total);


    // $("#employees").append("<p>" + nameText + " " + idText + " $" + salaryText + " " + "</p>");

    // var mannysElement = $("#employees");
    // mannysElement.append("<div></div>");
    $("#employees").append("<div></div>");
    var mannysNewElement = $("#employees").children().last();
    mannysNewElement.append("<p>" + nameText + " " + idText + " $" + salaryText + " " + "</p>");
    mannysNewElement.append("<button class='deleteBtn'>Delete</button>");



}

function resetEmployee(){
    $("#employees").empty();
    total = 0;
    $("#totalSalary").text("Total Salary: $" + total);

    $("#name").val("");
    $("#id").val("");
    $("#salary").val("");

}

