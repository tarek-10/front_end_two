/*var num1 = parseInt(window.prompt("Enter Your Frist Number"));
var num2 = parseInt(window.prompt("Enter Your second Number"));
document.getElementById("plus").innerHTML = num1 + num2;
document.getElementById("minus").innerHTML = num1  - num2;
document.getElementById("multi").innerHTML = num1 * num2;
document.getElementById("div").innerHTML = num1 / num2;*/
/*
var name1 = window.prompt("Enter Your Name");
var age = window.prompt("Enter Your Age ");
var height = window.prompt("Enter Your height");
var name2 = window.prompt("Enter Your Name");
var age2 = window.prompt("Enter Your Age ");
var height2 = window.prompt("Enter Your height");
var persons = [{name:name1,age:age,height:height} ,{name:name2,age:age2,height:height2}]
document.getElementById("person1").innerHTML=persons[0].name +"  and he is "+persons[0].age +" "+persons[0].height;
document.getElementById("person2").innerHTML=persons[1].name +"  and he is "+persons[1].age +" "+persons[1].height;

*/
var red = document.querySelector(".red");
var blue = document.querySelector(".blue");
var yellow = document.querySelector(".yellow");
var black = document.querySelector(".black");
var text = document.querySelector(".text");

function turnRed()
{
    text.style.color="red";
}

function turnBlue()
{
    text.style.color="blue";
}


function turnYellow()
{
    text.style.color="yellow"
}


function turnBlack()
{
    text.style.color="black";
}

red.addEventListener("click",turnRed);
blue.addEventListener("click",turnBlue);
yellow.addEventListener("click",turnYellow);
black.addEventListener("click",turnBlack);

