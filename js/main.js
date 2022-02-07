var closeValue = false;
var cards = document.querySelectorAll(".picture");
var list = ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9"];


window.onload = function() {
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

  var time = 500;
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
      setTimeout(changeFirst, time, back, front);
      time += 250;
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

  setTimeout(check, 2500);
  
function check() {
  for (var i = 0; i < quizPass.length; i++) {
    if (!quizPass[i]) {
      return false;
    }
  }

  var time = 500;
  for (var i = 0; i < cards.length; i++) {
    var back = cards[i].querySelector(".backTurn");
    var front = cards[i].querySelector(".frontTurn");

    setTimeout(changeSecond, time, back, front, i);
    time += 250;
  }

  return true;
}
}


function changeSecond(back, front, num) {
  back.src = "/images/change_card_0" + (num+1) + ".jpg";

  back.classList.add("backTurn2th");
  front.classList.add("frontTurn2th");
}

function changeFirst(back, front) {
  back.classList.add("backTurn");
  front.classList.add("frontTurn");
}

window.onunload = function() {
  if (!closeValue) {
    localStorage.setItem("quizPass", "");
    localStorage.setItem("passNum", -1);
  }
}



