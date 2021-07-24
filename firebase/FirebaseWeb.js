import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyB2cDf18iTsAX749V43mfZj8OWSQN0yitw",
    authDomain: "ieltsgroup-cc249.firebaseapp.com",
    projectId: "ieltsgroup-cc249",
    storageBucket: "ieltsgroup-cc249.appspot.com",
    messagingSenderId: "893210685985",
    appId: "1:893210685985:web:9496dbe699f381ac19e960",
    measurementId: "G-DYH06V8FB0"
};
export const FirebaseWeb = firebase.initializeApp(firebaseConfig);
