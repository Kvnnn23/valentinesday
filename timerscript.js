//timer
Days= document.getElementById("days");
Hours= document.getElementById("hours");
Minutes= document.getElementById("minutes");
Seconds= document.getElementById("seconds");

targetDate = new Date("March 6 2025 00:00:00").getTime();

function timer(){
    currentDate = new Date().getTime();
    distance = targetDate - currentDate;

    days = Math.floor(distance / 1000 / 60 / 60 / 24);
    hours = Math.floor(distance / 1000 / 60 / 60) % 24;
    minutes = Math.floor(distance / 1000 / 60) % 60;
    seconds = Math.floor(distance / 1000) % 60;

    Days.innerHTML= days;
    Hours.innerHTML = hours;
    Minutes.innerHTML = minutes;
    Seconds.innerHTML = seconds;

    if(distance <0){
        Days.innerHTML= "00";
        Hours.innerHTML = "00";
        Minutes.innerHTML = "00";
        Seconds.innerHTML = "00";
    }
}

setInterval(timer, 1000)