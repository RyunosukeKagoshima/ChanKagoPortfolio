function oncalcbmibuttonclick(){
    let heightinput = document.getElementById("heightinput");
    let height = heightinput.value

    let weightinput = document.getElementById("weightinput");
    let weight = weightinput.value

    let bmiobj = new BMI(height,weight);
    let bmi = bmiobj.getBMI();

    let bmiresult = document.getElementById("bmiresult");
    bmiresult.textContent = bmi;

    let advice = bmiobj.getadvice();
    let advicemessage = document.getElementById("advicemessage");
    advicemessage.textContent = advice;

    let resultmessage = document.getElementById("resultmessage")
    resultmessage.classList.remove("displaynone")
}
window.addEventListener("DOMContentLoaded",function(){

    let heightInput = document.getElementById("heightinput");
    heightInput.addEventListener("input",checkinput);
    heightInput.addEventListener("blur",checkinput);

    let weightInput = document.getElementById("weightinput");
    weightInput.addEventListener("input",checkinput);
    weightInput.addEventListener("blur",checkinput);

    function checkinput(){
        let buttonenabled = true;
        let heightstr = heightInput.value;
        let height = Number(heightstr);
        let heightinputmsg = document.getElementById("heightinputmsg");
        if (heightstr.length ===0){
            buttonenabled = false
            heightinputmsg.textContent = "身長を入力してください"
        }else if (!isFinite(height)){
            buttonenabled = false;
            heightinputmsg.textContent = "身長を整数で入力してください"
        }else if(height <=0){
            buttonenabled = false;
            heightinputmsg.textContent = "身長を整数で入力してください"
        }
        else{
            heightinputmsg.textContent = ""
        }

        let weightstr = weightInput.value;
        let weight = Number(weightstr);
        let weightinputmsg = document.getElementById("weightinputmsg");
        if(weightstr.length ===0){
            buttonenabled = false;
            weightinputmsg.textContent = "体重を入力してください"
        }else if (!isFinite(weight)){
            buttonenabled = false;
            weightinputmsg.textContent = "体重を数で入力してください"
        }else if(weight <=0){
            buttonenabled = false;
            weightinputmsg.textContent = "体重を整数で入力してください"
        }else{
            weightinputmsg.textContent = ""
        }

        let calBMIbutton = document.getElementById("calBMIButton");
        if (buttonenabled = true){
            calBMIbutton.removeAttribute("disabled");
        }else{
            calBMIbutton.setAttribute("disabled","disabled");
        }
    }
});