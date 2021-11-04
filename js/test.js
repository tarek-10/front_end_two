/*function test(){
    document.getElementById("demo").innerHTML = "Hello JavaScript!";
}
 */
/*
 var x = [1,2,3,4];
 x.splice(2,2,7,8);

 var y = [3,4,5,6,7,8,33,4,55,67,88];
 console.log(y.sort(function(a,b){return a-b}))

// var sum = (x,y)=> x+y;//arrow functions
*/
/*
function playSound(e){
    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
    const key = document.querySelector(`div[data-key='${e.keyCode}']`);
    if(!audio)return;
    key.classList.add("playing");
    audio.currentTime = 0;
    audio.play();
}
function removeTransition(e){
    if(e.propertyName != "transform") return;
    e.target.classList.remove("playing");
}
window.addEventListener("keydown",playSound);
const keys = Array.from(document.querySelectorAll("key"));
keys.forEach((key) => {
    key.addEventListener("transitionend",removeTransition);
});
*/
const secondHand = document.querySelector(".second hand");
const mintHand =  document.querySelector(".min hand");
const hourHand = document.querySelector(".hour-hand");
function setDate(){
    const now = 
}