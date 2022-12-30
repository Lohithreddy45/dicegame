var randomnummber1 = Math.floor(Math.random()*6) +1;

var randomimage1 ="dice"+randomnummber1+".png";

var randomsrc1="images/"+randomimage1;
 
 var image1=document.querySelectorAll("img")[0];

 image1.setAttribute("src", randomsrc1);
 
 var randomnummber2 = Math.floor(Math.random()*6) +1;

 var randomimage2 ="dice"+randomnummber2+".png";
 
 var randomsrc2="images/"+randomimage2;
  
  var image2=document.querySelectorAll("img")[1];
 
  image2.setAttribute("src", randomsrc2);


  if(randomimage1>randomimage2)
  {
    document.querySelector("h1").innerHTML="player 1 wins🚩";
  }
  else if(randomimage2>randomimage1)
  document.querySelector("h1").innerHTML="palyer 2 wins 🚩";
  else
  {
    document.querySelector("h1").innerHTML="draw";
  }