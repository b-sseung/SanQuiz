import {updateRank, readBook, addBook} from "./firebase.js";

window.onload = function() {
    readBook();

    addBook(1, "김안산랑해");
}