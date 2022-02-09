import {updateRank, readCheckBook, addBook, checkGuestNum} from "./firebase.js";
import {RestartConfetti, DeactivateConfetti} from "./firecracker.js";

RestartConfetti();
setTimeout(DeactivateConfetti, 7000);

window.onload = function() {
    var messageArea = document.getElementById("guestbookInput");
    var letterBook = document.getElementById("LetterBox");
    var letterValue = true;
    // var checkletter = readCheckBook();
    // var position = 0;

    // while (true) {
    //     if (checkletter.get(position) != null) {
    //         createLetter(checkletter.get(position));
    //         position++;
    //     } else {
    //         break;
    //     }
    // }


    messageArea.addEventListener("keydown", inputBoxResizing);
    messageArea.addEventListener("keyup", inputBoxResizing);

    function inputBoxResizing() {
        messageArea.style.height = 'auto';
        var textEleHeight = messageArea.scrollHeight;
        messageArea.style.height = textEleHeight + "px";

        cutMessage();
    }

    function cutMessage() {
        if (messageArea.value.length > 200) {
            var str = messageArea.value;
            messageArea.value = str.substring(0, 200);
            alert("200자를 초과하였습니다.");
        }
    }

    
    function createLetter(text) {
        var letter = document.createElement("p");

        if (checkletter) {
            letter.classList.add("letter1");
            letterValue = false;
        } else {
            letter.classList.add("letter2");
            letterValue = true;
        }

        letter.innerText = text;
        letterBook.appendChild(letter);
    }
}
