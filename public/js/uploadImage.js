$( document ).ready(function() {

	var hasOwnProperty = Object.prototype.hasOwnProperty;

	function isEmpty(obj) {

    // null and undefined are "empty"
    if (obj == null) return true;

    // Assume if it has a length property with a non-zero value
    // that that property is correct.
    if (obj.length > 0)    return false;
    if (obj.length === 0)  return true;

    // If it isn't an object at this point
    // it is empty, but it can't be anything *but* empty
    // Is it empty?  Depends on your application.
    if (typeof obj !== "object") return true;

    // Otherwise, does it have any properties of its own?
    // Note that this doesn't handle
    // toString and valueOf enumeration bugs in IE < 9
    for (var key in obj) {
        if (hasOwnProperty.call(obj, key)) return false;
    }

    return true;
	}


	//check if the user has uploaded an image already
	function findImage(){
		key = {
			email: JSON.parse(localStorage.profile).email
		}
		$.post('/api/findImage', key).then(function(data) {
			//make sure that data is not empty
            if (!isEmpty(data)){
            	//put our image on the page
            	$('#uploadedPhoto').attr('src', 'data:image/png;base64,' + data);
            }
        });
	};

	//run this function on page load
	findImage();



	//reads the encrypted image path
	function readURL(input){
		//makes sure we have a file
		if (input.files && input.files[0]){
			var reader = new FileReader();

			//I think this runs after reader.readAsDataURL(image) (line27)
			//once the promise is returned, we run through the following
			reader.onload = function (e){
				//encrypted url stored in base64
				var image = e.target.result;
				console.log(image);

				//we display the image on the page
				$('#uploadedPhoto').attr('src', image);
				//stores the url and user's email to send to the server
				var data = {
					image: image,
					email: JSON.parse(localStorage.profile).email
				}
				//hit survey-api-routes.js with image/email
				$.post('/api/uploadImage', data);
			}

			//creates the encrypted image data
			reader.readAsDataURL(input.files[0]);
				
		}
	};

	//called when an image is selected
	$('#uploadInput').change(function(){
		readURL(this);
	});

});