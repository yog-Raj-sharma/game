var randomnumber1;
randomnumber1 = Math.random(randomnumber1);
randomnumber1 = randomnumber1 * 6 +1;
randomnumber1 = Math.round(randomnumber1)

var randondiceimg = "dice"+randomnumber1+".png";

document.querySelectorAll("img")[0].setAttribute("src" ,randondiceimg);

var randomnumber2;
randomnumber2 = Math.random(randomnumber2);
randomnumber2 = randomnumber2 * 6 +1;
randomnumber2 = Math.round(randomnumber2)

var randondiceimg2 = "dice"+randomnumber2+".png";

document.querySelectorAll("img")[1].setAttribute("src" ,randondiceimg2);


if (randomnumber1>randomnumber2) {
  document.querySelector("h1").innerHTML= "🚩 Yog raj WON! 🍷";

}
else if (randomnumber2>randomnumber1) {
  document.querySelector("h1").innerHTML= "🚩 YOU WON! 🍷";

}
else {
  document.querySelector("h1").innerHTML= " draw! ❣️";

}
