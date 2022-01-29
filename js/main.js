window.onload = function() {
  var cards = document.querySelectorAll(".picture");
  var list = ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9"];

  cards.forEach( (card) => {
    card.addEventListener("click", function() {
      var select = card.querySelector(".select");

      if (window.getComputedStyle(select).visibility == "hidden") {
        select.style.visibility = "visible";

        return;
      }
      
      select.style.visibility = "hidden";

      var back = card.querySelector(".back");

      var front = card.querySelector(".front");
      
      if (back.classList.contains("backTurn")) return;

      var num = -1;

      for (var i = 0; i < list.length; i++) {
        if (back.classList.contains(list[i])){
          num = i;
          break;
        }
      }

      back.classList.add("backTurn");
      front.classList.add("frontTurn");
    });
  });
}

function check(num) {
  console.log(num);
}