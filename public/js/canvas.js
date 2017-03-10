var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var imageObj = new Image();
imageObj.onload = function() {
    context.drawImage(imageObj, 0, 0, 750, 975);
    context.font = "10pt Arial";
    context.fillText($("#last_name").text(), 50, 175);
    context.fillText($("#first_name").text(), 200, 175);
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
