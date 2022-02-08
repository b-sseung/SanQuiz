var closeValue = false;
var value = true;
window.onload = function() {
  
  var quizPass = JSON.parse(sessionStorage.getItem("quizPass"));

  if (quizPass == null) {
    alert("잘못된 접근입니다.");
    window.location.href = "../entrance.html";
  }

  var passNum = sessionStorage.getItem("passNum");

  var button = document.querySelector(".answerButton");
  var answer = document.querySelector(".answer");

  var imageBox = document.querySelector(".quiz4_image");

  var today = new Date();
  var year = today.getFullYear();
  var month = ("0" + (today.getMonth()+1)).slice(-2);
  var day = ("0" + today.getDate()).slice(-2);
  var date = year+month+day;

  changeImage();

  button.addEventListener("click", function() {
    
    if (answer.value == date) {
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

  function changeImage() {
    if (value) {
      value = false;
      imageBox.src = "../images/quiz4_1.jpg";
      setTimeout(changeImage, 1000);
    } else {
      value = true;
      imageBox.src = "../images/quiz4_2.jpg";
      setTimeout(changeImage, 1000);
    }
  }
}