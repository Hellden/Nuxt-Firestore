import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDD4IhWUUFWOQz69V_L9X100DpCCwk-Ml0',
  authDomain: 'nuxt-project-raph.firebaseapp.com',
  databaseURL: 'https://nuxt-project-raph.firebaseio.com',
  projectId: 'nuxt-project-raph',
  storageBucket: 'nuxt-project-raph.appspot.com',
  messagingSenderId: '119242053211',
  appId: '1:119242053211:web:e3c9f5c4677914c9'
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth()
export const db = firebase.firestore()

export default firebase
