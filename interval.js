const timer=document.getElementById("timer")

const btn =document.getElementById("start")

const pause=document.getElementById("pause")

let count=0

let intervalId;

btn.addEventListener("click",()=>{
    intervalId=setInterval(()=>{

      timer.innerHTML=count++

    },1000)
})

let stop=document.getElementById("stop")

let lap=document.getElementById("lap")

stop.addEventListener("click",()=>{
lap.innerText=`lap : ${count}`
})


pause.addEventListener("click",()=>{
    clearInterval(intervalId)
})