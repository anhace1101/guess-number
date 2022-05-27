//get dom element
var playBoxElement = document.querySelector(".play-box");

//input element
var inputNumberElement = document.querySelector(".play-box #input-field");
//check button E
var checkButtonElement = document.querySelector(".play-box #check-btn");
//again button E
var againButtonElement = document.querySelector(".play-box #again-btn");
// message
var messageElement = document.querySelector(".play-box .message");
//score
var scoreCounting = document.querySelector(".play-box .score");
//high-score element
var highScoreElement = document.querySelector(".play-box .high-score");

//generate random number funcion
var randomNumberFunction = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
// random number
var randomNumber = randomNumberFunction(1, 20);
console.log(randomNumber);

//array score
var scoreArray = [];
var highScore;
//logic game
var score = 20;
var checkNumberFunction = () => {
  //when player no input
  if (inputNumberElement.value === "") {
    messageElement.textContent = "please enter your number";
  }
  //when player input too low
  else if (inputNumberElement.value < randomNumber) {
    --score;
    messageElement.textContent = "too low";
    scoreCounting.textContent = "score: " + score;
  }
  //when player input too low
  else if (inputNumberElement.value > randomNumber) {
    --score;
    messageElement.textContent = "too high";
    scoreCounting.textContent = "score: " + score;
  }
  //when player win
  else {
    scoreArray.push(score);
    console.log(scoreArray);
    messageElement.textContent = "correct number ";
    playBoxElement.style.backgroundColor = "#60b347";
    //find max
    highScore = Math.max(...scoreArray);
    highScoreElement.textContent = "high score: " + highScore;
    checkButtonElement.style.display ="none"
  }
};

againButtonElement.onclick = () => {
  //display check Button
  checkButtonElement.removeAttribute("style");

  //set score 20
  score = 20;
  scoreCounting.textContent = "score: " + score;
  //set messet default
  messageElement.textContent = "start guessing...";
  //set input value
  inputNumberElement.value = "";
  //remove background
  playBoxElement.removeAttribute("style");
  // renew random number
  randomNumber = randomNumberFunction(1, 20);
  console.log("random number: ", randomNumber);
};
checkButtonElement.onclick = () => {
  checkNumberFunction();
};
