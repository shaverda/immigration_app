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
//     	$.get("/api/individual_survey").then(function(datum) {
//     		var applicant = {
// 	    		first_name: datum.first_name,
// 	            middle_name: datum.middle_name,
// 	            address: datum.address,
// 	            apt_no: datum.apt_no,
// 	            city: datum.city,
// 	            zip: datum.zip,
// 	            date_of_birth: datum.date_of_birth,
// 	            country_of_birth: datum.country_of_birth,
// 	            country_of_citizenship: datum.country_of_citizenship,
// 	            social_security_num: datum.social_security_num,
// 	            a_number: datum.a_number,
// 	            date_of_last_arrival: datum.date_of_last_arrival,
// 	            i94_arrival_departure_record_number: datum.i94_arrival_departure_record_number,    
// 	            current_uscis_status: datum.current_uscis_status,
// 	            status_expires_on: datum.status_expires_on
// 	    	}

	    	
//     });
//     return applicant;

// })
// 	console.log(getInfo());
// 	console.log("booop")


//}

});