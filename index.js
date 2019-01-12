//Randomg Number 3 

var randomNumber1 = Math.floor(Math.random() * 6) + 1; //number from 1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; // dice1.png - dice.6png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice2.png


var image1 = document.querySelectorAll("img")[0];

//we selecting the html IMG tag first one 

image1.setAttribute("src", randomImageSource);



//Randomg Number 2

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomImageSource = "images/" + randomDiceImage2;

var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource);
//we selecting the html IMG tag Second one 

 


//Select a winner 


if (randomNumber1>randomNumber2){
document.querySelector("h1").innerHTML="⭐Player 1 WINS"
    
    
}else if (randomNumber1<randomNumber2){
document.querySelector("h1").innerHTML="⭐Player 2 WINS"
} else {
document.querySelector("h1").innerHTML="⭐DRAW⭐"
}
 









//
//window.onload = choosePic;

//var myPix = new Array("images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png");
//
//function choosePic() {
//    var randomNum = Math.floor(Math.random() * 6) + 1;
//    document.queruS("myPicture").src = myPix[randomNum];

//document.write("<img src =\"" + Math.floor(1+ Math.random() * 6) + ".png\" />");


// var imgCount = 6;
//        var dir = 'images/';
//        var randomCount = Math.round(Math.random() * (imgCount - 1)) + 1;
//        var images = new Array
//                images[1] = "dice1.png",
//                images[2] = "dice2.png",
//                images[3] = "dice3.png",
//                images[3] = "dice4.png",
//                images[3] = "dice5.png",
//                images[3] = "dice6.png",
//    document.getElementById("divID").style.backgroundImage = "url(" + dir + images[randomCount] + ")";
//