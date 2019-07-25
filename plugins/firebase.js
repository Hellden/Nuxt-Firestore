import Vue from 'vue'
import { db, auth } from '@/config/firebaseInit'

const firebasePlugin = {
  install() {
    if (Vue.__nuxt_firebase_installed__) {
      return
    }
    Vue.__nuxt_firebase_installed__ = true

    if (!Vue.prototype.$db) {
      Vue.prototype.$firestore = db
      Vue.prototype.$AUTH = auth
    }
  }
}

Vue.use(firebasePlugin)

export default ctx => {
  const { app, store } = ctx

  app.$firestore = Vue.prototype.$firestore
  ctx.$firestore = Vue.prototype.$firestore

  app.$AUTH = Vue.prototype.$AUTH
  ctx.$AUTH = Vue.prototype.$AUTH

  if (store) {
    store.$firestore = Vue.prototype.$firestore
    store.$AUTH = Vue.prototype.$AUTH
  }
}
