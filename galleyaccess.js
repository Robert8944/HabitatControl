var attempt = "";
var passcode = "1234321";
var locked = true;
document.addEventListener("DOMContentLoaded", function(event) { });
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
        locked = !locked
        if(locked){
            document.getElementById("galleyStatusDisplay").innerHTML = "LOCKED";
            document.getElementById("galleyStatusDisplay").style = "color:red";
        }else{
            document.getElementById("galleyStatusDisplay").innerHTML = "UNLOCKED";
            document.getElementById("galleyStatusDisplay").style = "color:green";
        }
        
    }else{
        alert("Incorrect Passcode!");
    }
    attempt = "";
    document.getElementById("passcodeInput").innerHTML = "";
}