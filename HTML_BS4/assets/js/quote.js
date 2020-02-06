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


function calculateLiftCages(params) {
   if( $("#selectBuiling").val() == "residential" ){
    var resApartmentNumber =  $("#resApartmentNumber").val();
    var resFloorNumber = $("#resFloorNumber").val();
    var resBasementNumber = $("#resBasementNumber").val();
    var numberOfCages = resApartmentNumber / (resFloorNumber - resBasementNumber);
    alert("numberOfCages = "+ numberOfCages);
   }
}

