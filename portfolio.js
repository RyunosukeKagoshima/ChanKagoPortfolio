let i=0
function slideshow1(){
    let slide1 = document.getElementById("headerimgarea");
    let slideimgs = ["h1-3.jpg","h1-4.jpg","h1-7.jpg"]
    console.log(i)
    i--
    if (i==-1){
        i=2
    }
    slideimgs[i]
    console.log(slideimgs[i])
    slide1.style.backgroundImage="url("+slideimgs[i]+")"
}

function slideshow2(){
    let slide1 = document.getElementById("headerimgarea");
    let slideimgs = ["h1-3.jpg","h1-4.jpg","h1-7.jpg"]
    console.log(i)
    i++
    if (i==3){
        i=0
    }
    slideimgs[i]
    console.log(slideimgs[i])
    slide1.style.backgroundImage="url("+slideimgs[i]+")"
}

function linkjump(){
let Select=document.getElementById("select")
let Selectvalue = Select.value;
let Selectvalue2 = Number(Selectvalue)


switch(Selectvalue2){
    case 1:
        window.open("pomodorotimer.html","ポモドーロタイマー-Chankago");
break;
    case 2:
        window.open("countdowntimer.html","カウントダウンタイマー-Chankago");
        break;
    case 3:
        window.open("stopwatch-java.html","ストップウォッチ-Chankago")
    case 4:
        window.open("BMI.html","BMi計算機-Chankago")
    case 0:
        let alert = document.getElementById("alert")
        alert.style.display="block"
}
}

function totop(){
    window.scroll({
        top:0,
        behavior:"smooth"
    })
}




