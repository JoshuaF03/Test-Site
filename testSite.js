var previousNo = null;
var circleNo = null;
var circleArr = [];

$(document).ready(function() {
  $("#menuBar").load("./menuBar.html");
});

function getValueGame() {
  circleNo = document.getElementById('circleNo').value;
  if (document.getElementById("winText")) {
    document.getElementById("winText").remove();
  }
  if (Math.floor(circleNo) == circleNo && $.isNumeric(circleNo) && circleNo > 0) {
    document.getElementById("circleGame").innerHTML = "";
    circleArr = [];
    createGame(circleNo);
  } else {
    $("#circleError").load("./error.html");
    nonInt = document.createTextNode("ERROR: Nice try! The number must be a positive integer!");
    errorMsg.appendChild(nonInt);
  }
}

function createGame(value) {
  previousNo = value;
  for (let i = 0; i < value; i++) {
    gameCircle = document.createElement("div");
    gameCircle.className = 'gameCircle';
    gameCircle.id = "circle" + i;
    gameCircle.onclick = function() {
      checkGame(i);
    };
    document.getElementById("circleGame").appendChild(gameCircle);
  }
  for (i = 0; i < value; i++) {
    circleArr.push(i);
  }
  randomizeGame(circleArr);
}

function randomizeGame(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

function checkGame(j) {
  var nextNo = circleArr.shift();
  if (j == nextNo) {
    document.getElementById("circle" + j).style.backgroundColor = "#178a00";
    if (circleArr.length == 0) {
      $("#circleError").load("./error.html");
      console.log("You win!");
      winText = document.createTextNode("Congratulations! You have won with " + circleNo + " circles! Press Start Game to play again.");
      winText.id = "winText";
      document.getElementById("errorMsg").appendChild(winText);
      /*for (i = 0; i < circleNo; i++) {
        document.getElementById("circle" + i).onclick = function() {
          return false;
        };
      }*/
    }
  } else {
    $("#circleError").load("./error.html");
    wrongGuess = document.createTextNode("Sorry, the correct circle number was " + j + "! The game has been reset for you!");
    document.getElementById("errorMsg").appendChild(wrongGuess);
    getValueGame();
  }
}