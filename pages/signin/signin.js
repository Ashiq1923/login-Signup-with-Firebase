
// firebase 

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
  import { getAuth , signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDS1U5i6lizVr5kSh5LoM6NyG89ZFC7Hhg",
    authDomain: "loginsignup-f5e19.firebaseapp.com",
    projectId: "loginsignup-f5e19",
    storageBucket: "loginsignup-f5e19.appspot.com",
    messagingSenderId: "677024868750",
    appId: "1:677024868750:web:95c47bcbb1ac2c5519dcdf",
    measurementId: "G-B1XB2ZYPWW"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth();


const email = document.getElementById('email');
const password = document.getElementById('password');
const loginbtn = document.getElementById('loginbtn');
let errorBox = document.getElementById('error');

loginbtn.addEventListener('click',()=>{

    let obj ={
        Email: email.value,
        Password: password.value
        }
        signInWithEmailAndPassword( auth,obj.Email,obj.Password )
        .then((ok)=>{
          errorBox.innerHTML='Loding...'
          errorBox.classList.remove('hide-error')
          errorBox.classList.remove('not-corrected')   
          errorBox.classList.add('corrected')


            setTimeout(()=>{
            window.location.href ='/index.html'; 
            email.value='';
            password.value='';
            errorBox.innerHTML='';

          },3000)

        })
        .catch((err)=>{
          email.setAttribute('required','required')
          password.setAttribute('required','required')
          errorBox.innerHTML='Not Correct'
          errorBox.classList.add('not-corrected');           
          errorBox.classList.remove('hide-error');

          setTimeout(()=>{
            errorBox.classList.add('hide-error')

            errorBox.innerHTML=''

          },3000)
        });


})