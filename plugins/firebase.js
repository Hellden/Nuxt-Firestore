import Vue from 'vue'
import { db, auth, user } from '@/config/firebaseInit'

const firebasePlugin = {
  install() {
    if (!Vue.prototype.$db) {
      Vue.prototype.$firestore = db
      Vue.prototype.$auth = auth
      Vue.prototype.$user = user
    }
  }
}

Vue.use(firebasePlugin)
