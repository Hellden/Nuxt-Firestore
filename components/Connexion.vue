<template>
  <div class="columns">
    <div class="column">
      <h1
        v-if="validationConnexion"
        class=" title notification is-primary has-text-centered"
      >
        {{ validationConnexion }}
      </h1>
      <form @submit.prevent="handleConnexion">
        <div class="field">
          <label class="label">Email</label>
          <div class="control">
            <input
              v-model="emailConnexion"
              class="input"
              type="email"
              placeholder="email"
            />
          </div>
        </div>

        <div class="field">
          <label class="label">Password</label>
          <div class="control">
            <input
              v-model="passwordConnexion"
              class="input"
              type="password"
              placeholder="Password"
            />
          </div>
        </div>
        <button class="button is-primary" type="submit">
          Connexion
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      validationConnexion: '',
      emailConnexion: '',
      passwordConnexion: ''
    }
  },
  created() {
    if (this.$user) {
      this.validationConnexion = 'Vous êtes connecté'
    } else {
      console.log('Aucun utilisateur de connecté')
    }
  },
  methods: {
    handleConnexion() {
      this.$auth
        .signInWithEmailAndPassword(this.emailConnexion, this.passwordConnexion)
        .catch(error => console.error(error.message))
      this.$auth.onAuthStateChanged(user => {
        console.log('user: ', user)
        if (user) {
          this.$router.push('/admin')
        } else {
          this.validationConnexion = 'Problème de connexion'
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
