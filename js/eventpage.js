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
}

window.onunload = function() {
  
}

window.onpageshow = function(event) {
  if (event.persisted) {
    console.log(event.persisted + ", 뒤로 가기");
  }
}

window.onpopstate = function(event) {
  // history.pushState({pageNum:3, searchDt:'2019-05-07'}, null, '/board/list');
  // location.reload();
  console.log("?뒤로가기");
}