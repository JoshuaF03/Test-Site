$(document).ready(function() {
  $("#menuBar").load("./menuBar.html");
});

function getValueGame() {
  var circleNo = document.getElementById('circleNo').value;
  if (Math.floor(circleNo) == circleNo && $.isNumeric(circleNo) && circleNo > 0) {
    randomizeGame(circleNo);
  } else {
    $("#circleError").load("./error.html");
    $("#errorMsg").append("ERROR: Nice try! The number must be a positive integer!");
  }
}

function randomizeGame(value) {
  for (i = 0; i < value; i++) {
    var gameCircle = document.createElement("span");
    gameCircle.setAttribute("id", "circle" + i)
  }
}