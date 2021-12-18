document.addEventListener("DOMContentLoaded", function(event) { 

});
function setFanSpeed(){
    document.getElementById("fanSpeedDisplay").innerHTML = "Fan Speed: "+document.getElementById("fanSpeed").value+"%"
}
function fanPowerToggle(){
    if(document.getElementById("fanPower").checked){
        document.getElementById("fanSpeed").disabled = false;
        document.getElementById("fanSpeedDisplay").innerHTML = "Fan Speed: "+document.getElementById("fanSpeed").value+"%"
    }else{
        document.getElementById("fanSpeed").disabled = true;
        document.getElementById("fanSpeedDisplay").innerHTML = "Fan Speed: 0%"
        document.getElementById("airConditionerPower").checked = false;
        document.getElementById("heaterPower").checked = false;
    }
}
function heaterPowerToggle(){
    if(document.getElementById("heaterPower").checked){
        document.getElementById("fanPower").checked = true;
        document.getElementById("fanSpeed").disabled = false;
        document.getElementById("fanSpeedDisplay").innerHTML = "Fan Speed: "+document.getElementById("fanSpeed").value+"%"
        document.getElementById("airConditionerPower").checked = false;
        //add something here to turn on the heater
    }else{
        //add something here to turn off the heater
    }
}
function airConditionerPowerToggle(){
    if(document.getElementById("airConditionerPower").checked){
        document.getElementById("fanPower").checked = true;
        document.getElementById("fanSpeed").disabled = false;
        document.getElementById("fanSpeedDisplay").innerHTML = "Fan Speed: "+document.getElementById("fanSpeed").value+"%"
        document.getElementById("heaterPower").checked = false;
        //add something here to turn on the air conditioner
    }else{
        //add something here to turn off the air conditioner
    }
}