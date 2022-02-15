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

            var id;

            //추후 편지를 작성하신 분들 한정으로 추첨 이벤트가 열릴 수 있습니다.\n" + "아이디를 남기시겠습니까?
            if (confirm(decodeURI("%EC%B6%94%ED%9B%84%20%ED%8E%B8%EC%A7%80%EB%A5%BC%20%EC%9E%91%EC%84%B1%ED%95%98%EC%8B%A0%20%EB%B6%84%EB%93%A4%20%ED%95%9C%EC%A0%95%EC%9C%BC%EB%A1%9C%20%EC%B6%94%EC%B2%A8%20%EC%9D%B4%EB%B2%A4%ED%8A%B8%EA%B0%80%20%EC%97%B4%EB%A6%B4%20%EC%88%98%20%EC%9E%88%EC%8A%B5%EB%8B%88%EB%8B%A4.%0A%EC%95%84%EC%9D%B4%EB%94%94%EB%A5%BC%20%EB%82%A8%EA%B8%B0%EC%8B%9C%EA%B2%A0%EC%8A%B5%EB%8B%88%EA%B9%8C?"))) {
                id = prompt(decodeURI("%EC%95%84%EC%9D%B4%EB%94%94%EB%A5%BC%20%EC%9E%85%EB%A0%A5%ED%95%B4%EC%A3%BC%EC%84%B8%EC%9A%94."), "");
                //아이디를 입력해주세요.
            } else {
                id = "";
            }

            alert(decodeURI("%EB%A9%94%EC%84%B8%EC%A7%80%EA%B0%80%20%EC%A0%95%EC%83%81%20%EB%93%B1%EB%A1%9D%EB%90%98%EC%97%88%EC%8A%B5%EB%8B%88%EB%8B%A4."));
            //메세지가 정상 등록되었습니다.

            if (id != null && id != "" && id.indexOf("@") == -1) {
                id = "@" + id;
            }

            addBook(id, messageArea.value);
            createLetter(letterValue, messageArea.value);
            messageArea.value = "";
            window.scrollTo(0, window.innerHeight);
            

            // alert(decodeURI("%EB%93%B1%EB%A1%9D%EB%90%98%EC%97%88%EC%8A%B5%EB%8B%88%EB%8B%A4.")); //등록되었습니다.
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