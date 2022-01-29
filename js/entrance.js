window.onload = function() {
  var button = document.getElementById("toEnter");
  var buttonBox = document.getElementById("buttonBox");
  var buttonText = document.getElementById("buttonText");

  button.addEventListener("click", function() {
    setInterval(function(){
      buttonText.style.color = "red";
    }, 500);
    buttonText.style.color = "white";
    buttonBox.style.animationName = "moveBox";

    window
  });  
}

// Scroll Animation (sa, 스크롤 애니메이션)
var scrTriggerMargin = 250;
var scrElementList = document.querySelectorAll('.scr');
 
var scrFunc = function() {
  for (const element of scrElementList) {
    if (!element.classList.contains('show')) {
      if (window.innerHeight > element.getBoundingClientRect().top + scrTriggerMargin) {
        // 만약(윈도우.창크기 > 객채.위치값.탑 + 마진값) 이면
        element.classList.add('show');
      }
    }
  }
}

window.addEventListener('load', scrFunc);
window.addEventListener('scroll', scrFunc);