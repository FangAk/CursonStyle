function goBoom(event){
  //get mouse coords
  var x = event.clientX;
  var y = event.clientY; 
  
  //create main boom element
  document.getElementById("body").innerHTML = "<div id='boom" + x + "'></div>";

  //create boom class and add it to div
  var attClass = document.createAttribute("class");
  attClass.value = "boom";
  document.getElementById("boom" + x).setAttributeNode(attClass);
  
  //get new random color
  var r = randNum(0,255);
  var g = randNum(0,255);
  var b = randNum(0,255);
  var newColor = "rgb(" + r + "," + g + "," + b + ")";
  
  //randomize the boom color
  document.getElementById("boom" + x).style.backgroundColor = newColor;
  
  //start the boom position at mouse click
  document.getElementById("boom" + x).style.top = y + 'px';
  document.getElementById("boom" + x).style.left = x + 'px';

  //get a complimentary color 1
  var r1 = corrected(Math.round(complimentary(r)));
  var g1 = corrected(Math.round(complimentary(g)));
  var b1 = corrected(Math.round(complimentary(b)));
  var bubbleColor1 = "rgb(" + r1 + "," + g1 + "," + b1 + ")";
  //get a complimentary color 2
  var r2 = corrected(Math.round(complimentary2(r)));
  var g2 = corrected(Math.round(complimentary2(g)));
  var b2 = corrected(Math.round(complimentary2(b)));
  var bubbleColor2 = "rgb(" + r2 + "," + g2 + "," + b2 + ")";
  //get a complimentary color 3
  var r3 = corrected(Math.round(complimentary3(r)));
  var g3 = corrected(Math.round(complimentary3(g)));
  var b3 = corrected(Math.round(complimentary3(b)));
  var bubbleColor3 = "rgb(" + r3 + "," + g3 + "," + b3 + ")";
  //get a complimentary color 4
  var r4 = corrected(r + 42.5);
  var g4 = corrected(r + 42.5);
  var b4 = corrected(r + 42.5);
  var bubbleColor4 = "rgb(" + r4 + "," + g4 + "," + b4 + ")";
  //get a complimentary color 5
  var r5 = corrected(r - 42.5);
  var g5 = corrected(g - 42.5);
  var b5 = corrected(b - 42.5);
  var bubbleColor5 = "rgb(" + r5 + "," + g5 + "," + b5 + ")";
  //get a complimentary color 6
  var r6 = corrected(r + 85);
  var g6 = corrected(r + 85);
  var b6 = corrected(r + 85);
  var bubbleColor6 = "rgb(" + r6 + "," + g6 + "," + b6 + ")";
  //get a complimentary color 7
  var r7 = corrected(r - 85);
  var g7 = corrected(g - 85);
  var b7 = corrected(b - 85);
  var bubbleColor7 = "rgb(" + r7 + "," + g7 + "," + b7 + ")";
  
  //get a complimentary color 8
  var r8 = corrected(r + 127.5);
  var g8 = corrected(r + 127.5);
  var b8 = corrected(r + 127.5);
  var bubbleColor8 = "rgb(" + r8 + "," + g8 + "," + b8 + ")";
  //get a complimentary color 9
  var r9 = corrected(r - 127.5);
  var g9 = corrected(g - 127.5);
  var b9 = corrected(b - 127.5);
  var bubbleColor9 = "rgb(" + r9 + "," + g9 + "," + b9 + ")";
  
  //bubbles!
  //1
  document.getElementById("body").innerHTML += "<div id='bubble1' class='bubble1'></div>";
  
  //start the bubble position at mouse click
  document.getElementById("bubble1").style.top = (y + randNum(-20,20)) + 'px';
  document.getElementById("bubble1").style.left = (x + randNum(-20,20)) + 'px';
  
  document.getElementById("bubble1").style.backgroundColor = bubbleColor1;

  //2
  document.getElementById("body").innerHTML += "<div id='bubble2' class='bubble2'></div>";
  
  //start the bubble position at mouse click
  document.getElementById("bubble2").style.top = (y + randNum(-25,25)) + 'px';
  document.getElementById("bubble2").style.left = (x + randNum(-25,25)) + 'px';
  
  document.getElementById("bubble2").style.backgroundColor = bubbleColor1;
  
  //3
  document.getElementById("body").innerHTML += "<div id='bubble3' class='bubble3'></div>";
  
  //start the bubble position at mouse click
  document.getElementById("bubble3").style.top = (y + randNum(-45,45)) + 'px';
  document.getElementById("bubble3").style.left = (x + randNum(-45,45)) + 'px';
  
  document.getElementById("bubble3").style.backgroundColor = bubbleColor3;
  
  //circular numbers
  var circX = randNum(-65,65);
  var circY = randNum(-65,65);
  
  //4
  document.getElementById("body").innerHTML += "<div id='bubble4' class='bubble4'></div>";
  
  //start the bubble position at mouse click
  document.getElementById("bubble4").style.top = (y + circY) + 'px';
  document.getElementById("bubble4").style.left = (x + circX) + 'px';
  
  document.getElementById("bubble4").style.backgroundColor = bubbleColor4;
  
  /*
  //Meant to be a ring of bubbles like a firework. TODO: refactor.
  //5
  document.getElementById("body").innerHTML += "<div id='bubble5' class='bubble5'></div>";
  
  //start the bubble position at mouse click
  document.getElementById("bubble5").style.top = (y - circY) + 'px';
  document.getElementById("bubble5").style.left = (x - circX) + 'px';
  
  document.getElementById("bubble5").style.backgroundColor = bubbleColor5;
    
  //6
  document.getElementById("body").innerHTML += "<div id='bubble6' class='bubble6'></div>";
  
  //start the bubble position at mouse click
  document.getElementById("bubble6").style.top = (y) + 'px';
  document.getElementById("bubble6").style.left = (x + circX) + 'px';
  
  document.getElementById("bubble6").style.backgroundColor = bubbleColor6;
      
  //7
  document.getElementById("body").innerHTML += "<div id='bubble7' class='bubble7'></div>";
  
  //start the bubble position at mouse click
  document.getElementById("bubble7").style.top = (y - circY) + 'px';
  document.getElementById("bubble7").style.left = (x) + 'px';
  
  document.getElementById("bubble7").style.backgroundColor = bubbleColor7;
  
    
  //8
  document.getElementById("body").innerHTML += "<div id='bubble8' class='bubble8'></div>";
  
  //start the bubble position at mouse click
  document.getElementById("bubble8").style.top = (y + circY) + 'px';
  document.getElementById("bubble8").style.left = (x) + 'px';
  
  document.getElementById("bubble8").style.backgroundColor = bubbleColor8;
      
  //9
  document.getElementById("body").innerHTML += "<div id='bubble9' class='bubble9'></div>";
  
  //start the bubble position at mouse click
  document.getElementById("bubble9").style.top = (y) + 'px';
  document.getElementById("bubble9").style.left = (x - circX) + 'px';
  
  document.getElementById("bubble9").style.backgroundColor = bubbleColor9;
  */
  
  //set background and tap circle to new color
  setTimeout(function(){document.body.style.backgroundColor = newColor; document.getElementsByClassName("tapperoo")[0].style.backgroundColor = bubbleColor5; document.getElementsByClassName("hand")[0].style.fill = "rgba(0,0,0,0.9)"}, 800);
}


//random number generator
function randNum(from, to) {
  return Math.floor(Math.random() * (to - from + 1) + from);
}

document.getElementById("body").addEventListener("click", goBoom);


//complimentary colors
function complimentary(x){
  return 255 - Math.abs((x - 127.5));
}
function complimentary2(x){
  return 255 - Math.abs((x - 63.75));
}
function complimentary3(x){
  return 255 - Math.abs((x - 191.25));
}

//correct for numbers over 255 and under 0
function corrected(x){
  var val = (x*1);
  if(val > 255){
    return 255;
  } else if (val < 0){
    return 0;
  } else {
    return Math.round(val);
  }
}

//stuff to prompt the user to click
//Shows the animation if your mouse is still for 3 seconds/hides it when you move
var fadein = null;
$("html").mousemove(function() {
  $(".box").stop().fadeOut(300);
  if (fadein != null) {
    clearTimeout(fadein);
  }
  fadein = setTimeout(showMe, 5000);
});
$("html").click(function() {
  $(".box").stop().fadeOut(300);
  if (fadein != null) {
    clearTimeout(fadein);
  }
  fadein = setTimeout(showMe, 5000);
});

function showMe() {
  $(".box").stop().fadeIn();
}