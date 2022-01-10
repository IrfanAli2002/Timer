// golobal variable

var hours = document.getElementById("hours")
var mins = document.getElementById("mins")
var seconds = document.getElementById("secs")
var select = document.getElementById("selecttime")
var inp = document.getElementById("input")

var timehours = 00;
var timemins = inp.value;
var timesecs = 50;


function enterval(){
    mins.innerHTML=inp.value,":";
    console.log(timemins)
    
}



function timestart() {
    var iterval = setInterval(function timer() {
        timesecs--
        seconds.innerHTML=timesecs
        if(timesecs == 1){
            inp.value--;
            mins.innerHTML=inp.value;
            timesecs = 60;
            
        }
        
    }, 1000);
}

function timestop(){
    setTimeout(function () {
        
        
        clearInterval(timemins,timesecs)
        
    },1000)
    seconds.innerHTML=timesecs;
    inp.value = "";
    mins.innerHTML = 00;
    
}   

function Timerreset() {
    timemins = 00;
    timemins = 00;
    
    mins.innerHTML = timemins;
    seconds.innerHTML = timesecs;
    
    setTimeout(function cleartime() {
        clearInterval(timesecs)
    },1000)
}
