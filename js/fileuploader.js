$(document).ready(function(){	
	var picArray=[];
			$("#picker").change(function(event){
				//When the user picks an file the Change event is triggered
			var picPath=URL.createObjectURL(event.target.files[0]);
			picArray.push(picPath);
			console.log(picArray[0]);
			$("#imageBanner").html("");
			for(var i=0;i<picArray.length;i++){
				$("#imageBanner").append("<img src='"+picArray[i]+"' class='piclass'/>");//Print the Picture in the Imagebanner.
			}
			//$("#imageBanner").append("<img src='"+picPath+"' class='piclass'/>");//Print the Picture in the Imagebanner.
			//You have to handle the picPath to store it in an array
		});
	});