var dice1Score = 0;   
var dice2Score = 0;

function Randomizer()//randomizer
{
    var randNum1=Math.floor(Math.random()*6)+1;
    var randNum2=Math.floor(Math.random()*6)+1;
    var ranDiceImg = "dice"+randNum1+".png";

    

    var image1=document.querySelectorAll("img")[0];
    image1.setAttribute("src",randImgSrc1);



    var randImgSrc1="images/dcim/dice"+randNum1+".png";
    var randImgSrc2="images/dcim/dice"+randNum2+".png";

    document.querySelectorAll("img")[0].setAttribute("src",randImgSrc1);
    document.querySelectorAll("img")[1].setAttribute("src",randImgSrc2);

    if(randNum1>randNum2)
    {
        document.querySelector("#answer").innerHTML="Player 1 wins";
        dice1Score+=1;
        document.getElementById("Score1").innerHTML=""+dice1Score;
    }
    else if(randNum2>randNum1)
    {
        document.querySelector("#answer").innerHTML="Player 2 wins";
        dice2Score+=1;
        document.getElementById("Score2").innerHTML=""+dice2Score;
    }
    else
    {
        document.querySelector("#answer").innerHTML="Draw!";
    }

        console.log(dice1Score);
        console.log(dice2Score);
}

function klik() 
{
    document.getElementById("img1").classList.remove("diceAnim"); 
    document.getElementById("img2").classList.remove("diceAnim");

    setTimeout(function() {
        Randomizer();
        
        document.getElementById("img1").classList.add("diceAnim");
        document.getElementById("img2").classList.add("diceAnim");
    }, 500);
}

document.getElementById("but").addEventListener("click", klik);
