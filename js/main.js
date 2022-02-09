
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
  var quizPass = JSON.parse(sessionStorage.getItem("quizPass"));
  if (quizPass == null) {
    alert("잘못된 접근입니다.");
    window.location.href = "./entrance.html";
  }
  //마지막으로 푼 문제 번호
  var passNum = sessionStorage.getItem("passNum");
  
  console.log(quizPass);

  console.log(sessionStorage.key);
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
      sessionStorage.setItem("passNum", num);
      
      window.location.href = "./quizHTML/quiz" + temp + ".html";
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
    pop();


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
  back.src = "./images/change_card_0" + (num+1) + ".jpg";

  back.classList.add("backTurn2th");
  front.classList.add("frontTurn2th");
}

function changeFirst(back, front) {
  back.classList.add("backTurn");
  front.classList.add("frontTurn");
}


//폭죽
let particles = [];
const colors = ["red","blue","orange","yellow","green","purple"];
function pop () {
  window.scrollTo(0, 0);

  for (let i = 0; i < 150; i++) {
    const p = document.createElement('particule');
    p.x = window.innerWidth * 0.5;
    p.y = window.innerHeight + (Math.random() * window.innerHeight * 0.3);
    p.vel = {
      x: (Math.random() - 0.5) * 10,
      y: Math.random() * -20 - 15
    };
    p.mass = Math.random() * 0.2 + 0.8;
    particles.push(p);
    p.style.transform = `translate(${p.x}px, ${p.y}px)`;
    const size1 = Math.random() * 40 + 5;
    const size2 = Math.random() * 30 + 5;
    p.style.width = size1 + 'px';
    p.style.height = size2 + 'px';
    p.style.background = colors[Math.floor(Math.random()*colors.length)];
    document.body.appendChild(p);
  }

  setTimeout(function() {
    window.location.href = "eventpage.html";
  }, 4000);
}

function render () {
  for (let i = particles.length - 1; i > -1; i--) {
    const p = particles[i];
    p.style.transform = `translate3d(${p.x}px, ${p.y}px, 1px)`;
    
    p.x += p.vel.x;
    p.y += p.vel.y;
    
    p.vel.y += (0.5 * p.mass);
    if (p.y > (window.innerHeight * 2)) {
      p.remove();
      particles.splice(i, 1);
    }
  }
  requestAnimationFrame(render);
}


// window.addEventListener("click", pop);
window.setTimeout(render, 700);