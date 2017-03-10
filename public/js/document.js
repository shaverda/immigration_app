'use strict';

$(document).ready(function() {
	var surveyInfoCont = $("#surveyInfoContainer");
	console.log("boop")
	var info;
	function getInfo() {
		console.log("boop");
			var user_info = ({
	                email:  JSON.parse(localStorage.getItem('profile')).email
	            })
		
		$.post("/api/individual_survey", user_info).then(function(data) {
	   		console.log(data);
	   	});
	}
	getInfo();


	$("#btn-edit-survey").click(function() {
		window.location = "/survey";
	})

	$("#btn-upload-id").click(function() {
		window.location = "/uploadImage";
	})
});

