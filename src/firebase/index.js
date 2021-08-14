import firebase from "firebase/app";
import "firebase/storage";
    // Đoạn này copy trên firebase của từng người nha
    // trên video có 2 đoạn để copy phần này đấy, chú ý đoạn này nhé
    const firebaseConfig = {
  apiKey: "AIzaSyAANvn3nDz2pgQnsM_d8aceeaY0KLmhNoA",
  authDomain: "ecma-4dd6f.firebaseapp.com",
  projectId: "ecma-4dd6f",
  storageBucket: "ecma-4dd6f.appspot.com",
  messagingSenderId: "959286163832",
  appId: "1:959286163832:web:bc9f13146239ef8459b08d"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;