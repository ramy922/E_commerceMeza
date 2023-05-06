import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAO2L9Pqfw8jXXTnC05uyoTsUSB2ZGTaPg",
  authDomain: "meza7-ecoomere.firebaseapp.com",
  projectId: "meza7-ecoomere",
  storageBucket: "meza7-ecoomere.appspot.com",
  messagingSenderId: "266757290036",
  appId: "1:266757290036:web:b6d1fb5f46449711c63261",
  measurementId: "G-3HNENYPK5L"
};
const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth();
const db = firebaseApp.fireStore();

export {auth , db};