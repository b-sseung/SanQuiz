var closeValue = false;


window.onload = function() {
  var cards = document.querySelectorAll(".picture");
  var list = ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9"];
  // var htmlList = ["quiz1.html"]
  var value = new Array(9).fill(false);
  
  //퀴즈 푼 것 체크 배열
  var quizPass;
  try {
    quizPass = JSON.parse(localStorage.getItem("quizPass"));
  } catch (exception) {
    alert("잘못된 접근입니다.");
    window.location.href = "/entrance.html";
  }
  //마지막으로 푼 문제 번호
  var passNum = localStorage.getItem("passNum");
  
  console.log(quizPass);

  cards.forEach((card) => {
    var select = card.querySelector(".select");
    var back = card.querySelector(".back");
    var front = card.querySelector(".front");

    var num = -1;
    for (var i = 0; i < list.length; i++) {
      if (back.classList.contains(list[i])){
        num = i;
        break;
      }
    }

    if (quizPass[num]) {
      console.log(num + ", " + quizPass[num]);
      back.classList.add("backTurn");
      front.classList.add("frontTurn");
    }

    card.addEventListener("click", function() {

      if (!value[num] && window.getComputedStyle(select).visibility == "hidden") {
        for (var i = 0; i < value.length; i++) {
          if (i != num) {
            value[num] = false;
            cards[i].querySelector(".select").style.visibility = "hidden";
          }
        }

        select.style.visibility = "visible";
        value[num] = true;

        return;
      }

      var temp = num+1;
      
      select.style.visibility = "hidden";
      closeValue = true;
      localStorage.setItem("passNum", num);
      
      window.location.href = "/quizHTML/quiz" + temp + ".html";
    });
  });

  function check() {
    for (var i = 0; i < checkvalue.length; i++) {
      if (!quizPass[i]) {
        return false;
      }
    }

    return true;
  }
}

window.onunload = function() {
  if (!closeValue) {
    localStorage.setItem("quizPass", "");
    localStorage.setItem("passNum", -1);
  }
}

