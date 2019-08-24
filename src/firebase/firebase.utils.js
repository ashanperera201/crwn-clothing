import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyA6owE7zjCUS0XI7JW8dR89Cu7lTd-FfUU",
    authDomain: "crwn-dn.firebaseapp.com",
    databaseURL: "https://crwn-dn.firebaseio.com",
    projectId: "crwn-dn",
    storageBucket: "",
    messagingSenderId: "668348703933",
    appId: "1:668348703933:web:c014866c8510f846"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

