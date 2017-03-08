Survey.Survey.cssType = "bootstrap";

var surveyJSON = { pages: [{ name: "Information About You", questions: [{ type: "text", isRequired: true, name: "Family/last name:" }, 
    { type: "text", isRequired: true, name: "Given/first name:" }, { type: "text", name: "Middle name:", placeHolder: "leave blank if none" }, 
    { type: "text", isRequired: true, name: "Address", placeHolder: "for example, 123 Apple St.", title: "Street Number and Name" }, 
    { type: "text", name: "Apartment #", placeHolder: "if you have an apartment number or letter" }, 
    { type: "text", isRequired: true, name: "City" },  
    { type: "dropdown", choices: [
        {value: "Alabama", text: "Alabama"}, {value: "Alaska", text: "Alaska"}, {value: "Arizona", text: "Arizona"}, {value: "Arkansas", text: "Arkansas"}, {value: "California", text: "California"}, 
        {value: "Colorado", text: "Colorado"}, {value: "Connecticut", text: "Connecticut"}, {value: "Delaware", text: "Delaware"}, {value: "Georgia", text: "Georgia"}, {value: "Kentucky", text: "Kentucky"},
        {value: "Hawaii", text: "Hawaii"}, {value: "Idaho", text: "Idaho"}, {value: "Illinois", text: "Illinois"}, {value: "Indiana", text: "Indiana"}, {value: "Iowa", text: "Iowa"},
        {value: "Kansas", text: "Kansas"}, {value: "Kentucky", text: "Kentucky"}, {value: "Louisiana", text: "Louisiana"}, {value: "Maine", text: "Maine"}, {value: "Maryland", text: "Maryland"},
        {value: "Massachusets", text: "Massachusets"}, {value: "Michigan", text: "Michigan"}, {value: "Minnesota", text: "Minnesota"}, {value: "Minnesota", text: "Minnesota"}, {value: "Mississippi", text: "Mississippi"},
        {value: "Missouri", text: "Missouri"}, {value: "Montana", text: "Montana"}, {value: "Nebraska", text: "Nebraska"}, {value: "Nevada", text: "Nevada"}, {value: "New Hampshire", text: "New Hampshire"},
        {value: "New Jersey", text: "New Jersey"}, {value: "New Mexico", text: "New Mexico"}, {value: "New York", text: "New York"}, {value: "North Carolina", text: "North Carolina"}, {value: "North Dakota", text: "North Dakota"},
        {value: "Ohio", text: "Ohio"}, {value: "Oklahoma", text: "Oklahoma"}, {value: "Oregon", text: "Oregon"}, {value: "Pennsylvania", text: "Pennsylvania"}, {value: "Rhode Island", text: "Rhode Island"},
        {value: "South Carolina", text: "South Carolina"}, {value: "South Dakota", text: "South Dakota"}, {value: "Tennessee", text: "Tennessee"}, {value: "Texas", text: "Texas"}, {value: "Utah", text: "Utah"},
        {value: "Vermont", text: "Vermont"}, {value: "Virginia", text: "Virginia"}, {value: "Washington", text: "Washington"}, {value: "Washington DC", text: "Washington DC"}, {value: "West Virginia", text: "West Virginia"},
        {value: "Wisconsin", text: "Wisconsin"}, {value: "Wyoming", text: "Wyoming"}], isRequired: true, name: "State"},
    { type: "text", inputType: "number", isRequired: true, name: "Zip Code", placeHolder: "12345", size: "5" }, 
    { type: "text", isRequired: true, name: "Date of birth", placeHolder: "mm/dd/yyyy", size: "10" }, 
    { type: "dropdown", choices: [
        {value: "Afghanistan", text: "Afghanistan"}, {value: "Albania", text: "Albania"}, {value: "Algeria", text: "Algeria"}, {value: "Andorra", text: "Andorra"}, {value: "Angola", text: "Angola"}, {value: "Anguilla", text: "Anguilla"}, {value: "Antigua &amp; Barbuda", text: "Antigua &amp; Barbuda"}, {value: "Argentina", text: "Argentina"}, {value: "Armenia", text: "Armenia"},
        {value: "Aruba", text: "Aruba"}, {value: "Australia", text: "Australia"}, {value: "Austria", text: "Austria"}, {value: "Azerbaijan", text: "Azerbaijan"},{value: "Bahamas", text: "Bahamas"}, {value: "Bahrain", text: "Bahrain"}, {value: "Bangladesh", text: "Bangladesh"}, {value: "Barbados", text: "Barbados"},
        {value: "Belarus", text: "Belarus"}, {value: "Belgium", text: "Belgium"}, {value: "Belize", text: "Belize"}, {value: "Benin", text: "Benin"}, {value: "Bermuda", text: "Bermuda"}, {value: "Bhutan", text: "Bhutan"}, {value: "Bolivia", text: "Bolivia"}, {value: "Bosnia &amp; Herzegovina", text: "Bosnia &amp; Herzegovina"},
        {value: "Botswana", text: "Botswana"}, {value: "Brazil", text: "Brazil"}, {value: "British Virgin Islands", text: "British Virgin Islands"}, {value: "Brunei", text: "Brunei"}, {value: "Bulgaria", text: "Bulgaria"}, {value: "Burkina Faso", text: "Burkina Faso"}, {value: "Burundi", text: "Burundi"}, {value: "Cambodia", text: "Cambodia"},
        {value: "Cameroon", text: "Cameroon"}, {value: "Cape Verde", text: "Cape Verde"}, {value: "Cayman Islands", text: "Cayman Islands"}, {value: "Chad", text: "Chad"}, {value: "Chile", text: "Chile"}, {value: "China", text: "China"}, {value: "Colombia", text: "Colombia"}, {value: "Congo", text: "Congo"},
        {value: "Cook Islands", text: "Cook Islands"}, {value: "Costa Rica", text: "Costa Rica"}, {value: "Cote D Ivoire", text: "Cote D Ivoire"}, {value: "Croatia", text: "Croatia"}, {value: "Cruise Ship", text: "Cruise Ship"}, {value: "Cuba", text: "Cuba"}, {value: "Cyprus", text: "Cyprus"}, {value: "Czech Republic", text: "Czech Republic"},
        {value: "Denmark", text: "Denmark"}, {value: "Djibouti", text: "Djibouti"}, {value: "Dominica", text: "Dominica"}, {value: "Dominican Republic", text: "Dominican Republic"}, {value: "Ecuador", text: "Ecuador"}, {value: "Egypt", text: "Egypt"}, {value: "El Salvador", text: "El Salvador"}, {value: "Equatorial Guinea", text: "Equatorial Guinea"},
        {value: "Estonia", text: "Estonia"}, {value: "Ethiopia", text: "Ethiopia"}, {value: "Falkland Islands", text: "Falkland Islands"}, {value: "Faroe Islands", text: "Faroe Islands"}, {value: "Fiji", text: "Fiji"}, {value: "Finland", text: "Finland"}, {value: "France", text: "France"}, {value: "French Polynesia", text: "French Polynesia"},
        {value: "French West Indies", text: "French West Indies"}, {value: "Gabon", text: "Gabon"}, {value: "Gambia", text: "Gambia"}, {value: "Georgia", text: "Georgia"}, {value: "Germany", text: "Germany"}, {value: "Ghana", text: "Ghana"}, {value: "Gibraltar", text: "Gibraltar"}, {value: "Greece", text: "Greece"},
        {value: "Greenland", text: "Greenland"}, {value: "Grenada", text: "Grenada"}, {value: "Guam", text: "Guam"}, {value: "Guatemala", text: "Guatemala"}, {value: "Guernsey", text: "Guernsey"}, {value: "Guinea", text: "Guinea"}, {value: "Guinea Bissau", text: "Guinea Bissau"}, {value: "Guyana", text: "Guyana"},
        {value: "Haiti", text: "Haiti"}, {value: "Honduras", text: "Honduras"}, {value: "Hong Kong", text: "Hong Kong"}, {value: "Hungary", text: "Hungary"}, {value: "Iceland", text: "Iceland"}, {value: "India", text: "India"}, {value: "Indonesia", text: "Indonesia"}, {value: "Iran", text: "Iran"},
        {value: "Iraq", text: "Iraq"}, {value: "Ireland", text: "Ireland"}, {value: "Isle of Man", text: "Isle of Man"}, {value: "Israel", text: "Israel"}, {value: "Italy", text: "Italy"}, {value: "Jamaica", text: "Jamaica"}, {value: "Japan", text: "Japan"}, {value: "Jersey", text: "Jersey"},
        {value: "Jordan", text: "Jordan"}, {value: "Kazakhstan", text: "Kazakhstan"}, {value: "Kenya", text: "Kenya"}, {value: "Kuwait", text: "Kuwait"}, {value: "Kyrgyz Republic", text: "Kyrgyz Republic"}, {value: "Laos", text: "Laos"}, {value: "Latvia", text: "Latvia"}, {value: "Lebanon", text: "Lebanon"}, {value: "Lesotho", text: "Lesotho"}, {value: "Liberia", text: "Liberia"},
        {value: "Libya", text: "Libya"}, {value: "Liechtenstein", text: "Liechtenstein"}, {value: "Lithuania", text: "Lithuania"}, {value: "Luxembourg", text: "Luxembourg"}, {value: "Macau", text: "Macau"}, {value: "Macedonia", text: "Macedonia"}, {value: "Madagascar", text: "Madagascar"}, {value: "Malawi", text: "Malawi"},
        {value: "Malaysia", text: "Malaysia"}, {value: "Maldives", text: "Maldives"}, {value: "Mali", text: "Mali"}, {value: "Malta", text: "Malta"}, {value: "Mauritania", text: "Mauritania"}, {value: "Mauritius", text: "Mauritius"}, {value: "Mexico", text: "Mexico"}, {value: "Moldova", text: "Moldova"},
        {value: "Monaco", text: "Monaco"}, {value: "Mongolia", text: "Mongolia"}, {value: "Montenegro", text: "Montenegro"}, {value: "Montserrat", text: "Montserrat"}, {value: "Morocco", text: "Morocco"}, {value: "Mozambique", text: "Mozambique"}, {value: "Namibia", text: "Namibia"}, {value: "Nepal", text: "Nepal"},
        {value: "Netherlands", text: "Netherlands"}, {value: "Netherlands Antilles", text: "Netherlands Antilles"}, {value: "New Caledonia", text: "New Caledonia"}, {value: "New Zealand", text: "New Zealand"}, {value: "Nicaragua", text: "Nicaragua"}, {value: "Niger", text: "Niger"}, {value: "Nigeria", text: "Nigeria"}, {value: "Norway", text: "Norway"},
        {value: "Oman", text: "Oman"}, {value: "Pakistan", text: "Pakistan"}, {value: "Palestine", text: "Palestine"}, {value: "Panama", text: "Panama"}, {value: "Papua New Guinea", text: "Papua New Guinea"}, {value: "Paraguay", text: "Paraguay"}, {value: "Peru", text: "Peru"}, {value: "Philippines", text: "Philippines"},
        {value: "Poland", text: "Poland"}, {value: "Portugal", text: "Portugal"}, {value: "Puerto Rico", text: "Puerto Rico"}, {value: "Qatar", text: "Qatar"}, {value: "Reunion", text: "Reunion"}, {value: "Romania", text: "Romania"}, {value: "Russia", text: "Russia"}, {value: "Rwanda", text: "Rwanda"},
        {value: "Saint Pierre &amp; Miquelon", text: "Saint Pierre &amp; Miquelon"}, {value: "Samoa", text: "Samoa"}, {value: "San Marino", text: "San Marino"}, {value: "Satellite", text: "Satellite"}, {value: "Saudi Arabia", text: "Saudi Arabia"}, {value: "Senegal", text: "Senegal"}, {value: "Serbia", text: "Serbia"}, {value: "Seychelles", text: "Seychelles"},
        {value: "Sierra Leone", text: "Sierra Leone"}, {value: "Singapore", text: "Singapore"}, {value: "Slovakia", text: "Slovakia"}, {value: "Slovenia", text: "Slovenia"}, {value: "South Africa", text: "South Africa"}, {value: "South Korea", text: "South Korea"}, {value: "Spain", text: "Spain"}, {value: "Sri Lanka", text: "Sri Lanka"},
        {value: "St Kitts &amp; Nevis", text: "St Kitts &amp; Nevis"}, {value: "St Lucia", text: "St Lucia"}, {value: "St Vincent", text: "St Vincent"}, {value: "St. Lucia", text: "St. Lucia"},
        {value: "Sudan", text: "Sudan"}, {value: "Suriname", text: "Suriname"}, {value: "Swaziland", text: "Swaziland"}, {value: "Sweden", text: "Sweden"}, {value: "Switzerland", text: "Switzerland"}, {value: "Syria", text: "Syria"}, {value: "Taiwan", text: "Taiwan"}, {value: "Tajikistan", text: "Tajikistan"},
        {value: "Tanzania", text: "Tanzania"}, {value: "Thailand", text: "Thailand"}, {value: "Timor L\'Este", text: "Timor L\'Este"}, {value: "Togo", text: "Togo"}, {value: "Tonga", text: "Tonga"}, {value: "Trinidad &amp; Tobago", text: "Trinidad &amp; Tobago"}, {value: "Tunisia", text: "Tunisia"}, {value: "Turkey", text: "Turkey"},
        {value: "Turkmenistan", text: "Turkmenistan"}, {value: "Turks &amp; Caicos", text: "Turks &amp; Caicos"}, {value: "Uganda", text: "Uganda"}, {value: "Ukraine", text: "Ukraine"}, {value: "United Arab Emirates", text: "United Arab Emirates"}, {value: "United Kingdom", text: "United Kingdom"}, {value: "Uruguay", text: "Uruguay"}, {value: "Uzbekistan", text: "Uzbekistan"},
        {value: "Venezuela", text: "Venezuela"}, {value: "Vietnam", text: "Vietnam"}, {value: "Virgin Islands (US)", text: "Virgin Islands (US)"}, {value: "Yemen", text: "Yemen"}, {value: "Zambia", text: "Zambia"}, {value: "Zimbabwe", text: "Zimbabwe"}
        ], isRequired: true, name: "Country of Birth", placeHolder: "e.g., Iraq" }, 
        { type: "dropdown", choices: [
        {value: "Alabama", text: "Alabama"}, {value: "Alaska", text: "Alaska"}, {value: "Arizona", text: "Arizona"}, {value: "Arkansas", text: "Arkansas"}, {value: "California", text: "California"}, 
        {value: "Colorado", text: "Colorado"}, {value: "Connecticut", text: "Connecticut"}, {value: "Delaware", text: "Delaware"}, {value: "Georgia", text: "Georgia"}, {value: "Kentucky", text: "Kentucky"},
        {value: "Hawaii", text: "Hawaii"}, {value: "Idaho", text: "Idaho"}, {value: "Illinois", text: "Illinois"}, {value: "Indiana", text: "Indiana"}, {value: "Iowa", text: "Iowa"},
        {value: "Kansas", text: "Kansas"}, {value: "Kentucky", text: "Kentucky"}, {value: "Louisiana", text: "Louisiana"}, {value: "Maine", text: "Maine"}, {value: "Maryland", text: "Maryland"},
        {value: "Massachusets", text: "Massachusets"}, {value: "Michigan", text: "Michigan"}, {value: "Minnesota", text: "Minnesota"}, {value: "Minnesota", text: "Minnesota"}, {value: "Mississippi", text: "Mississippi"},
        {value: "Missouri", text: "Missouri"}, {value: "Montana", text: "Montana"}, {value: "Nebraska", text: "Nebraska"}, {value: "Nevada", text: "Nevada"}, {value: "New Hampshire", text: "New Hampshire"},
        {value: "New Jersey", text: "New Jersey"}, {value: "New Mexico", text: "New Mexico"}, {value: "New York", text: "New York"}, {value: "North Carolina", text: "North Carolina"}, {value: "North Dakota", text: "North Dakota"},
        {value: "Ohio", text: "Ohio"}, {value: "Oklahoma", text: "Oklahoma"}, {value: "Oregon", text: "Oregon"}, {value: "Pennsylvania", text: "Pennsylvania"}, {value: "Rhode Island", text: "Rhode Island"},
        {value: "South Carolina", text: "South Carolina"}, {value: "South Dakota", text: "South Dakota"}, {value: "Tennessee", text: "Tennessee"}, {value: "Texas", text: "Texas"}, {value: "Utah", text: "Utah"},
        {value: "Vermont", text: "Vermont"}, {value: "Virginia", text: "Virginia"}, {value: "Washington", text: "Washington"}, {value: "Washington DC", text: "Washington DC"}, {value: "West Virginia", text: "West Virginia"},
        {value: "Wisconsin", text: "Wisconsin"}, {value: "Wyoming", text: "Wyoming"}], isRequired: true, name: "State"},
    { type: "text", inputType: "number", isRequired: true, name: "Zip Code", placeHolder: "12345", size: "5" }, 
    { type: "text", isRequired: true, name: "Date of birth", placeHolder: "mm/dd/yyyy", size: "10" }, 
    { type: "dropdown", choices: [
        {value: "Afghanistan", text: "Afghanistan"}, {value: "Albania", text: "Albania"}, {value: "Algeria", text: "Algeria"}, {value: "Andorra", text: "Andorra"}, {value: "Angola", text: "Angola"}, {value: "Anguilla", text: "Anguilla"}, {value: "Antigua &amp; Barbuda", text: "Antigua &amp; Barbuda"}, {value: "Argentina", text: "Argentina"}, {value: "Armenia", text: "Armenia"},
        {value: "Aruba", text: "Aruba"}, {value: "Australia", text: "Australia"}, {value: "Austria", text: "Austria"}, {value: "Azerbaijan", text: "Azerbaijan"},{value: "Bahamas", text: "Bahamas"}, {value: "Bahrain", text: "Bahrain"}, {value: "Bangladesh", text: "Bangladesh"}, {value: "Barbados", text: "Barbados"},
        {value: "Belarus", text: "Belarus"}, {value: "Belgium", text: "Belgium"}, {value: "Belize", text: "Belize"}, {value: "Benin", text: "Benin"}, {value: "Bermuda", text: "Bermuda"}, {value: "Bhutan", text: "Bhutan"}, {value: "Bolivia", text: "Bolivia"}, {value: "Bosnia &amp; Herzegovina", text: "Bosnia &amp; Herzegovina"},
        {value: "Botswana", text: "Botswana"}, {value: "Brazil", text: "Brazil"}, {value: "British Virgin Islands", text: "British Virgin Islands"}, {value: "Brunei", text: "Brunei"}, {value: "Bulgaria", text: "Bulgaria"}, {value: "Burkina Faso", text: "Burkina Faso"}, {value: "Burundi", text: "Burundi"}, {value: "Cambodia", text: "Cambodia"},
        {value: "Cameroon", text: "Cameroon"}, {value: "Cape Verde", text: "Cape Verde"}, {value: "Cayman Islands", text: "Cayman Islands"}, {value: "Chad", text: "Chad"}, {value: "Chile", text: "Chile"}, {value: "China", text: "China"}, {value: "Colombia", text: "Colombia"}, {value: "Congo", text: "Congo"},
        {value: "Cook Islands", text: "Cook Islands"}, {value: "Costa Rica", text: "Costa Rica"}, {value: "Cote D Ivoire", text: "Cote D Ivoire"}, {value: "Croatia", text: "Croatia"}, {value: "Cruise Ship", text: "Cruise Ship"}, {value: "Cuba", text: "Cuba"}, {value: "Cyprus", text: "Cyprus"}, {value: "Czech Republic", text: "Czech Republic"},
        {value: "Denmark", text: "Denmark"}, {value: "Djibouti", text: "Djibouti"}, {value: "Dominica", text: "Dominica"}, {value: "Dominican Republic", text: "Dominican Republic"}, {value: "Ecuador", text: "Ecuador"}, {value: "Egypt", text: "Egypt"}, {value: "El Salvador", text: "El Salvador"}, {value: "Equatorial Guinea", text: "Equatorial Guinea"},
        {value: "Estonia", text: "Estonia"}, {value: "Ethiopia", text: "Ethiopia"}, {value: "Falkland Islands", text: "Falkland Islands"}, {value: "Faroe Islands", text: "Faroe Islands"}, {value: "Fiji", text: "Fiji"}, {value: "Finland", text: "Finland"}, {value: "France", text: "France"}, {value: "French Polynesia", text: "French Polynesia"},
        {value: "French West Indies", text: "French West Indies"}, {value: "Gabon", text: "Gabon"}, {value: "Gambia", text: "Gambia"}, {value: "Georgia", text: "Georgia"}, {value: "Germany", text: "Germany"}, {value: "Ghana", text: "Ghana"}, {value: "Gibraltar", text: "Gibraltar"}, {value: "Greece", text: "Greece"},
        {value: "Greenland", text: "Greenland"}, {value: "Grenada", text: "Grenada"}, {value: "Guam", text: "Guam"}, {value: "Guatemala", text: "Guatemala"}, {value: "Guernsey", text: "Guernsey"}, {value: "Guinea", text: "Guinea"}, {value: "Guinea Bissau", text: "Guinea Bissau"}, {value: "Guyana", text: "Guyana"},
        {value: "Haiti", text: "Haiti"}, {value: "Honduras", text: "Honduras"}, {value: "Hong Kong", text: "Hong Kong"}, {value: "Hungary", text: "Hungary"}, {value: "Iceland", text: "Iceland"}, {value: "India", text: "India"}, {value: "Indonesia", text: "Indonesia"}, {value: "Iran", text: "Iran"},
        {value: "Iraq", text: "Iraq"}, {value: "Ireland", text: "Ireland"}, {value: "Isle of Man", text: "Isle of Man"}, {value: "Israel", text: "Israel"}, {value: "Italy", text: "Italy"}, {value: "Jamaica", text: "Jamaica"}, {value: "Japan", text: "Japan"}, {value: "Jersey", text: "Jersey"},
        {value: "Jordan", text: "Jordan"}, {value: "Kazakhstan", text: "Kazakhstan"}, {value: "Kenya", text: "Kenya"}, {value: "Kuwait", text: "Kuwait"}, {value: "Kyrgyz Republic", text: "Kyrgyz Republic"}, {value: "Laos", text: "Laos"}, {value: "Latvia", text: "Latvia"}, {value: "Lebanon", text: "Lebanon"}, {value: "Lesotho", text: "Lesotho"}, {value: "Liberia", text: "Liberia"},
        {value: "Libya", text: "Libya"}, {value: "Liechtenstein", text: "Liechtenstein"}, {value: "Lithuania", text: "Lithuania"}, {value: "Luxembourg", text: "Luxembourg"}, {value: "Macau", text: "Macau"}, {value: "Macedonia", text: "Macedonia"}, {value: "Madagascar", text: "Madagascar"}, {value: "Malawi", text: "Malawi"},
        {value: "Malaysia", text: "Malaysia"}, {value: "Maldives", text: "Maldives"}, {value: "Mali", text: "Mali"}, {value: "Malta", text: "Malta"}, {value: "Mauritania", text: "Mauritania"}, {value: "Mauritius", text: "Mauritius"}, {value: "Mexico", text: "Mexico"}, {value: "Moldova", text: "Moldova"},
        {value: "Monaco", text: "Monaco"}, {value: "Mongolia", text: "Mongolia"}, {value: "Montenegro", text: "Montenegro"}, {value: "Montserrat", text: "Montserrat"}, {value: "Morocco", text: "Morocco"}, {value: "Mozambique", text: "Mozambique"}, {value: "Namibia", text: "Namibia"}, {value: "Nepal", text: "Nepal"},
        {value: "Netherlands", text: "Netherlands"}, {value: "Netherlands Antilles", text: "Netherlands Antilles"}, {value: "New Caledonia", text: "New Caledonia"}, {value: "New Zealand", text: "New Zealand"}, {value: "Nicaragua", text: "Nicaragua"}, {value: "Niger", text: "Niger"}, {value: "Nigeria", text: "Nigeria"}, {value: "Norway", text: "Norway"},
        {value: "Oman", text: "Oman"}, {value: "Pakistan", text: "Pakistan"}, {value: "Palestine", text: "Palestine"}, {value: "Panama", text: "Panama"}, {value: "Papua New Guinea", text: "Papua New Guinea"}, {value: "Paraguay", text: "Paraguay"}, {value: "Peru", text: "Peru"}, {value: "Philippines", text: "Philippines"},
        {value: "Poland", text: "Poland"}, {value: "Portugal", text: "Portugal"}, {value: "Puerto Rico", text: "Puerto Rico"}, {value: "Qatar", text: "Qatar"}, {value: "Reunion", text: "Reunion"}, {value: "Romania", text: "Romania"}, {value: "Russia", text: "Russia"}, {value: "Rwanda", text: "Rwanda"},
        {value: "Saint Pierre &amp; Miquelon", text: "Saint Pierre &amp; Miquelon"}, {value: "Samoa", text: "Samoa"}, {value: "San Marino", text: "San Marino"}, {value: "Satellite", text: "Satellite"}, {value: "Saudi Arabia", text: "Saudi Arabia"}, {value: "Senegal", text: "Senegal"}, {value: "Serbia", text: "Serbia"}, {value: "Seychelles", text: "Seychelles"},
        {value: "Sierra Leone", text: "Sierra Leone"}, {value: "Singapore", text: "Singapore"}, {value: "Slovakia", text: "Slovakia"}, {value: "Slovenia", text: "Slovenia"}, {value: "South Africa", text: "South Africa"}, {value: "South Korea", text: "South Korea"}, {value: "Spain", text: "Spain"}, {value: "Sri Lanka", text: "Sri Lanka"},
        {value: "St Kitts &amp; Nevis", text: "St Kitts &amp; Nevis"}, {value: "St Lucia", text: "St Lucia"}, {value: "St Vincent", text: "St Vincent"}, {value: "St. Lucia", text: "St. Lucia"},
        {value: "Sudan", text: "Sudan"}, {value: "Suriname", text: "Suriname"}, {value: "Swaziland", text: "Swaziland"}, {value: "Sweden", text: "Sweden"}, {value: "Switzerland", text: "Switzerland"}, {value: "Syria", text: "Syria"}, {value: "Taiwan", text: "Taiwan"}, {value: "Tajikistan", text: "Tajikistan"},
        {value: "Tanzania", text: "Tanzania"}, {value: "Thailand", text: "Thailand"}, {value: "Timor L\'Este", text: "Timor L\'Este"}, {value: "Togo", text: "Togo"}, {value: "Tonga", text: "Tonga"}, {value: "Trinidad &amp; Tobago", text: "Trinidad &amp; Tobago"}, {value: "Tunisia", text: "Tunisia"}, {value: "Turkey", text: "Turkey"},
        {value: "Turkmenistan", text: "Turkmenistan"}, {value: "Turks &amp; Caicos", text: "Turks &amp; Caicos"}, {value: "Uganda", text: "Uganda"}, {value: "Ukraine", text: "Ukraine"}, {value: "United Arab Emirates", text: "United Arab Emirates"}, {value: "United Kingdom", text: "United Kingdom"}, {value: "Uruguay", text: "Uruguay"}, {value: "Uzbekistan", text: "Uzbekistan"},
        {value: "Venezuela", text: "Venezuela"}, {value: "Vietnam", text: "Vietnam"}, {value: "Virgin Islands (US)", text: "Virgin Islands (US)"}, {value: "Yemen", text: "Yemen"}, {value: "Zambia", text: "Zambia"}, {value: "Zimbabwe", text: "Zimbabwe"}
        ], isRequired: true, name: "Country of Citizenship"}, 
    { type: "text", name: "Social security number, if you have one", placeHolder: "123-45-6789" }, 
    { type: "text", name: "A-Number", placeHolder: "A123456789", size: "10" }, 
    { type: "text", isRequired: true, name: "Date of last arrival", placeHolder: "mm/dd/yyyy" }, 
    { type: "text", name: "I-94 Arrival-Departure Record Number" }, 
    { type: "text", name: "Current USCIS Status" }, 
    { type: "text", name: "USCIS state expires on", placeHolder: "mm/dd/yyyy", size: "10" }] }] };

//choices: [{ value: "1", text: "test" }, { value: "2", text: "test2" }, { value: "3", text: "test3" }], isRequired: true, name: "State" },
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
