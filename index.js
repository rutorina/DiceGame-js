var Images = ["./images/dice1.png", "./images/dice2.png","./images/dice3.png","./images/dice4.png","./images/dice5.png","./images/dice6.png"];
var dice1 = Math.round(Math.random() * 5);
var dice2 = Math.round(Math.random() * 5);
/*console.log(dice1);
console.log(dice2);*/
document.querySelector(".img1").setAttribute("src", Images[dice1]);
document.querySelector(".img2").setAttribute("src", Images[dice2]);

if(dice1 == dice2) {
    document.querySelector("h1").innerText = "Draw!";
}
else if (dice1 > dice2) { 
    document.querySelector("h1").innerText = "Player 1 Won!";
}
else { 
    document.querySelector("h1").innerText = "Player 2 Won!";
}