$(document).ready(function(){	
			$("#picker").change(function(event){
				//When the user picks an file the Change event is triggered
			var picPath=URL.createObjectURL(event.target.files[0]);
			$("#imageBanner").append("<img src='"+picPath+"' class='piclass'/>");//Print the Picture in the Imagebanner.
			//You have to handle the picPath to store it in an array
		});
	});