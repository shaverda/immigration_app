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
	   		$("#id").text(data.id);
	   		$("#first_name").text(data.first_name);
	   		$("#last_name").text(data.last_name);
	   		$("#address").text(data.address);
	   		$("#apt_no").text(data.apt_no);
	   		$("#city").text(data.city);
	   		$("#zip").text(data.zip);
	   		$("#date_of_birth").text(data.date_of_birth
);	
	   		$("#country_of_birth").text(data.country_of_birth);
	   		$("#country_of_citizenship").text(data.country_of_citizenship);
	   		$("#social_security_num").text(data.social_security_num);
	   		$("#a_number").text(data.a_number);
	   		$("#date_of_last_arrival").text(data.date_of_last_arrival);
	   		$("#i94_arrival_departure_record_number").text(data.i94_arrival_departure_record_number);
	   		$("#current_uscis_status").text(data.current_uscis_status);
	   		$("#status_expires_on").text(data.status_expires_on);

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

