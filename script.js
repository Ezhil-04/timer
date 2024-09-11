let resetbtn=document.getElementById("resetbtn")
let start=document.getElementById("start")
let stop=document.getElementById("stop")
let time=document.getElementById("time")
let milli=document.getElementById("ms")
let seconds=0;
let minutes=0;
let hours=0;
let milliseconds=0;
let timer=null;


resetbtn.addEventListener("click",resettimer)
start.addEventListener("click",starttimer)
stop.addEventListener("click",stoptimer)

function starttimer(){

if(timer==null){
    timer=setInterval(() => {
        milliseconds++
        if(milliseconds==60){
            milliseconds=0;
            seconds++
        }
        
        if(seconds==60){
            seconds=0
            minutes++
        }
        if(minutes==60){
            minutes=0
            hours++
        } 
        if(seconds<10){
            
        }
        
        let s=seconds<10?"0"+seconds:seconds;
        let m=minutes<10?"0"+minutes:minutes;
        let h=hours<10?"0"+hours:hours;
        let ms=milliseconds<10?"0"+milliseconds:milliseconds; 
        
        milli.innerHTML=ms
        time.innerHTML=h+":"+m+":"+s
        },16.6666);
}
else if(timer!=null){
    clearInterval(timer)
    timer=null

}



}

function stoptimer(){
    if(timer!=null){
        clearInterval(timer)
        timer=null
    }
}

function resettimer(){
    if(timer!=null){
        clearInterval(timer)
        timer=null
    }
    hours=0;
    minutes=0;
    seconds=0;
    milliseconds=0;
    let s=seconds<10?"0"+seconds:seconds;
    let m=minutes<10?"0"+minutes:minutes;
    let h=hours<10?"0"+hours:hours;
    let ms=milliseconds<10?"0"+milliseconds:milliseconds; 
       
    milli.innerHTML=ms
    time.innerHTML=h+":"+m+":"+s

}