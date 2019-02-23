var wins = 0;
var losses = 0;
var userScore = 0;
var randomScore = 0;
var whiteCrystalScore = 1;
var blueCrystalScore = 2;
var redCrystalScore = 3;
var greenCrystalScore = 4;


$(document).ready(function(){
        crystalScore();
        randomscoreGen();
    });
      

function randomscoreGen(){
    randomScore = Math.floor(Math.random() * 120) + 19  
    console.log(randomScore)
    $("#randomscoreText").text(randomScore);

}

function crystalScore() {


    whiteCrystalScore = Math.ceil(Math.random() * 12);
    blueCrystalScore = Math.ceil(Math.random() * 12);
    greenCrystalScore = Math.ceil(Math.random() * 12);
    redCrystalScore = Math.ceil(Math.random() * 12);
    
    console.log(whiteCrystalScore);
    console.log(blueCrystalScore);
    console.log(greenCrystalScore);
    console.log(redCrystalScore);
    sameScore();

}


function sameScore() {
    if (whiteCrystalScore === blueCrystalScore || whiteCrystalScore === greenCrystalScore ||
    whiteCrystalScore === redCrystalScore || blueCrystalScore === greenCrystalScore ||
    blueCrystalScore === redCrystalScore || greenCrystalScore === redCrystalScore){
    console.log("same")
    crystalScore();
}

}

$("#blue-crystal").on("click", function() {

    userScore += blueCrystalScore;
    
    });

$("#green-crystal").on("click", function() {

    userScore += greenCrystalScore;

    });

$("#red-crystal").on("click", function() {

    userScore += redCrystalScore;


    });
    
$("#white-crystal").on("click", function() {
    userScore += whiteCrystalScore;
});

$(document).on("click", function(){
     $("#userscoreText").text(userScore);
     if(userScore === randomScore){
        userScore = 0;
        wins++;
        $("#winsText").text(wins);
        $("#userscoreText").text(userScore);
        alert("Good Job You Won!");
        crystalScore();
        randomscoreGen();
     }

     else if (userScore > randomScore){
        losses++;
        userScore = 0;
        $("#lossesText").text(losses);
        $("#userscoreText").text(userScore);
        alert("Sorry You Lost...Try Again?");
        crystalScore();
        randomscoreGen();
     }
});      
