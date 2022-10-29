
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyA4UUymAn5FIsnzYwvpmdp8LByPiUYH5z8",
  authDomain: "decartography.firebaseapp.com",
  projectId: "decartography",
  storageBucket: "decartography.appspot.com",
  messagingSenderId: "848472014893",
  appId: "1:848472014893:web:d716c5aa7138817f7f38a4",
  measurementId: "G-F7BMWETFJQ"
};

try {
    firebase.initializeApp(firebaseConfig);
  } catch(err){
    if (!/already exists/.test(err.message)) {
      console.error('Firebase initialization error', err.stack)}
  }
  const fire = firebase;
  export default fire;
  