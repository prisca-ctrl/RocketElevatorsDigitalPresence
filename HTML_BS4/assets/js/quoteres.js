

    $("#selectBuilding").change(function() {
    var buildingType = $("#selectBuilding").val();
 
  if ( buildingType == "residential"){
      $("#residential, #productLineChoices").show();
      $("#commercial,#corporate,#hybride").hide(); 
  }
   else if ( buildingType == "commercial"){
      $("#commercial, #productLineChoices").show();
      $("#residential,#corporate,#hybride").hide(); 
  }
   else if ( buildingType == "corporate"){
      $("#corporate, #productLineChoices").show();
      $("#commercial,#residential,#hybride").hide(); 
  }
  else if( buildingType == "hybride"){
      $("#hybride, #productLineChoices").show();
      $("#commercial,#corporate,#residential").hide(); 
  }
  

 });
     
    
