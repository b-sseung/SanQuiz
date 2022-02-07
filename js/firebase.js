// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
import { getFirestore } from "firebase/firestore";
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);

var db = app.firestore();

function updateRank(text) {
  var rank = readRank();

  db.collection("cities").doc("LA").set({
    name: "Los Angeles",
    state: "CA",
    country: "USA"
})
.then(() => {
    console.log("Document successfully written!");
})
.catch((error) => {
    console.error("Error writing document: ", error);
});
}

function readRank() {
  var docRef = db.collection("Rank").doc("List");

  docRef.get().then((doc) => {
      if (doc.exists) {
        return doc.get("name");
      } else {
          console.log("No such document!");
      }
  }).catch((error) => {
      console.log("Error getting document:", error);
  });
}