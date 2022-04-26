import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUV-__T4vBbWdRs3AShve0AbfoOqr7D4Y",
  authDomain: "ninja-firegram-98baf.firebaseapp.com",
  projectId: "ninja-firegram-98baf",
  storageBucket: "ninja-firegram-98baf.appspot.com",
  messagingSenderId: "308603840569",
  appId: "1:308603840569:web:842fb1089f5f1b359d05e8",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
