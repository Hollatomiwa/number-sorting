function showA() {
  document.getElementById("ascend").style.display = "block";
  document.getElementById("descend").style.display = "none";
}
function showD() {
  document.getElementById("descend").style.display = "block";
  document.getElementById("ascend").style.display = "none";
}

function ascend() {
  var numbers = document.getElementById("numbers").value;
  var numArray = numbers.split(',');
  numArray.sort(function(a, b) {
  return a - b;
});
   document.getElementById("result").style.display = "block";
   document.getElementById("result").value = numArray;
}
function timeA() {
  var startTime = performance.now();
  ascend();
  var endTime = performance.now();
  var ms = endTime -startTime;
  var sec = ms / 1000;
  document.getElementById("time").innerHTML = "Time Taken is " + sec + " seconds."
}
function descend() {
  var numbers = document.getElementById("numbers2").value;
  var numArray = numbers.split(',');
  numArray.sort(function(a, b) {
    return b - a;
  });
  document.getElementById("result2").style.display = "block";
  document.getElementById("result2").value = numArray;
}

function timeD() {
  var startTime = performance.now();
  descend();
  var endTime = performance.now();
  var ms = endTime -startTime;
  var sec = ms / 1000;
  document.getElementById("time").innerHTML = "Time Taken is " + sec + " seconds."
}
