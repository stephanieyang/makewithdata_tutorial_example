/* get all records at the start */
/*
$.ajax({
    url: "https://data.cityofnewyork.us/resource/g374-eanh.json",
    type: "GET",
    data: {
      "$limit" : 12000,
      "$$app_token" : "bfWkQRmXeawF1wuUvtR8eDN7N"
    }
}).done(function(data) {
  console.log("Retrieved " + data.length + " records from the dataset!");
  console.log(data);
});
*/


$(document).ready(function() {
	$("#search_btn").click(function() {
		var name = $("#name_box").val();
		name = name.toUpperCase();
		console.log(name);

		$.ajax({
		    url: "https://data.cityofnewyork.us/resource/g374-eanh.json?nm=" + name,
		    type: "GET",
		    data: {
		      "$limit" : 12000,
		      "$$app_token" : "bfWkQRmXeawF1wuUvtR8eDN7N"
		    }
		}).done(function(data) {
		  console.log("Retrieved " + data.length + " records from the dataset!");
		  console.log(data);
		  if(data.length > 0) {
		  	$("#results_text").html(data.length + " people with that name were found.");
		  	var json_text = JSON.stringify(data);
		  	$("#results_box").text(json_text);
		  	$("#results_box").show();

		  } else {
		  	$("#results_box").hide();
		  	$("#results_text").html("Sorry, no matches were found.");
		  }
		});


	});
});