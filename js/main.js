window.onload = function() {
  var cards = document.querySelectorAll(".picture");
  var list = ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9"];
  var value = new Array(9).fill(false);
  var checkvalue = new Array(9).fill(false);

  cards.forEach( (card) => {
    card.addEventListener("click", function() {
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

      if (!value[num] && window.getComputedStyle(select).visibility == "hidden") {
        select.style.visibility = "visible";
        value[num] = true;

        return;
      }
      
      select.style.visibility = "hidden";
      
      if (back.classList.contains("backTurn")) return;

      back.classList.add("backTurn");
      front.classList.add("frontTurn");
    });
  });

  function check() {
    for (var i = 0; i < checkvalue.length; i++) {
      if (!checkvalue[i]) {
        return false;
      }
    }

    return true;
  }
}

