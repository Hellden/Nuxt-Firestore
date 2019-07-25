<template>
  <div>
    <div class="header">
      <h1 class="header__title">v2 DAL + Firestore + Authentificaiton</h1>
    </div>

    <div>
      <h2>Listing Firestore</h2>
      <ul>
        <li v-for="item in data" :key="item.index">
          {{ item.data().Nom }}<br />
          {{ item.data().Age }}<br />
          {{ item.data() }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
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
.header__title{
  text-align :center
}
</style>
