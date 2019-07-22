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
      <label for="email">Nom :</label>
      <input id="email" :value="email" type="email" />
      <label for="password">Password : </label>
      <input type="password" :value="password" />
      <button outline fab color="#4285F4" @click="CreateUser">
        Create User
      </button>
    </section>
  </div>
</template>
<script>
import { fireDb, auth } from '~/plugins/firebase.js'
export default {
  data() {
    return {
      writeSuccessful: false,
      email: '',
      pass: ''
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
    CreateUser() {
      auth
        .createUserWithEmailAndPassword(this.email, this.pass)
        .catch(function(error) {
          const errorCode = error.code
          console.log('errorCode: ', errorCode)
          const errorMessage = error.message
          console.log('errorMessage: ', errorMessage)
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
