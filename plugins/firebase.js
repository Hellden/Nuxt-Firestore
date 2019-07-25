import Vue from 'vue'
import { db, auth, user } from '@/config/firebaseInit'

const firebasePlugin = {
  install() {
    if (Vue.__nuxt_firebase_installed__) {
      return
    }
    Vue.__nuxt_firebase_installed__ = true

    if (!Vue.prototype.$db) {
      Vue.prototype.$firestore = db
      Vue.prototype.$auth = auth
      Vue.prototype.$user = user
    }
  }
}

Vue.use(firebasePlugin)

/* ------------------- Vuex ------------------- */

export default ctx => {
  const { app, store } = ctx

  app.$firestore = Vue.prototype.$firestore
  ctx.$firestore = Vue.prototype.$firestore

  app.$auth = Vue.prototype.$auth
  ctx.$auth = Vue.prototype.$auth

  app.$user = Vue.prototype.$user
  ctx.$user = Vue.prototype.$user

  if (store) {
    store.$firestore = Vue.prototype.$firestore
    store.$auth = Vue.prototype.$auth
    store.$user = Vue.prototype.$user
  }
}
