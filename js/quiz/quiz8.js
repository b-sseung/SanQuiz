var closeValue = false;

window.onload = function() {

  var quizPass = JSON.parse(sessionStorage.getItem("quizPass"));

  if (quizPass == null) {
    alert("잘못된 접근입니다.");
    window.location.href = "../entrance.html";
  }
    
  var passNum = sessionStorage.getItem("passNum");

  var button = document.querySelector(".answerButton");
  var answer = document.querySelector(".answer");

  var imageBox = document.querySelector(".quiz8image");

  button.addEventListener("click", function() {
    if (answer.value == "물고기 자리") {
      quizPass[passNum] = true;
      sessionStorage.setItem("quizPass", JSON.stringify(quizPass));
      closeValue = true;
      alert("정답입니다.");
      window.location.href = "../main.html";
    } else {
      alert("정답이 아닙니다.");
      answer.value = "";
    }
  });

  if (passNum == -1) {
    alert("잘못된 접근입니다.");
    window.location.href = "../entrance.html";
  }

  var num = 1;
  changeImage();

  function changeImage() {
    imageBox.src = "../images/quiz8_image_" + num + ".jpg";
    if (num == 11) {
      num = 1;
    } else {
      num++;
    }
    setTimeout(changeImage, 1000);
  }
}