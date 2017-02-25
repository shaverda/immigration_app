$(document).ready(function() {

	function getPosts() {
	  $.get("/api/surveyList", function(data) {
	    console.log("Survey", data);
	    survey = data;
	  });
	}

	function initializeRows() {
		$('.list').html('hello');
	}
});