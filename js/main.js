
var closeValue = false;
var cards = document.querySelectorAll(".picture");
var list = ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9"];
var button = document.querySelector(".button_box");
var buttonstyle = document.querySelector(".EventButton");
window.onload = function() {

  button.style.visibility = "hidden";

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
    
    var text1 = document.getElementById("text1");
    var text2 = document.getElementById("text2");
    var text3 = document.getElementById("text3");
    var time2 = 0;

    text1.style.color = "red";

    time2 = typingText(text1, "축하합니다!", time2);
    time2 = typingText(text2, "9개의 사진을 전부 모았습니다.", time2);
    time2 = typingText(text3, "그동안 수고하셨습니다.", time2);

    button.style.visibility = "visible"
    return true;
  }

  button.addEventListener("click", function() {
    buttonstyle.classList.add("changeButton");
    closeValue = true;

    setTimeout(function() {
      window.location.href = "eventpage.html";
    }, 500);
  });
}

function typingText(textBox, text, time2) {
  var textArr = text.split("");
  var timeTemp = time2;

  var textTemp = "";
  for (var i = 0; i < textArr.length; i++) {
    textTemp += textArr[i];

    setTimeout(typingFunc, timeTemp, textBox, textTemp);

    timeTemp += 100;
  }

  return timeTemp;
}

function typingFunc(textBox, text){
  textBox.innerText = text;
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



window.onpageshow = function(event) {
  if (event.persisted) {
    console.log(event.persisted + ", 뒤로 가기");
  }
}

window.onpopstate = function(event) {
  // history.pushState({pageNum:3, searchDt:'2019-05-07'}, null, '/board/list');
  // location.reload();
  console.log("뒤로가기");
}
