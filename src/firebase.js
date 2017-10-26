import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCa2JjahRbBCcaZOUroNU0heCIt54OQaFM",
    authDomain: "forking-delicious.firebaseapp.com",
    databaseURL: "https://forking-delicious.firebaseio.com",
    projectId: "forking-delicious",
    storageBucket: "forking-delicious.appspot.com",
    messagingSenderId: "453411203316"
};

firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;
