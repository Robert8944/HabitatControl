var passcode = "1234321";
var attempt = "";
document.addEventListener("DOMContentLoaded", function(event) { 
    document.getElementById("pinLock1").innerHTML = "&#" + Math.round((Math.random()*255)+9728);
    document.getElementById("pinLock2").innerHTML = "&#" + Math.round((Math.random()*255)+9728);
    document.getElementById("pinLock3").innerHTML = "&#" + Math.round((Math.random()*255)+9728);
    document.getElementById("pinLock4").innerHTML = "&#" + Math.round((Math.random()*255)+9728);
});
function pressPin1(){
    attempt += "1";
    document.getElementById("passcodeInput").innerHTML = document.getElementById("passcodeInput").innerHTML + document.getElementById("pinLock1").innerHTML
}
function pressPin2(){
    attempt += "2";
    document.getElementById("passcodeInput").innerHTML = document.getElementById("passcodeInput").innerHTML + document.getElementById("pinLock2").innerHTML
}
function pressPin3(){
    attempt += "3";
    document.getElementById("passcodeInput").innerHTML = document.getElementById("passcodeInput").innerHTML + document.getElementById("pinLock3").innerHTML
}
function pressPin4(){
    attempt += "4";
    document.getElementById("passcodeInput").innerHTML = document.getElementById("passcodeInput").innerHTML + document.getElementById("pinLock4").innerHTML
}
function submitCode(){
    if(attempt == passcode){
        window.location.href = "index.html";
    }else{
        attempt = "";
        alert("Incorrect Passcode!");
        document.getElementById("passcodeInput").innerHTML = "";
    }
}