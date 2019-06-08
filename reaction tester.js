var start = new Date().getTime();

function getRandomColor() {
  var huecolor =
    "rgb(" +
    Math.floor(Math.random() * 256) +
    "," +
    Math.floor(Math.random() * 256) +
    "," +
    Math.floor(Math.random() * 256) +
    ")";

  return huecolor;
}
function makeShapeAppear () {
  // generating random things
  var top = Math.random() * 400;
  var left = Math.random() * 400;
  var width = Math.random() * 200 + 100;
  var height = Math.random() * 200 + 50;
  // essential things
  if (Math.random() > 0.5) {
    document.getElementById("generation").style.borderRadius = "50%";
  } else {
    document.getElementById("generation").style.borderRadius = "0%";
  }
  document.getElementById("generation").style.width = width + "px";
  document.getElementById("generation").style.height = height + "px";
  document.getElementById("generation").style.top = top + "px";
  document.getElementById("generation").style.left = left + "px";
  document.getElementById(
    "generation"
  ).style.backgroundColor = getRandomColor();
  document.getElementById("generation").style.display = "block";

  start = new Date().getTime();
}

setTimeout(makeShapeAppear, Math.random() * 2000);
document.getElementById("generation").onclick = function() {
  document.getElementById("generation").style.display = "none";
  var end = new Date().getTime();
  var timeTaken = (end - start) / 1000;
  document.getElementById("time-Taken").innerHTML = timeTaken + "s";

  setTimeout(makeShapeAppear, Math.random() * 2000);
};
