function totop(){
    window.scroll({
        top:0,
        behavior:"smooth"
    })
}

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