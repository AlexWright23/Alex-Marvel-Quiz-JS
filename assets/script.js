var questions = document.querySelector("#questions");
var timerElement = document.querySelector(".timer");
var startButton = document.querySelector(".start-button");
var answersDiv = document.querySelector("#answers");
var qContainer = document.querySelector(".questionContainer");
var welcome = document.querySelector("#welcome");
var endText = document.querySelector("#endText");
var quesText = document.querySelector("#questionText");
var saveButton = document.querySelector("#save-button");
var scoreBlock = document.querySelector("#scoreBox");
var techExp = document.querySelector("#marVel");
var index = 0;
var score;
var timer;
var timerCount;
var chosenQuestion = [];

var questions = [
  { text: "How many infinity stones are there?", answers: [{ name: "3", value: false }, { name: "12", value: false }, { name: "6", value: true }, { name: "8", value: false }] },
  { text: "Whose power exceeds that of the Sorcerer Supreme?", answers: [{ name: "Hulk", value: false }, { name: "The Scarlet Witch", value: true }, { name: "Thor", value: false }, { name: "The Darkhold", value: false }] },
  { text: "Who was able to pick up Thors hammer in Endgame?", answers: [{ name: "Thanos", value: false }, { name: "Spiderman", value: false }, { name: "Captain America", value: true }, { name: "Iron Man", value: false }] },
  { text: "How long was Ant Man stuck in the quantum realm for?", answers: [{ name: "5 years", value: true }, { name: "3 weeks", value: false }, { name: "2 years", value: false }, { name: "5 days", value: false }] },
]

function startGame() {
  timerCount = 60;
  qContainer.classList.remove("hide");
  welcome.classList.add("hide");
  startButton.classList.add("hide");
  scoreBox.classList.remove("hide");
  marVel.classList.add("hide");
  startTimer()
  renderQuestions()
}

function startTimer() {
  timer = setInterval(function () {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount <= 0) {
      endGame()
    }
  }, 1000);
}

var index = 0

function renderQuestions() {
  document.getElementById("questions").innerHTML = questions[index].text;
  answersDiv.innerHTML = '';
  questions[index].answers.forEach(answer => {
      var button = document.createElement("button")
    button.setAttribute("data-value", answer.value)
    button.textContent = answer.name
    answersDiv.appendChild(button)
    button.onclick = function (event) {
      var guess = event.target.dataset.value
        if (guess === "true") {
        console.log("correct");
        } else {
        console.log("Incorrect");
        timerCount -= 5
        }
        index++
        if (questions.length > index) {
        renderQuestions()
       } else {
        endGame()
        }
     }
    });
}

function endGame() {
  clearInterval(timer);
  qContainer.classList.add("hide");
  endText.classList.remove("hide");
}

saveButton.addEventListener("click", function (event) {
  event.preventDefault();

  var userInfo = document.querySelector("#user").value;
  var score = document.querySelector("#timeScore").innerHTML;
  localStorage.setItem("initials", userInfo);
  localStorage.setItem("score", score);
});

startButton.addEventListener("click", startGame);