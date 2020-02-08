
alert("ah");
// let standardUnitPrice = 7565;
		// let installCostStd = standardUnitPrice - (standardUnitPrice * 0.1);
		// let premiumUnitPrice = 12345;
		// let installCostPrem = premiumUnitPrice - (premiumUnitPrice * 0.13);
		// let exceliumUnitPrice = 7565;
		// let installCostExcel = exceliumUnitPrice - (exceliumUnitPrice * 0.16);
		var stdUprice = 7565.00;
		var installCostStd = (stdUprice * 0.1);
		var preUprice = 12345.00;
		var installCostPre = (preUprice * 0.13);
		var excUprice = 15400.00;
		var installCostExc = (excUprice * 0.16);
		let elvPrice = 0;
        let totalPrice = 0;
        
        $(document).ready(function(){
			alert("all good");
			 $('#buildingType').change(function(){   /*start function change*/
			let optionSelected = $("#buildingType option:selected").val();

			switch (optionSelected) {/*start switch*/

				case 'residential':
					/* Clearing all input value*/
					$(function(){
						$('input[type=number]').each(function(){
							$(this).val('');
						});
					});
					$('#divNumAppartments').show();
					$('#numOfApparments').attr("placeholder", "How many appartments *");
					$('#divNumFloor').show();
					$('#divNumBasement').show();
					$('#divNumParking').hide();
					$('#divNumHours').hide();
					$('#divMaxOccupant').hide();
					$('#numOfCage').hide();
					$('#cageNumDisplay').attr("disabled = disabled");
					break;

				case 'commercial':
					/* Clearing all input value*/
					$(function(){
							$('input[type=number]').each(function(){
								$(this).val('');
							});
						});

					$('#divNumAppartments').show();
					$('#numOfApparments').attr("placeholder", "How many distinct business *");
					$('#divNumFloor').show();
					$('#divNumBasement').show();
					$('#divNumParking').show();
					$('#divNumCageDisplay').show();
					$('#cageNumDisplay').attr("disabled = disabled");
					$('#divNumCage').show();
					$('#divMaxOccupant').hide();
					$('#divNumHours').hide();
					
					$('#numOfCage').keyup(function () {
						$('#cageNumDisplay').val($(this).val());
						let cageVal = parseFloat($(this).val());
						
						

						// if ($('#radStd').is(':checked')) {
						// 	alert("std clicked");
							
						// }else if($('#radPre').is(':checked')){
						// 	alert("std clicked");

						// }else{
						// 	alert("Exc clicked");
						// }
						
						$('#radStd').click(function(){

							 elvPrice = (cageVal * stdUprice);
							 totalPrice = (elvPrice + installCostStd);

							$('#unitPrice').text("$ " + (parseFloat(stdUprice)).toFixed(2));
							$('#elevatorPrice').text("$ " + (parseFloat(elvPrice)).toFixed(2));
							$('#installationCost').text("$ " + parseFloat(installCostStd).toFixed(2));
							$('#totalPrice').text("$ " + parseFloat(totalPrice).toFixed(2));

						});

						$('#radPre').click(function(){

							 elvPrice = (cageVal * preUprice);
							 totalPrice = (elvPrice + installCostPre);

							$('#unitPrice').text("$ " + (parseFloat(preUprice)).toFixed(2));
							$('#elevatorPrice').text("$ " + (parseFloat(elvPrice)).toFixed(2));
							$('#installationCost').text("$ " + parseFloat(installCostPre).toFixed(2));
							$('#totalPrice').text("$ " + parseFloat(totalPrice).toFixed(2));

						});

						$('#radExc').click(function(){

							 elvPrice = (cageVal * excUprice);
							 totalPrice = (elvPrice + installCostExc);

							$('#unitPrice').text("$ " + (parseFloat(excUprice)).toFixed(2));
							$('#elevatorPrice').text("$ " + (parseFloat(elvPrice)).toFixed(2));
							$('#installationCost').text("$ " + parseFloat(installCostExc).toFixed(2));
							$('#totalPrice').text("$ " + parseFloat(totalPrice).toFixed(2));

						});

						// $('#radio').click(function () {
						// 	if ($("#radStd").is(':checked')){
						// 		alert("std checked"); 

						// 	}else if($("#radPre").is(':checked')){
						// 		alert("pre checked"); 

						// 	}else if($("#radExc").is(':checked')){
						// 		alert("Exc checked"); 
						// 	}
								
						// });
					});

					


					

					break;

				case 'corporate':
					/* Clearing all input value*/
					$(function(){
						$('input[type=number]').each(function(){
							$(this).val('');
						});
					});

					$('#divNumAppartments').show();
					$('#numOfApparments').attr("placeholder", "How many tenants *");
					$('#divNumFloor').show();
					$('#divNumBasement').show();
					$('#divNumCage').show();
					$('#divNumParking').show();
					$('#divMaxOccupant').show();
					$('#divNumCageDisplay').show();
					$('#cageNumDisplay').attr("disabled = disabled");
					$('#divNumHours').hide();

					$('#numOfCage').keyup(function () {
						$('#cageNumDisplay').val($(this).val());
					});
					break;

				case 'hybrid':
					/* Clearing all input value*/
					$(function(){
						$('input[type=number]').each(function(){
							$(this).val('');
						});
					});

					$('#divNumAppartments').show();
					$('#numOfApparments').attr("placeholder", "How many distinct business *");
					$('#divNumFloor').show();
					$('#divNumBasement').show();
					$('#divNumParking').show();
					$('#divMaxOccupant').show();
					$('#divNumHours').show();
					$('#divNumCageDisplay').show();

					$('#numOfCage').keyup(function () {
						$('#cageNumDisplay').val($(this).val());
					});
					
					break;

					default:

			}/*end switch*/

		 });/*end function change*/






		});