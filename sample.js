const pics_src1 = ["IMG20230121125020.jpg","IMG20221222143324.jpg","IMG20221205121210.jpg","cathedral.jpg","line_646241524150559.jpg"];



 setInterval(slideshow_timer, 3000);


function slideshow_timer(){
let num1 = Math.round(Math.random()*4);
  document.getElementById("mypic1").src = pics_src1[num1];
  let num2 = Math.round(Math.random()*4);
  document.getElementById("mypic2").src = pics_src1[num2];
  let num3 = Math.round(Math.random()*4);
  document.getElementById("mypic3").src = pics_src1[num3];
}
 
