import * as firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBapenmrfKwd8IMANFdjcn1JIiXEp604QY",
    authDomain: "expensify-origin.firebaseapp.com",
    databaseURL: "https://expensify-origin.firebaseio.com",
    projectId: "expensify-origin",
    storageBucket: "expensify-origin.appspot.com",
    messagingSenderId: "604904326796",
    appId: "1:604904326796:web:8af7bd12f27674069fdda9",
    measurementId: "G-TK2SL5ZZ4D"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

export { firebase, database as default}