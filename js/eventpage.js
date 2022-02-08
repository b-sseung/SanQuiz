import {updateRank, readRank} from "./firebase.js"

window.onload = function() {
  var twitterId = document.querySelector(".inputButton");
  var idText = document.getElementById("twitterId");

  twitterId.addEventListener("click", function() {
    if (idText.value == "" || idText.value == "@") {
      alert("아이디를 입력해주세요.");

      return;
    }
    
    updateRank(idText.value);

    idText.innerText = "";
  });

  var button = document.querySelector(".rankingButton");

  button.addEventListener("click", function() {
    window.location.href = "./eventpage.html";
  });
}