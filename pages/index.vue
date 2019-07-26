<template>
  <div>
    <div class="header">
      <h1 class="header__title title">v2 DAL + Firestore + Authentificaiton</h1>
    </div>

    <div class="container">
      <h2 class="subtitle">Listing Firestore</h2>
      <ul>
        <li v-for="item in data" :key="item.index">
          {{ item.data().Nom }}<br />
          {{ item.data().Age }}<br />
          {{ item.data() }}
        </li>
      </ul>
    </div>
    <div class="container connexion">
      <h2 class="subtitle">Validation de connexion</h2>
      <Connexion />
    </div>
  </div>
</template>

<script>
import Connexion from '../components/Connexion.vue'

export default {
  components: {
    Connexion
  },
  data() {
    return {
      data: [],
      userLog: ''
    }
  },
  created() {
    this.readFirestore()
  },
  methods: {
    readFirestore() {
      this.$firestore
        .collection('Contact')
        .get()
        .then(snapshot => {
          this.data = snapshot.docs
        })
        .catch(error => console.error(error.message))
    }
  }
}
</script>

<style lang="css" scoped>

/* ------------------ HEADER ------------------ */
.header__title{
  text-align :center
}
.header{
  margin-bottom: 50px;
}

/* ----------------- Connexion ---------------- */
.connexion{
  margin-top: 50px;
}
</style>
