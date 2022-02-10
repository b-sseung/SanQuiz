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

  var imageBox = document.querySelector(".quiz8image");

  button.addEventListener("click", function() {
    if (answer.value == decodeURI("%EB%AC%BC%EA%B3%A0%EA%B8%B0%20%EC%9E%90%EB%A6%AC")) { //물고기 자리
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