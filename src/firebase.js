import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCgsdx_gpwHaA5YrjLmSUdohcD-JqfTHsY",
    authDomain: "comentaki-f0fae.firebaseapp.com",
    projectId: "comentaki-f0fae",
    storageBucket: "comentaki-f0fae.appspot.com",
    messagingSenderId: "59290136155",
    appId: "1:59290136155:web:58fac956d6b1fb58b4197e"
  }

  firebase.initializeApp(firebaseConfig)

  export default firebase