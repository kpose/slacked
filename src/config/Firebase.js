import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDZUqecVaab4ObDWD2k-yJHqrMtCw8e8bM',
  authDomain: 'slack-clone-fb623.firebaseapp.com',
  databaseURL: 'https://slack-clone-fb623.firebaseio.com',
  projectId: 'slack-clone-fb623',
  storageBucket: 'slack-clone-fb623.appspot.com',
  messagingSenderId: '1029887902726',
  appId: '1:1029887902726:web:12551b10d3e77e8ef06f87',
  measurementId: 'G-FBVGTHXYPM',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;
