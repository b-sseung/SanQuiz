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
            alert(decodeURI("%EB%93%B1%EB%A1%9D%ED%95%A0%20%EB%82%B4%EC%9A%A9%EC%9D%B4%20%EC%97%86%EC%8A%B5%EB%8B%88%EB%8B%A4."));  //등록할 내용이 없습니다.
        } else {
            addBook(messageArea.value);
            createLetter(letterValue, messageArea.value);
            messageArea.value = "";
            window.scrollTo(0, window.innerHeight);
            alert(decodeURI("%EB%93%B1%EB%A1%9D%EB%90%98%EC%97%88%EC%8A%B5%EB%8B%88%EB%8B%A4.")); //등록되었습니다.
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
            alert(decodeURI("200%EC%9E%90%EB%A5%BC%20%EC%B4%88%EA%B3%BC%ED%95%98%EC%98%80%EC%8A%B5%EB%8B%88%EB%8B%A4.")); //200자를 초과하였습니다.
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