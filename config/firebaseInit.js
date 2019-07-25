import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: 'AIzaSyDD4IhWUUFWOQz69V_L9X100DpCCwk-Ml0',
    authDomain: 'nuxt-project-raph.firebaseapp.com',
    databaseURL: 'https://nuxt-project-raph.firebaseio.com',
    projectId: 'nuxt-project-raph',
    storageBucket: 'nuxt-project-raph.appspot.com',
    messagingSenderId: '119242053211'
  }
  firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth()
export const db = firebase.firestore()
export const user = firebase.auth().currentUser

export default firebase
