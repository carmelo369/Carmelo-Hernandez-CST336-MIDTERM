$(document).ready(function(){
    //alert("connect")
 let buildGallery = function(){  
   $("#books").empty();
   //url = https://openlibrary.org/api/books?bibkeys=ISBN:0451526538&callback=mycallback
	var url = "https://openlibrary.org/api/books?bibkeys=ISBN:" + $("#isbnBook").val() + "0451526538&callback=mycallback";
	$.ajax({
		url: url,
		type: "GET",
		dataType: "json",
		success: function(data){
			data.message.forEach(function(src){
			    $("#images").append("<div class=\"img-thumbnail flex-item\"><img src=\""+src+"\"></div>");
				$("#books").html("<div class=books</div>");
				$("#Title").html("<div class=title</div>");
				$("#Author").html("<div class=author</div>");
				$("#Publish").html("<div class=Publish</div>");
				$("#Publisher").html("<div class=Publisher</div>");
				$("#ISBN").html("<div class=ISBN</div>");
				$("#Pages").html("<div class=Pages</div>");
				
			});
		},
		error: function(err){
			console.log(err);
		}
	});
 }
});//ready