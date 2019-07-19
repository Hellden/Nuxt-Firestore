<template>
  <div>
    <section class="container">
      <div>
        <h1>Test enregistrement firestore</h1>
        <h2>
          Write to Firestore.
        </h2>
        <div>
          <button :disabled="writeSuccessful" @click="writeToFirestore">
            <span v-if="!writeSuccessful">Write now</span>
            <span v-else>Successful!</span>
          </button>
        </div>
      </div>
    </section>
    <section>
      <h1>Enregistrement width Firebase</h1>
      <button outline fab color="#4285F4" @click="googleSignIn">
        Register
      </button>
    </section>
  </div>
</template>
<script>
import { fireDb, auth } from '~/plugins/firebase.js'
export default {
  data() {
    return {
      writeSuccessful: false
    }
  },
  methods: {
    async writeToFirestore() {
      const ref = fireDb.collection('test').doc('coucou')
      const document = {
        text: 'This is a test message.'
      }
      try {
        await ref.set(document)
      } catch (e) {
        // TODO: error handling
        console.error(e)
      }
      this.writeSuccessful = true
    },
    googleSignIn() {
      auth
        .signInWithPopup(this.auth)
        .then(result => {
          // store the user ore wathever
          this.$router.push('./')
        })
        .catch(e => {
          this.$snotify.error(e.message)
          console.log(e)
        })
    }
  }
}
</script>
<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
