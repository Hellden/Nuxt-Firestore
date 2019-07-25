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
    <h1>Create User Firebase Password and EMAIL</h1>
    <br />
    <section>
      <h3 style="color: red;">{{ errorTest }}</h3>
      <h1>Enregistrement width Firebase</h1>
      <label for="email">E-mail :</label>
      <input id="email" v-model="email" type="email" />
      <label for="password">Password : </label>
      <input v-model="password" type="password" />
      <button outline fab color="#4285F4" @click="CreateUser">
        Create User
      </button>
    </section>
    <br />
    <section>
      <h1>Log in</h1>
      <h2 v-if="emailConnect">L'utilisateur {{ emailConnect }} est connecté</h2>
      <label for="email">E-mail :</label>
      <input id="email" v-model="email" type="email" />
      <label for="password">Password : </label>
      <input v-model="password" type="password" />
      <button outline fab color="#4285F4" @click="LogUser">
        Connexion
      </button>
    </section>
    <button @click="SendVerifEmail">Send email</button>

    <section>
      <h1>List content Firestore</h1>
      <ul>
        <li v-for="item in Data" :key="item.index">{{ item.data().text }}</li>
      </ul>
    </section>
  </div>
</template>
<script>
import db from '~/plugins/firebase.js'

export default {
  data() {
    return {
      writeSuccessful: false,
      email: '',
      password: '',
      errorTest: '',
      userMail: '',
      emailConnect: '',
      Data: []
    }
  },
  created() {
    this.readData()
  },
  methods: {
    readData() {
      db.read()
        .then(snapshot => {
          this.Data = snapshot.docs
        })
        .catch(error => {
          console.error(error)
        })
    },
    async writeToFirestore() {
      const ref = db.fireDb.collection('test').doc('coucou')
      const document = {
        text: 'This is a test message.'
      }
      try {
        await ref.set(document)
      } catch (e) {
        console.error(e)
      }
      this.writeSuccessful = true
    },
    CreateUser() {
      db.createUser(this.email, this.password)
    },
    LogUser() {
      db.logUser(this.email, this.password)
      // eslint-disable-next-line no-unused-expressions
      this.emailConnect = db.user().email
    },
    SendVerifEmail() {
      const user = db.auth.currentUser

      db.auth.languageCode = 'fr'
      user
        .sendEmailVerification()
        .then(function() {
          console.log('Mail send')
        })
        .catch(function(error) {
          console.log(error.message)
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
