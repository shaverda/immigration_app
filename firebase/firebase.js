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
}

database.ref().set({
    highBidder: 5,
    highPrice: 5
});