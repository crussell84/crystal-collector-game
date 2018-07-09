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

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function createCrystalArray() {
    while (crystalNums.length < 4){
        var num = getRndInteger(1,12);
        if (crystalNums.indexOf(num) == -1){
            crystalNums.push(num);
        }
    }
}

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

function gameLogic(ind) {
    currentScore = currentScore + crystalNums[ind];
    if (currentScore < goal){
        _currentScore.text("Current: " + currentScore);
    }
    else if (currentScore == goal) {
        wins++;
        alert("You win!");
        console.log(wins);
        gameSetup();
    }
    else {
        losses++;
        alert("You lost!");
        console.log(losses);
        gameSetup();
    }
}

gameSetup();
console.log(crystalNums);

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