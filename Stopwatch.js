let time = document.getElementById("timezone")
let startButton = document.getElementById("sbutton")
let stopbutton = document.getElementById("stopbutton")
let resetbutton = document.getElementById("resetbutton")
let starttime
let stoptime = 0
let stopID

function showingtime(){
    const nowtime = new Date(Date.now() - starttime + stoptime)
    const minute = String(nowtime.getMinutes()).padStart(2,"0")
    const second = String(nowtime.getSeconds()).padStart(2,"0")
    const msecond = String(nowtime.getMilliseconds()).padStart(3,"0")

    time.textContent = `${minute}:${second}.${msecond}`;
    stopID = setTimeout(showingtime,10)
    
}
startButton.addEventListener('click', function(){
    startButton.disabled = true;
    stopbutton.disabled = false;
    resetbutton.disabled = true;
    starttime = Date.now();
    showingtime();
    time.style.backgroundColor = "yellow"
  });
  stopbutton.addEventListener('click', function() {
    startButton.disabled = false;
    stopbutton.disabled = true;
    resetbutton.disabled = false;
    clearTimeout(stopID);
    stoptime += (Date.now() - starttime);
    time.style.backgroundColor = "lightgrey"
    
  });
  resetbutton.addEventListener('click', function() {
    startButton.disabled = false;
    stopbutton.disabled = true;
    resetbutton.disabled = true;
    time.textContent = '00:00.000';
    stoptime = 0;
    time.style.backgroundColor = "white"
  });

  