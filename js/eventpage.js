import {updateRank} from "./firebase.js";

window.onload = function() {
  var quizPass = JSON.parse(sessionStorage.getItem("quizPass"));

  if (quizPass == null || !checkPass) {
    alert("잘못된 접근입니다.");
    window.location.href = "./entrance.html";
  }

  var twitterId = document.querySelector(".inputButton");
  var idText = document.getElementById("twitterId");

  twitterId.addEventListener("click", function() {
    if (idText.value == "" || idText.value == "@") {
      alert("아이디를 입력해주세요.");

      return;
    }
    
    updateRank(idText.value);

    idText.value = "";
  });

  var button = document.querySelector(".rankingButton");

  button.addEventListener("click", function() {
    window.location.href = "./rankpage.html";
  });

  var mainEntrance = document.querySelector(".mainEntrance");
  mainEntrance.addEventListener("click", function() {
    window.location.href = "./entrance.html";
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