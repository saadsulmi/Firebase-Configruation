import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import 'firebase/compat/storage'

const firebaseConfig = {
    apiKey: "AIzaSyA2dios2Ld3XWaZVLcblsqijsBvJcBE7-w",
    authDomain: "olx-clone-4f85c.firebaseapp.com",
    projectId: "olx-clone-4f85c",
    storageBucket: "olx-clone-4f85c.appspot.com",
    messagingSenderId: "5532134693",
    appId: "1:5532134693:web:96cdb5e9f1a96e5563becc"
  };

export default firebase.initializeApp(firebaseConfig);