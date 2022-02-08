import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-analytics.js";
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
    alert("등록시간 : \n"+date.toLocaleString() + "\n이벤트에 정상 참여 되었습니다.\n감사합니다.");

  })
  .catch((error) => {
    console.error("Error writing document: ", error);
  });
}

function readBook() {
  var docRef = db.collection("GuestBook").doc("test");

  docRef.get().then((doc) => {
      if (doc.exists) {
        return doc;
      } else {
          console.log("No such document!");
      }
  }).catch((error) => {
      console.log("Error getting document:", error);
  });
}

function addBook(num, text) {
  var ref = db.collection("GuestBook").doc(num.toString());

  // Set the "capital" field of the city 'DC'
  return ref.update({
      letter: text
  })
  .then(() => {
      console.log("Document successfully updated!");
  })
  .catch((error) => {
      // The document probably doesn't exist.
      console.error("Error updating document: ", error);
  });
  
}
export {updateRank, readBook, addBook};