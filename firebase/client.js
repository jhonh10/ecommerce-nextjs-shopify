import firebase from "firebase";

const firebaseConfig = JSON.parse(process.env.NEXT_PUBLIC_FIREBASE_CONFIG);

!firebase.apps.length && firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export {db};
