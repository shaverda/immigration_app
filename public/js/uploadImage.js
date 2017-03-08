// $('.submitBtn').on('click', function(){

// });

// var image = {
// 	url: 'C:/Users/willi/Pictures/backgrounds/cliff.jpg'
// };

// $.post('/api/uploadImage', info);

function readURL(input){
	if (input.files && input.files[0]){
		var reader = new FileReader();

		reader.onload = function (e){
			var image = e.target.result;
			$('#uploadedPhoto').attr('src', image);
			var data = {
				image: image,
				email: JSON.parse(localStorage.profile).email
			}
			$.post('/api/uploadImage', data);
			// console.log(link);
		}

		reader.readAsDataURL(input.files[0]);
		
	}
};

$('#uploadInput').change(function(){
	readURL(this);
});