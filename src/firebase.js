import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC6g-lttLym7jXL1mHkX_luDyaCjWLiG6c",
    authDomain: "disney-plus-1b881.firebaseapp.com",
    projectId: "disney-plus-1b881",
    storageBucket: "disney-plus-1b881.appspot.com",
    messagingSenderId: "728051314618",
    appId: "1:728051314618:web:7eb75e2e0174e787d87783",
    measurementId: "G-8TNQ140D7B"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage };
  export default db;
