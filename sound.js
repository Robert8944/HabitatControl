var musicPlaying = false; //check music player status here.
document.addEventListener("DOMContentLoaded", function(event) { 
    //use this space to pull the recent data and display it
    document.getElementById("externalSource").checked = false;
    document.getElementById("internalSource").checked = true;
});
function stereoPowerToggle(){

}
function outdoorSpeakerToggle(){

}
function indoorSpeakerToggle(){

}
function externalSource(){
    document.getElementById("internalSource").checked = !document.getElementById("externalSource").checked;
    document.getElementById("musicGenreSelector").hidden = !document.getElementById("musicGenreSelector").hidden;
}
function internalSource(){
    document.getElementById("externalSource").checked = !document.getElementById("internalSource").checked;
    document.getElementById("musicGenreSelector").hidden = !document.getElementById("musicGenreSelector").hidden;
}
function setVolume(){
    document.getElementById("volumeDisplay").innerHTML = document.getElementById("volumeSlider").value;
}
function skipBackButtonPressed(){

}
function playPauseButtonPressed(){
    if (musicPlaying){
        document.getElementById("playPauseButton").innerHTML = "Play";
        //stop the music
        musicPlaying = false;
        document.getElementById("nowPlayingDisplay").innerHTML="Nothing";
    }else{
        document.getElementById("playPauseButton").innerHTML = "Pause";
        //start the music
        musicPlaying = true;
        document.getElementById("nowPlayingDisplay").innerHTML=document.getElementById("musicGenreSelector").value;
    }
}
function skipForwardButtonPressed(){
    
}