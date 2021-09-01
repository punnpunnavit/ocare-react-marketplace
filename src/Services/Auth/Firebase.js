import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  //   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  //   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  //   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  //   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  //   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  //   appId: process.env.REACT_APP_FIREBASE_APP_ID,
  //   measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
  apiKey: "AIzaSyA3ZyPzWymM_0B4PxEPFiu23Pkv4CQO4GE",
  authDomain: "ocare-development.firebaseapp.com",
  projectId: "ocare-development",
  storageBucket: "ocare-development.appspot.com",
  messagingSenderId: "432654287882",
  appId: "1:432654287882:web:eec3358c85e36385e7cbf3",
  measurementId: "G-2Z5LEC6GSM",
});

export const auth = app.auth();
export default app;
