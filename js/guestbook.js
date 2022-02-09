import {updateRank, readCheckBook, addBook, getAllBook} from "./firebase.js";
import {RestartConfetti, DeactivateConfetti} from "./firecracker.js";

RestartConfetti();
setTimeout(DeactivateConfetti, 7000);

var messageArea = document.getElementById("guestbookInput");
var letterBook = document.getElementById("LetterBox");
var enterButton = document.querySelector(".guestbookEnter");
var letterValue = true;


window.onload = function() {
    readCheckBook();
    getAllBook();

    messageArea.addEventListener("keydown", inputBoxResizing);
    messageArea.addEventListener("keyup", inputBoxResizing);

    enterButton.addEventListener("click", function() {
        if (messageArea.value.length == 0) {
            alert("등록할 내용이 없습니다.");
        } else {
            addBook(messageArea.value);
            createLetter(letterValue, messageArea.value);
            messageArea.value = "";
        }
    });

    function inputBoxResizing() {
        messageArea.style.height = 'auto';
        var textEleHeight = messageArea.scrollHeight;
        messageArea.style.height = textEleHeight + "px";

        cutMessage();
    }

    function cutMessage() {
        if (messageArea.value.length > 200) {
            var str = messageArea.value;
            messageArea.innerText = str.substring(0, 200);
            alert("200자를 초과하였습니다.");
        }
    }
}

function createLetter(value, text) {
    var letter = document.createElement("p");

    if (value) {
        letter.classList.add("letter1");
        letterValue = false;
    } else {
        letter.classList.add("letter2");
        letterValue = true;
    }

    letter.innerText = text;
    letterBook.appendChild(letter);
}

export {createLetter, letterValue};
