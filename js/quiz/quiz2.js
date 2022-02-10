var closeValue = false;

window.onload = function() {

  var quizPass = JSON.parse(sessionStorage.getItem("quizPass"));

  if (quizPass == null) {
    alert(decodeURI("%EC%9E%98%EB%AA%BB%EB%90%9C%20%EC%A0%91%EA%B7%BC%EC%9E%85%EB%8B%88%EB%8B%A4.")); //잘못된 접근입니다.
    window.location.href = "../entrance.html";
  }
  
  var passNum = sessionStorage.getItem("passNum");

  var button = document.querySelector(".answerButton");
  var answer = document.querySelector(".answer");

  button.addEventListener("click", function() {
    if (answer.value == decodeURI("%EA%B9%80%EC%95%88%EC%82%B0%EC%82%AC%EB%9E%91%ED%95%B4")) { //김안산사랑해
      quizPass[passNum] = true;
      sessionStorage.setItem("quizPass", JSON.stringify(quizPass));
      closeValue = true;
      alert(decodeURI("%EC%A0%95%EB%8B%B5%EC%9E%85%EB%8B%88%EB%8B%A4.")); //정답입니다.
      window.location.href = "../main.html";
    } else {
      alert(decodeURI("%EC%A0%95%EB%8B%B5%EC%9D%B4%20%EC%95%84%EB%8B%99%EB%8B%88%EB%8B%A4.")); //정답이 아닙니다.
    }
    answer.value = "";
  });

  if (passNum == -1) {
    alert(decodeURI("%EC%9E%98%EB%AA%BB%EB%90%9C%20%EC%A0%91%EA%B7%BC%EC%9E%85%EB%8B%88%EB%8B%A4.")); //잘못된 접근입니다.
    window.location.href = "../entrance.html";
  }
}