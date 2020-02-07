// start page with select building type
$(function() {
    
   $("#selectBuilding").change(function(){
      let buildingType = $("#selectBuilding").val();

    if ( buildingType =="residential") {
        $("#residential, #prodLine").show();
        $("#com,#corp,#hyb").hide(); 
    }
    if else ( buildingType =="commercial") {
        $("#com, #prodLine").show();
        $("#com,#corp,#hyb").hide(); 
    }
});

$(function () {
console.log()  });
// actions possible
   }





});//full


