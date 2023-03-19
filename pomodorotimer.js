let x
let y
let z

function beginingtime(){
    z=setInterval(beginingtime,1000)
    let second = document.getElementById("seconds")
    let minute = document.getElementById("minute")
    let beforestart = document.getElementById("beforestart")
    second.textContent -=1
    beforestart.style.display="inline"
    if(second.textContent==0 && minute.textContent==0){
        second.textContent=00
        minute.textContent=25
        breaksign.style.display="none"
        document.getElementById("audio").play()
        beforestart.style.display="none"
        
        clearTimeout(z)
        startcount()
    }

}

function startcount(){
    x=setTimeout(startcount,1000)
    let minute = document.getElementById("minute")
    let second = document.getElementById("seconds")
    let time = document.getElementById("time")
    let breaksign = document.getElementById("breaksign")
    let ex = document.getElementById("explain")

    ex.style.display="none"
    time.onclick = false
    
    second.textContent -=1

   if (second.textContent==-1){
    second.textContent =59
    minute.textContent -=1
   }else if(second.textContent==0 && minute.textContent ==0){
    second.textContent=00
    minute.textContent=05
    breaksign.style.display = "inline"
    time.style.width="1000px"
    time.style.backgroundSize="220px"
    document.getElementById("audio").play()
    breaktime()
    clearTimeout(x)
   }
   
}
function breaktime(){
    y=setTimeout(breaktime,1000)
    let minute = document.getElementById("minute")
    let second = document.getElementById("seconds")
    let time = document.getElementById("time")
    let breaksign = document.getElementById("breaksign")

    second.textContent -=1

    if (second.textContent==-1){
        second.textContent =59
        minute.textContent -=1
       }else if(second.textContent==0 && minute.textContent==0){
        second.textContent=00
        minute.textContent=25
        time.style.width="400px"
        time.style.backgroundSize = "400px"
        breaksign.style.display="none"
        document.getElementById("audio").play()
        startcount()
        clearTimeout(y)
       }
       
}