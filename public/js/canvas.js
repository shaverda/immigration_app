var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

//Code to call an image if the user has one
//--------------------------------------------------------------
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
    email: $('#uploadedPhoto').data('email')
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

//-------------------------------------------------------------------------------


var imageObj = new Image();
imageObj.onload = function() {
    context.drawImage(imageObj, 0, 0, 750, 975);
    context.font = "10pt Arial";
    context.fillText($("#last_name").text(), 50, 175);
    context.fillText($("#first_name").text(), 200, 175);
    context.fillText($("#address").text(), 50, 210);
    context.fillText($("#apt_no").text(), 435, 211);
    context.fillText($("#city").text(), 50, 275);
    context.fillText($("#zip").text(), 410, 275);
    context.fillText($("#date_of_birth").text(), 50, 310);
    context.fillText($("#country_of_birth").text(), 280, 310);
    context.fillText($("#country_of_citizenship").text(), 50, 345);
    context.fillText($("#social_security_num").text(), 235, 345);
    context.fillText($("#a_number").text(), 390, 345);
    context.fillText($("#date_of_last_arrival").text(), 50, 380);
    context.fillText($("#i94_arrival_departure_record_number").text(), 280, 380);
    context.fillText($("#current_uscis_status").text(), 50, 415);
    context.fillText($("#status_expires_on").text(), 275, 415);
};
imageObj.src = "/i485.png";


function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}
canvas.addEventListener('mousemove', function(evt) {
    var mousePos = getMousePos(canvas, evt);
    console.log('Mouse position: ' + mousePos.x + ',' + mousePos.y);
}, false);

download.addEventListener("click", function() {
    // only jpeg is supported by jsPDF
    var imgData = canvas.toDataURL("image/jpeg", 1.0);
    var pdf = new jsPDF();

    pdf.addImage(imgData, 'JPEG', 0, 0);
    var download = document.getElementById('download');

    pdf.save("download.pdf");
}, false);

$("#display_pdf").click(function() {
  $("#canvas").css("display", "");
  $(this).css("display", "none");
  $("#hide_pdf").css("display", "");
  $("#documentInfoContainer").hide();
});

$("#hide_pdf").click(function() {
  $("#canvas").css("display", "none");
  $(this).css("display", "none");
  $("#display_pdf").css("display", "");
  $("#documentInfoContainer").show();
})
