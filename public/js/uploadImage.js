$( document ).ready(function() {

	function myCtrl($scope, $timeout) {    
    	AWS.config.update({
  			accessKeyId: 'AKIAIQ2BKEKDRRH2M3OA', secretAccessKey: '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'});
    		AWS.config.region = "US Standard";

			var bucket = new AWS.S3({params: {Bucket: 'immigrationportalphotoid'}});

    		bucket.getObject({Key: 'williamwgilmore@gmail.com.jpg'},function(err,file){

    		$timeout(function(){
        		$scope.s3url = "data:image/jpeg;base64," + encode(file.Body);
        		console.log($scope.s3url);
    		},1);
		});
	}

	function encode(data)
	{
   		var str = data.reduce(function(a,b){ return a+String.fromCharCode(b) },'');
    	return btoa(str).replace(/.{76}(?=.)/g,'$&\n');
	}

	myCtrl();


	function findImage(){
		data = {
			email: JSON.parse(localStorage.profile).email
		}
		$.post('/api/findImage', data);
	};

	// findImage();



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