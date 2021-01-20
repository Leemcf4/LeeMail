// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyDhGb_z5jzjxmK44WbOcy5ZayxCiT8mP7I",
  authDomain: "leemail-c2f40.firebaseapp.com",
  projectId: "leemail-c2f40",
  storageBucket: "leemail-c2f40.appspot.com",
  messagingSenderId: "422201442161",
  appId: "1:422201442161:web:074c3881ed689e12a440d0",
  measurementId: "G-N7Z2RPQNM6",
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider }
