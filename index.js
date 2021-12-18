document.addEventListener("DOMContentLoaded", function(event) { 
    //set Battery information
    var numberOfBatteryCells = 8;
    var batteryCellCapacity = 1200;//watt-hours
    let batteryLevels = [];
    var fakeBatteryLevelAvg = new Date().getTime()%100;
    for (let i = 1; i <= numberOfBatteryCells; i++){
        document.getElementById("batteryDisplay").innerHTML = document.getElementById("batteryDisplay").innerHTML + '<div class="container"><div id="batBody'+i+'"><div id="main_batt_indicator'+i+'" class="indicator" sytle="width:1%"></div></div><div class="batEnd"><div></div></div></div><h5 class="w3-center">Cell '+i+': <p id="cell'+i+'Charge"></p></h5>'
        batteryLevels.push(fakeBatteryLevelAvg + Math.floor(Math.random()*10)-5);//TO DO: pull actual battery level
        //TO DO: Calculate actual battery average here, by adding read values
        document.getElementById("cell"+i+"Charge").innerHTML = batteryLevels[i-1] + "%";
        document.getElementById("main_batt_indicator"+i).style.width = batteryLevels[i-1] +"%";
    }
    document.getElementById("batteryPercent").innerHTML = "Current Total Charge: " + fakeBatteryLevelAvg + "%";


    var airConditionerPower = parseInt(document.getElementById("airConditionerPower").innerHTML);
    var heaterPower = parseInt(document.getElementById("heaterPower").innerHTML);
    var fanPower = parseInt(document.getElementById("fanPower").innerHTML);
    var refridgeratorPower = parseInt(document.getElementById("refridgeratorPower").innerHTML);
    var interiorLightsPower = parseInt(document.getElementById("interiorLightsPower").innerHTML);
    var exteriorLightsPower = parseInt(document.getElementById("exteriorLightsPower").innerHTML);
    var soundSystemPower = parseInt(document.getElementById("soundSystemPower").innerHTML);
    var surveillanceSystemPower = parseInt(document.getElementById("surveillanceSystemPower").innerHTML);
    var totalPower = 0;
    if(document.getElementById("airConditionerStatus").innerHTML=="ON"){
        totalPower += airConditionerPower;
    }
    if(document.getElementById("heaterStatus").innerHTML=="ON"){
        totalPower += heaterPower;
    }
    if(document.getElementById("fanStatus").innerHTML=="ON"){
        totalPower += fanPower;
    }
    if(document.getElementById("refridgeratorStatus").innerHTML=="ON"){
        totalPower += refridgeratorPower;
    }
    if(document.getElementById("interiorLightsStatus").innerHTML=="ON"){
        totalPower += interiorLightsPower;
    }
    if(document.getElementById("exteriorLightsStatus").innerHTML=="ON"){
        totalPower += exteriorLightsPower;
    }
    if(document.getElementById("soundSystemStatus").innerHTML=="ON"){
        totalPower += soundSystemPower;
    } 
    if(document.getElementById("surveillanceSystemStatus").innerHTML=="ON"){
        totalPower += surveillanceSystemPower;
    } 
    document.getElementById("totalPower").innerHTML = totalPower + " Watts";

    document.getElementById("hoursLeft").innerHTML = Math.round((((numberOfBatteryCells * batteryCellCapacity) / totalPower)*(fakeBatteryLevelAvg/100))*100)/100 + " Hours left";

});