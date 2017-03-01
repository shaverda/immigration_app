Survey.Survey.cssType = "bootstrap";

var surveyJSON = {pages:[{name:"Information About You",questions:[{type:"text",isRequired:true,name:"Family/last name:"},{type:"text",isRequired:true,name:"Given/first name:"},{type:"text",name:"Middle name:",placeHolder:"leave blank if none"},{type:"text",isRequired:true,name:"Address",placeHolder:"for example, 123 Apple St.",title:"Street Number and Name"},{type:"text",name:"Apartment #",placeHolder:"if you have an apartment number or letter"},{type:"text",isRequired:true,name:"City"},{type:"dropdown",choices:[{value:"1",text:"test"},{value:"2",text:"test2"},{value:"3",text:"test3"}],isRequired:true,name:"State"}]},{name:"page1"}]}

function sendDataToServer(survey) {
    $.post("/survey", survey).then((data) => {
    	console.log("posting complete");
    	alert("The results are:" + JSON.stringify(s.data));
    })
}

var survey = new Survey.Model(surveyJSON);
$("#surveyContainer").Survey({
    model: survey,
    onComplete: sendDataToServer
});

// Initialize Firebase
var configfire = {
    apiKey: "AIzaSyAq_bZYzPn4ti7KkNuI0sz8VWUyePltqzc",
    authDomain: "immigrationid-4c8c2.firebaseapp.com",
    databaseURL: "https://immigrationid-4c8c2.firebaseio.com",
    storageBucket: "immigrationid-4c8c2.appspot.com",
    messagingSenderId: "763461872131"
};

firebase.initializeApp(configfire);

var database = firebase.database();

database.ref().on("value", function(snapshot) {
    console.log('set data');
});

database.ref().set({
    userID: 1,
    photoURL: hello.jpg
});