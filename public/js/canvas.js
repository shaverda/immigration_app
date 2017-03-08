var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
// var image = document.getElementById('source');


var imageObj = new Image();
imageObj.onload = function() {
    context.drawImage(imageObj, 0, 0, 750, 975);
    context.font = "10pt Arial";
    context.fillText($("#first_name").text(), 50, 175);
};
imageObj.src = "i485.png";


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
