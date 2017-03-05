// dbx.filesListFolder({path: ''})
//   .then(function(response) {
//     console.log(response);
//   })
//   .catch(function(error) {
//     console.log(error);
//   });



$('.btn').on('click', function(){
  var image = $('.file-upload');
  $.post('/api/uploadImage', image);
});



// function uploadFile() {
//       var dbx = new Dropbox({ accessToken: 'pff8kkoCF38AAAAAAAAAe3XFDkqzsZ94EWizYFi7KUfLJhAeD-kTE1gaKEndh_UU' });
//       var fileInput = document.getElementById('file-upload');
//       var file = fileInput.files[0];
//       dbx.filesUpload({path: '/' + file.name, contents: file})
//         .then(function(response) {
//           var results = document.getElementById('results');
//           results.appendChild(document.createTextNode('File uploaded!'));
//           console.log(response);
//         })
//         .catch(function(error) {
//           console.error(error);
//         });
//       return false;
//     }