import {updateRank} from "./firebase.js";

window.onload = function() {
  var quizPass = JSON.parse(sessionStorage.getItem("quizPass"));

  if (quizPass == null || !checkPass) {
    alert(decodeURI("%EC%9E%98%EB%AA%BB%EB%90%9C%20%EC%A0%91%EA%B7%BC%EC%9E%85%EB%8B%88%EB%8B%A4.")); //잘못된 접근입니다.
    window.location.href = "./entrance.html";
  }

  var twitterId = document.querySelector(".inputButton");
  var idText = document.getElementById("twitterId");

  twitterId.addEventListener("click", function() {
    if (idText.value == "" || idText.value == "@") {
      alert(decodeURI("%EC%95%84%EC%9D%B4%EB%94%94%EB%A5%BC%20%EC%9E%85%EB%A0%A5%ED%95%B4%EC%A3%BC%EC%84%B8%EC%9A%94.")); //아이디를 입력해주세요.

      return;
    }
    
    updateRank(idText.value);

    idText.value = "";
  });

  var button = document.querySelector(".rankingButton");

  button.addEventListener("click", function() {
    window.location.href = "./rankpage.html";
  });


  function checkPass() {
    for (var i = 0; i < quizPass.length; i++) {
      if (!quizPass[i]) {
        return false;
      }

      return true;
    }
  }
}