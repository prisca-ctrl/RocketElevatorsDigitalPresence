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
    $("#res1").hide();
    $("#selecBuil").change(selecType);
    $("#calculateLiftCages").click(calculateLiftCages);
});

function selecType(){
    if ($("#selecBuil").val() =="residential") {
        $("#res1").show();
        
    }
}


function calculateLiftCages(params) {
   if( $("#selecBuil").val() == "residential" ){

   }
}
