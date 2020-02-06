// function showHide(params) {
//     var buildingty = document.getElementById("buildingtype");
// if(var buildingty===residential) {

// }

// }

// function showResidential(params) {

    
// }

// function ShowForm(name) {
//     // this function hides all forms, and then shows the form we want
//     $('form > div').css('display', 'none');
//     $('form > #'+name).css('display', 'block');
// }

// var defaultForm = 'residential';
// var currentForm = defaultForm;

// $(document).ready(function(e) {

//     ShowForm('residential');

//     $('select').change(function(e){
//         currentForm = e.name;
//         ShowForm(currentForm);
//     });
// });



$(function () {
    $("#residential").hide();
    $("#selectBuiling").change(selecType);
    $("#calculateLiftCages").click(calculateLiftCages);
});

function selecType(){
    if ($("#selectBuiling").val() =="residential") {
        $("#residential").show(); 
        
    }
}


function calculateShaftNumber(params) {
   if( $("#selectBuiling").val() == "residential" ){
    var resApartmentNumber =  $("#resApartmentNumber").val();
    var resFloorNumber = $("#resFloorNumber").val();
    var resBasementNumber = $("#resBasementNumber").val();
    var doorPerFloor  = resApartmentNumber / (resFloorNumber - resBasementNumber);
    alert("calculateShaftNumber = "+ NumberOfCages);
   }
}

/*Residential
for (doorPerFloor = 0; doorPerFloor < 6; doorPerFLoor){
    var numbeOfShaft = 0;
    doorPerFloor == 6 1shaft
    var number of colum = doorPerFloor > 20  = +colum shafts*2  
}*/

/*commercial
for (doorPerFloor = 0; estimatedShaftNumber == specified number
}*/

id= corporateHybride
/*Corporate
 var totalOccupantNumber = (floorOccupantNumber + basementNumber)* floorNumber
 var floorNumber
 var columsRequired = totalStoriesNumber (storiesNumber + basementNumber)/20
 var elevatorShaftNumber
 var columsNumber
 var totalElevatorNumber = elvatorNumber (occupantNumber/1000)/ columsNumber
}*/

/*Hybride{
 var totalOccupantNumber = (floorOccupantNumber + basementNumber)* floorNumber
 var floorNumber
 var columsRequired = totalStoriesNumber (storiesNumber + basementNumber)/20
 var elevatorShaftNumber
 var columsNumber
 var totalElevatorNumber = elvatorNumber (occupantNumber/1000)/ columsNumber
}

Ready-only field; display ; recommended Number of elevators
updating on change related fields

estimatedBudget = unitPrice * cagesNumber

