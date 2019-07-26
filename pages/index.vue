<template>
  <div class="col-lg-6 mx-auto my-2">
    <h1>Login to your account</h1>
    <form @submit.prevent>
      <div class="form-group">
        <input
          id="nuxtfire-email"
          v-model="account.email"
          type="email"
          class="form-control"
          placeholder="E-mail address"
        />
      </div>

      <div class="form-group">
        <input
          id="nuxtfire-password"
          v-model="account.password"
          type="password"
          class="form-control"
          placeholder="Password"
        />
      </div>

      <div class="form-group">
        <input type="submit" class="btn btn-primary" @click="login" />
      </div>
      <div v-if="isError" class="alert alert-danger">
        <p class="mb-0">{{ errMsg }}</p>
      </div>
    </form>
  </div>
</template>

<script>
import { setTimeout } from 'timers'
export default {
  data: () => ({
    account: {
      email: '',
      password: ''
    },
    isError: false,
    errMsg: ''
  }),
  methods: {
    login() {
      // TODO: add parsing of data.
      this.$store.dispatch('users/login', this.account).catch(error => {
        this.isError = true
        this.errMsg = error.code

        setTimeout(() => {
          this.isError = false
        }, 5000)
      })

      this.$router.push('/admin')
    }
  }
}
</script>
