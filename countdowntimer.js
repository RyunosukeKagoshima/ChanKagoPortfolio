function decision(){
  let bbbbb = document.getElementById("bbbbb")
  let ccccc = document.getElementById("ccccc")
  let aaaaa = document.getElementById("aaaaa")

  let t = document.getElementById("inputnumber")
 let tt=Number(t.value)
 let m = document.getElementById("inputnumber2")
 let mm = Number(m.value)

ccccc.textContent=tt
bbbbb.textContent=mm

 
  let inputminute1 = document.getElementById("inputnumber2")
  let inputminute2 = Number(inputminute1.value)

  
  aaaaa.style.display="inline"
}

   function startcount(){
let x
let y
let zero ="00"
let restartbutton = document.getElementById("restartbutton")
let clearbutton = document.getElementById("clearbutton")
let timeupsign = document.getElementById("Finishsign")
let explain = document.getElementById("explain")

 let t = document.getElementById("inputnumber")
 let tt=Number(t.value)
 
  let inputminute1 = document.getElementById("inputnumber2")
  let inputminute2 = Number(inputminute1.value)

  let stopbutton = document.getElementById("stopbutton")
  let startbutton = document.getElementById("startbutton")

  let ccccc = document.getElementById("ccccc")
  let aaaaa = document.getElementById("aaaaa")
  let bbbbb = document.getElementById("bbbbb")
  
 
  stopbutton.style.display = "inline"
  startbutton.style.display="none"
  timeupsign.style.display ="none"
  explain.style.display="none"

  
  
   x=setInterval(showtime,1000)
  


  function showtime(){
    ccccc.textContent-=1
  if(ccccc.textContent==0 && bbbbb.textContent==0){
    window.clearInterval(x)
    ccccc.textContent="00"
    bbbbb.textContent="00"
    startbutton.style.display="inline"
    stopbutton.style.display="none"
    document.getElementById("timeupaudio").play()
    timeupsign.style.display="inline"
    aaaaa.style.display="none"
}else if(ccccc.textContent==-1 && bbbbb.textContent>0){
  ccccc.textContent=59
  bbbbb.textContent-=1
}
  stopbutton.addEventListener("click",function(){
    window.clearInterval(x)
    restartbutton.style.display = "inline"
    clearbutton.style.display="inline"
    stopbutton.style.display = "none"
  })

  restartbutton.addEventListener("click",function(){
    window.setInterval(y)
    restartbutton.style.display = "none"
    clearbutton.style.display="none"
    
  })

  clearbutton.addEventListener("click",function(){
    ccccc.textContent = "00"
    clearbutton.style.display="none"
    startbutton.style.display="inline"
    restartbutton.style.display = "none"
  })
  }}
  
  
  
  
  
  

