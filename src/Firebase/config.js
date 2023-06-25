import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import 'firebase/compat/storage'

const firebaseConfig = {

    //replace this config with one you get from the firebase;

    apiKey: "AIzsSyA2dios2Ld3XWaZVLcblsqijsBvJcBE7-w",
    authDomain: "olsx-clone-4f85c.firebaseapp.com",
    projectId: "olx-clone-45f85c",
    storageBucket: "olx-clone-45f85c.appspot.com",
    messagingSenderId: "55321346493",
    appId: "1:5532134693:web:96cd3b5e9f1a96e5563becc"
  };

export default firebase.initializeApp(firebaseConfig);