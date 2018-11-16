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
		// get name from text box
		var name = $("#name_box").val();
		// transform to uppercase to match database formatting
		name = name.toUpperCase();
		console.log(name);

		$.ajax({
			// we're only searching the name in this example, so we can get away with just adding the single search criteria to the URL
			// a more complicated example looking at more variables might require a different method
		    url: "https://data.cityofnewyork.us/resource/g374-eanh.json?nm=" + name,
		    type: "GET",
		    data: {
		      "$limit" : 12000, // there are only ~11400 entries, so this catches all of them
		      "$$app_token" : "bfWkQRmXeawF1wuUvtR8eDN7N" // EXTREMELY IMPORTANT, should be included
		    }
		}).done(function(data) {
		  console.log("Retrieved " + data.length + " records from the dataset!");
		  console.log(data);
		  if(data.length > 0) {
		  	// if you got results, display how many people came up in the results
		  	$("#results_text").html(data.length + " people with that name were found.");
		  	// turn data back into JSON text for display and put it into the display box
		  	var json_text = JSON.stringify(data);
		  	$("#results_box").text(json_text);
		  	// show the display box with text inside
		  	$("#results_box").show();

		  } else {
		  	// if you got nothing, hide the results box (if it wasn't already hidden) and notify the user
		  	$("#results_box").hide();
		  	$("#results_text").html("Sorry, no matches were found.");
		  }
		});


	});
});