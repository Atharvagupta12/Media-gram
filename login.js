 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
//  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
 import { getAuth,signInWithEmailAndPassword, } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
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
//  const analytics = getAnalytics(app);
const auth = getAuth() 


var email = document.getElementById("email")
var password = document.getElementById("Password")

window.login = function(e){
    e.preventDefault();
    var obj = {
        email:email.value,
        password:password.value,
    };
    signInWithEmailAndPassword(auth,obj.email,obj.password)
    .then(function(success){
        console.log(success)
        alert("Loggined Successfully")

        window.location.replace("home.html")
    
    })
    .catch(function(err){
        alert("login error "+ err)
    })
    console.log(obj)
}
