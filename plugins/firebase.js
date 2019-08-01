import Vue from 'vue'
import { db, auth, user } from '@/config/firebaseInit'

// Init prototype for using in all the application.
// Using $firestore,$auth, $user
const firebasePlugin = {
  install() {
    Vue.prototype.$firestore = db
    Vue.prototype.$auth = auth
    Vue.prototype.$user = user
  }
}

Vue.use(firebasePlugin)
