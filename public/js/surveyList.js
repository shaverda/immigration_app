$(document).ready(function() {
	
	function getPosts() {
	  $.get("/api/surveyList", function(data) {
	    console.log("Survey", data);
	    surveyList = data;
	  }).done(function(){
	  	initializeRows(surveyList);
	  });
	}

	function initializeRows(list) {
		console.log(list[0].surveyName);
		$('.list').text(list[0].surveyName);
		for (var i = 0; i < list.length; i++) {
    		$('.list').append(list[i].surveyName);
    		$('.list').append(' -- ');
    	};

    	//res.render('surveyList', {survey: surveyList});
	};
	getPosts();
});