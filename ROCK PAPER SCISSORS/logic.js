var user;
var userscore=0;
var computer;
var computerscore=0;
var result="LET'S GET STARTED";
let reset=document.getElementById("reset");

var choices=["rock","paper","scissors"];

window.onload = function(){
    for(var i=0;i<3;i+=1){
    let choice=document.createElement("img");
    choice.id=choices[i];
    choice.src=choices[i]+".png";
    choice.addEventListener("click",select);
    document.getElementById("choices").append(choice);
    
    }
}

function select()
{
    user =this.id; 
    document.getElementById("userImage").src= user + ".png";
    
    computer = choices[Math.floor(Math.random()*3)];
    document.getElementById("computerImage").src= computer+ ".png";

    if(user==computer)
    {
        userscore+=1;
        computerscore+=1;
        result="TIE"
    }

    if(user=="rock")
    {
        if(computer=="paper")
        {
            computerscore+=1;
            result="COMPUTER WON!"
        }
        if(computer=="scissors")
        {
            userscore+=1;
            result="YOU WON!";
        }
    }

    if(user=="paper")
    {
        if(computer=="scissors")
        {
            computerscore+=1;
            result="COMPUTER WON!"
        }
        if(computer=="rock")
        {
            userscore+=1;
            result="YOU WON!";
        }
    }

    if(user=="scissors")
    {
        if(computer=="rock")
        {
            computerscore+=1;
            result="COMPUTER WON!"
        }
        if(computer=="paper")
        {
            userscore+=1;
            result="YOU WON!";
        }
    }

    document.getElementById("userScore").innerText=userscore;
    document.getElementById("computerScore").innerText=computerscore;
    document.getElementById("result").innerHTML=result;
}

reset.addEventListener("click",()=>{
  userscore=0;
    computerscore=0;
    result="LET'S GET STARTED";
    document.getElementById("userScore").innerText=userscore;
    document.getElementById("computerScore").innerText=computerscore;
    document.getElementById("result").innerHTML=result;
});