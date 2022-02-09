var value = false;

window.onload = function() {
  var button = document.getElementById("toEnter");
  var buttonBox = document.getElementById("buttonBox");
  var buttonText = document.getElementById("buttonText");

  var quizPass = new Array(9).fill(true);

  sessionStorage.setItem("quizPass", JSON.stringify(quizPass));
  sessionStorage.setItem("passNum", -1);

  console.log(quizPass);
  button.addEventListener("click", function() {
    value = true;
    setTimeout(function(){
      window.location.href = "main.html";
    }, 1000);
    setTimeout(function(){
      buttonText.style.color = "red";
    }, 500);
    buttonText.style.color = "white";
    buttonBox.style.animationName = "moveBox";
  });

  var guestButton = document.getElementById("guestText");
  var rankButton = document.getElementById("rankText");

  rankButton.addEventListener("click", function() {
    window.location.href = "rankpage.html";
  });

}



// Scroll Animation (sa, 스크롤 애니메이션)
var scrTriggerMargin = 225;
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
