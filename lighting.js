function toggleAllLights(){
    if(document.getElementById("toggleAllLights").checked){
        document.getElementById("toggleMainRoomLights").checked=true;
        document.getElementById("toggleMainAccentLights").checked=true;
        document.getElementById("toggleHallwayMainLights").checked=true;
        document.getElementById("toggleHallwayUpperLights").checked=true;
        document.getElementById("toggleHallwayLowerLights").checked=true;
        document.getElementById("toggleOutdoorLights").checked=true;
        document.getElementById("toggleDiscoLights").checked=true;
    }else{
        document.getElementById("toggleMainRoomLights").checked=false;
        document.getElementById("toggleMainAccentLights").checked=false;
        document.getElementById("toggleHallwayMainLights").checked=false;
        document.getElementById("toggleHallwayUpperLights").checked=false;
        document.getElementById("toggleHallwayLowerLights").checked=false;
        document.getElementById("toggleOutdoorLights").checked=false;
        document.getElementById("toggleDiscoLights").checked=false;
    }
}