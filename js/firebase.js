import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-analytics.js";
import { createLetter, letterValue } from "./guestbook.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_hZjFfKdc1m-CzINZAOFW1kaCvREOOM8",
  authDomain: "ansanquiz.firebaseapp.com",
  projectId: "ansanquiz",
  storageBucket: "ansanquiz.appspot.com",
  messagingSenderId: "1070378956114",
  appId: "1:1070378956114:web:b400361288eb71f9f0f68b",
  measurementId: "G-SK1Q1MDCWB"
};

firebase.initializeApp(firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

var db = firebase.firestore();

function updateRank(text) {
  // var rank = readRank();

  if (text.substring(0, 1) != "@") {
    text = "@" + text;
  }

  var date = new Date();

  // Add a new document in collection "cities"
  db.collection("Rank").doc(date.toLocaleString()).set({
    name: text
  })
  .then(() => {
    console.log("Document successfully written!");
    alert(decodeURI("%EB%93%B1%EB%A1%9D%EC%8B%9C%EA%B0%84%20:%20") + "\n" + date.toLocaleString() + "\n" + 
      decodeURI("%EC%9D%B4%EB%B2%A4%ED%8A%B8%EC%97%90%20%EC%A0%95%EC%83%81%20%EC%B0%B8%EC%97%AC%20%EB%90%98%EC%97%88%EC%8A%B5%EB%8B%88%EB%8B%A4.")
      + "\n" + decodeURI("%EA%B0%90%EC%82%AC%ED%95%A9%EB%8B%88%EB%8B%A4."));
    //'등록시간 : '   이벤트에 정상 참여 되었습니다.     감사합니다.
  })
  .catch((error) => {
    console.error("Error writing document: ", error);
  });
}

function readCheckBook() {
  var docRef = db.collection("GuestBookCheck").doc("checklist");
  var position = 0;

  docRef.get().then((doc) => {
      if (doc.exists) {
        var list = doc.data();
        // console.log(list);
        // console.log(doc.data());
        // console.log(doc.data()[3]);
        // console.log(list.length + ", " + list.size);
        while (true) {
          if (list[position] != null) {
            // console.log(list[position]);
            createLetter(letterValue, list[position]);
            position++;
          } else {
            break;
          }
        }
      } else {
          console.log("No such document!");
      }
  }).catch((error) => {
      console.log("Error getting document:", error);
  });
}

function addBook(_id, text) {
  var date = new Date();

  alert(date.toLocaleString());
  // Add a new document in collection "cities"
  db.collection("GuestBook").doc(date.toLocaleString()).set({
    letter: text,
    id: _id
  })
  .then(() => {
    console.log("Document successfully written!");
  })
  .catch((error) => {
    console.error("Error writing document: ", error);
  });
}

// function checkGuestNum() {
//   var docRef = db.collection("GuestNumber").doc("number");

//   docRef.get().then((doc) => {
//       if (doc.exists) {
//         return doc.get("num");
//       } else {
//           console.log("No such document!");
//       }
//   }).catch((error) => {
//       console.log("Error getting document:", error);
//   });
// }

function getAllBook() {
  db.collection("GuestBook").get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          createLetter(letterValue, doc.get("letter"));
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
}

export {updateRank, readCheckBook, addBook, getAllBook};