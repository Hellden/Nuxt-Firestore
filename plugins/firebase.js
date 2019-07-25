/* ------- import data firebase product -> FIRESTORE, AUTH ------- */
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

if (!firebase.apps.length) {
  const config = {
    // It's just for example, do not use. Replace with your data Firebase
    apiKey: 'AIzaSyDD4IhWUUFWOQz69V_L9X100DpCCwk-Ml0',
    authDomain: 'nuxt-project-raph.firebaseapp.com',
    databaseURL: 'https://nuxt-project-raph.firebaseio.com',
    projectId: 'nuxt-project-raph',
    storageBucket: '',
    messagingSenderId: '119242053211'
  }
  firebase.initializeApp(config)
}

/* ---------- export firebase product --------- */
export const fireDb = firebase.firestore()

export default {
  read() {
    return fireDb.collection('test').get()
  },
  createUser(email, password) {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
  },
  logUser(email, password) {
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(error => console.log(error.message))
  },
  user() {
    return firebase.auth().currentUser
  }
}
