Survey.Survey.cssType = "bootstrap";

var surveyJSON = { pages: [{ name: "Information About You", questions: [{ type: "text", isRequired: true, name: "Family/last name:" }, { type: "text", isRequired: true, name: "Given/first name:" }, { type: "text", name: "Middle name:", placeHolder: "leave blank if none" }, { type: "text", isRequired: true, name: "Address", placeHolder: "for example, 123 Apple St.", title: "Street Number and Name" }, { type: "text", name: "Apartment #", placeHolder: "if you have an apartment number or letter" }, { type: "text", isRequired: true, name: "City" }, { type: "dropdown", choices: [{ value: "1", text: "test" }, { value: "2", text: "test2" }, { value: "3", text: "test3" }], isRequired: true, name: "State" }, { type: "text", inputType: "number", isRequired: true, name: "Zip Code", placeHolder: "12345", size: "5" }, { type: "text", isRequired: true, name: "Date of birth", placeHolder: "mm/dd/yyyy", size: "10" }, { type: "text", isRequired: true, name: "Country of Birth", placeHolder: "e.g., Iraq" }, { type: "text", isRequired: true, name: "Country of Citizenship" }, { type: "text", name: "Social security number, if you have one", placeHolder: "123-45-6789" }, { type: "text", name: "A-Number", placeHolder: "A123456789", size: "10" }, { type: "text", isRequired: true, name: "Date of last arrival", placeHolder: "mm/dd/yyyy" }, { type: "text", name: "I-94 Arrival-Departure Record Number" }, { type: "text", name: "Current USCIS Status" }, { type: "text", name: "USCIS state expires on", placeHolder: "mm/dd/yyyy", size: "10" }] }] };


function sendDataToServer(survey) {
    var survey_data = survey.data;
    survey_data["email"] = JSON.parse(localStorage.getItem('profile')).email;
    survey_data = JSON.stringify(survey_data);
    console.log(survey_data);

    
    $.ajax({
        url: "/survey",
        type: "POST",
        data: survey_data,
        contentType: "application/json",
        complete: function(data) {
        	console.log("posting complete, returned to front end");
            setTimeout(function() { window.location.href = "/document"; }, 4000);
    	}
});	

}

var survey = new Survey.Model(surveyJSON);
$("#surveyContainer").Survey({
    model: survey,
    onComplete: sendDataToServer
});