import firebase from './firebase';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';


const firebaseConfig = {
    apiKey: "AIzaSyC4QTc152cxP58CjWCPofWn5iMLO_dW6Y8",
    authDomain: "whatsappclone-268e6.firebaseapp.com",
    projectId: "whatsappclone-268e6",
    storageBucket: "whatsappclone-268e6.appspot.com",
    messagingSenderId: "1069014626722",
    appId: "1:1069014626722:web:bddd98d7b0e4130722c2fb",
    measurementId: "G-FH2CN7FW44"
  };
  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);
  // const auth = firebase.auth();
  // const provider = new firebase.auth.GoogleAuthProvider();

  // export {auth ,provider};
  export default db;  