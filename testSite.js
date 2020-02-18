var previousNo = null;
var nextNo = null;
var actNum = null;
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
    //$("#circleMsg").load("./error.html");
    document.getElementById("circleMsg").innerHTML = "";
    nonInt = document.createTextNode("ERROR: Nice try! The number must be a positive integer!");
    document.getElementById("circleMsg").appendChild(nonInt);
  }
}

function createGame(value) {
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
  nextNo = circleArr.shift();
  actNum = nextNo++;
  document.getElementById("circleMsg").innerHTML = "";
  if (j == nextNo) {
    document.getElementById("circle" + j).style.backgroundColor = "#178a00";
    if (circleArr.length == 0) {
      //$("#circleMsg").load("./error.html");
      console.log("You win!");
      winText = document.createTextNode("Congratulations! You have won with " + circleNo + " circles! Press Start Game to play again.");
      winText.id = "winText";
      document.getElementById("circleMsg").appendChild(winText);
      /*for (i = 0; i < circleNo; i++) {
        document.getElementById("circle" + i).onclick = function() {
          return false;
        };
      }*/
    }
  } else {
    //$("#circleMsg").load("./error.html");
    document.getElementById("circleMsg").innerHTML = "";
    wrongGuess = document.createTextNode("Sorry, the correct circle number was " + actNum + "! The game has been reset for you!");
    document.getElementById("circleMsg").appendChild(wrongGuess);
    getValueGame();
  }
}