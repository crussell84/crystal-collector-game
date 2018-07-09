$(document).ready(function() {
var crystalNums = [];
var goal = 0;
var wins = 0;
var losses = 0;
var currentScore = 0;
var _goal = $("h3.goal");
var _currentScore = $("h3.score");
var _wins = $("h3.wins");
var _losses = $("h3.losses");

//generate a random number between the min & max, inculsive
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

//add 4 unique random numbers from 1 - 12 to the array
function createCrystalArray() {
    while (crystalNums.length < 4){
        var num = getRndInteger(1,12);
        if (crystalNums.indexOf(num) == -1){
            crystalNums.push(num);
        }
    }
}

//get the game in the correct state to start a new round
function gameSetup() {
    crystalNums = [];
    createCrystalArray();
    goal = getRndInteger(19,120);
    currentScore = 0;
    _goal.text("Goal: " + goal);
    _currentScore.text("Current: " + currentScore);
    _wins.text("Wins: " + wins);
    _losses.text("Losses: " + losses);
}

//the meaty logic bit to handle score tracking & win/loss condition
function gameLogic(ind) {
    currentScore = currentScore + crystalNums[ind];
    if (currentScore < goal){
        _currentScore.text("Current: " + currentScore);
    }
    else if (currentScore == goal) {
        wins++;
        alert("You win!");
        gameSetup();
    }
    else {
        losses++;
        alert("You lost!");
        gameSetup();
    }
}

gameSetup();

//click handlers for the four images
$(".firstCrystal").on("click", function(){
    gameLogic(0);
});

$(".secondCrystal").on("click", function(){
    gameLogic(1);
});

$(".thirdCrystal").on("click", function(){
    gameLogic(2);
});

$(".fourthCrystal").on("click", function(){
    gameLogic(3);
});

});