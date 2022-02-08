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

  button.addEventListener("click", function() {
    //혼성 : 0724
    //여자단체 : 0725
    //개인 : 0730

    if (answer.value == 2179) {
      quizPass[passNum] = true;
      sessionStorage.setItem("quizPass", JSON.stringify(quizPass));
      closeValue = true;
      alert("정답입니다.");
      window.location.href = "../main.html";
    } else {
      alert("정답이 아닙니다.");
    }

    answer.value = "";
  });

  if (passNum == -1) {
    alert("잘못된 접근입니다.");
    window.location.href = "../entrance.html";
  }
}