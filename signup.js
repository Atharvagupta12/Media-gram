
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
//   import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
  import { getAuth,createUserWithEmailAndPassword, } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCLebNt2YH-eUxPs6gE3vQyrWXA99D4GgU",
    authDomain: "signup-form-ba2ab.firebaseapp.com",
    projectId: "signup-form-ba2ab",
    storageBucket: "signup-form-ba2ab.appspot.com",
    messagingSenderId: "728854023242",
    appId: "1:728854023242:web:ae95052e20cd624ecc2ab3"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);
const auth = getAuth() 

var username = document.getElementById("username")
var email = document.getElementById("Email")
var passwords = document.getElementById("password")


window.signup = function(e){
    e.preventDefault();
    var obj = {
        username:username.value,
        email:email.value,
        passwords:passwords.value,
    }
    createUserWithEmailAndPassword(auth, obj.email,obj.passwords)
    .then(function(success){
        alert("Signup Successfully")
    })
    .catch(function(err){
        alert("error" + err)
    })
    console.log(obj)
};