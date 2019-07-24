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
export const auth = firebase.auth()

export default {
  read() {
    return fireDb.collection('test').get()
  }
}
