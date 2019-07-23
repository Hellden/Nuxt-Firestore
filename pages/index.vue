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
      <h3 style="color: red;">{{ errorTest }}</h3>
    </section>
    <section>
      <h1>Enregistrement width Firebase</h1>
      <label for="email">E-mail :</label>
      <input id="email" v-model="email" type="email" />
      {{ email }}
      <label for="password">Password : </label>
      <input v-model="password" type="password" />
      {{ password }}
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
      password: '',
      errorTest: ''
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
        .createUserWithEmailAndPassword(this.email, this.password)
        .catch(err => (this.errorTest = err.message))
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
