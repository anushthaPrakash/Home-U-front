// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCfRY9WR0fC5I0O7UcbsBJyTpsGgSELS-c",
    authDomain: "home-u-ebf0c.firebaseapp.com",
    projectId: "home-u-ebf0c",
    storageBucket: "home-u-ebf0c.appspot.com",
    messagingSenderId: "639938931720",
    appId: "1:639938931720:web:6818590529b292e33835bd"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

const signInWithGoogle = ()=>{
    signInWithPopup(auth, provider).then((result)=>{
        console.log(result)
        const name = result.user.displayName
        const email = result.user.email
        const profilePic = result.user.photoURL
        

        localStorage.setItem("user", JSON.stringify({name, email, profilePic}));
    }).catch((err)=>{
        console.log(err);
    })
}

const db = getFirestore(app);
export {db, signInWithGoogle, auth};