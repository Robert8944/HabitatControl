var musicPlaying = false; //check music player status here.
var musicList = [["ComfortablyNumb","RockAndRoll"],
                ["RiverRadio","TheCreek","Stinson","RockingChair"],
                ["EineKleineNachtmusik","SonatinaNo2","9thSymphonyFinale","1812Overture","MorningMood"],
                ["MeetAndFun","MydNyte","FirstOf3"]
                ];
var currentTrack = 0;
var genreList = ["rock","country","classical","dance"];
document.addEventListener("DOMContentLoaded", function(event) { 
    //use this space to pull the recent data and display it
    document.getElementById("externalSource").checked = false;
    document.getElementById("internalSource").checked = true;
    document.getElementById("microphoneSource").checked = false;
});
function stereoPowerToggle(){

}
function outdoorSpeakerToggle(){

}
function indoorSpeakerToggle(){

}
function externalSource(){
    if(document.getElementById("externalSource").checked){
        document.getElementById("internalSource").checked = false;
        document.getElementById("microphoneSource").checked = false;
        document.getElementById("internalMusicPlayerInfo").hidden = true;
    }else{
        document.getElementById("internalSource").checked = true;
        document.getElementById("microphoneSource").checked = false;
        document.getElementById("internalMusicPlayerInfo").hidden = false;
    }
}
function internalSource(){
    if(document.getElementById("internalSource").checked){
        document.getElementById("externalSource").checked = false;
        document.getElementById("microphoneSource").checked = false;
        document.getElementById("internalMusicPlayerInfo").hidden = false;
    }else{
        document.getElementById("externalSource").checked = true;
        document.getElementById("microphoneSource").checked = false;
        document.getElementById("internalMusicPlayerInfo").hidden = true;
    }
}
function microphoneSource(){
    if(document.getElementById("microphoneSource").checked){
        document.getElementById("externalSource").checked = false;
        document.getElementById("internalSource").checked = false;
        document.getElementById("internalMusicPlayerInfo").hidden = true;
    }else{
        document.getElementById("externalSource").checked = false;
        document.getElementById("internalSource").checked = true;
        document.getElementById("internalMusicPlayerInfo").hidden = false;
    }
}
function setVolume(){
    document.getElementById("volumeDisplay").innerHTML = document.getElementById("volumeSlider").value;
}
function skipBackButtonPressed(){
    currentTrack -= 1;
    var genreSongList = musicList[genreList.indexOf(document.getElementById("musicGenreSelector").value)];
    if(currentTrack<0){
        currentTrack = genreSongList.length-1;
    }
    document.getElementById("musicObject").src = "music/"+genreSongList[currentTrack]+".mp3";
    document.getElementById("nowPlayingDisplay").innerHTML = genreSongList[currentTrack];
}

function skipForwardButtonPressed(){
    currentTrack += 1;
    var genreSongList = musicList[genreList.indexOf(document.getElementById("musicGenreSelector").value)];
    if(currentTrack>=genreSongList.length){
        currentTrack = 0;
    }
    document.getElementById("musicObject").src = "music/"+genreSongList[currentTrack]+".mp3";
    document.getElementById("nowPlayingDisplay").innerHTML = genreSongList[currentTrack];
}

function genreSelected(){
    currentTrack=0;
    var genreSongList = musicList[genreList.indexOf(document.getElementById("musicGenreSelector").value)];
    document.getElementById("musicObject").src = "music/"+genreSongList[currentTrack]+".mp3";
    document.getElementById("nowPlayingDisplay").innerHTML = genreSongList[currentTrack];
}