// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBy3xpjru-wJufeSf8QfJSto1nwSlzWAt4",
  authDomain: "devfest-riftvalley-ce899.firebaseapp.com",
  projectId: "devfest-riftvalley-ce899",
  storageBucket: "devfest-riftvalley-ce899.appspot.com",
  messagingSenderId: "970786905635",
  appId: "1:970786905635:web:3a3066a411b39fbf68db96",
  measurementId: "G-LNN2FELRN8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

var messagesRef = firebase.database().ref('Collected Data');

document.getElementById('contactForm')
  .addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var stack = getInputVal('stack');

  saveMessage(name, email, stack);
  document.getElementById('feedbackform').reset();
}

// Function to get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, stack) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    stack: stack
  });
}