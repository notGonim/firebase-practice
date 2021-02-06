import firebase from "firebase"



const firebaseConfig = {
    apiKey: "AIzaSyCU4TM5lscDD69uA7LgHZKWxAs6sinDs1A",
    authDomain: "traveller-96a40.firebaseapp.com",
    projectId: "traveller-96a40",
    storageBucket: "traveller-96a40.appspot.com",
    messagingSenderId: "1091722822894",
    appId: "1:1091722822894:web:20aee514c2adda7ee9dfff"
};



const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider }



