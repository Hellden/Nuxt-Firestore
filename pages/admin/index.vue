<template>
  <section>
    <h1>Admin route</h1>
    <a @click="logout">Logout</a>
  </section>
</template>

<script>
import Cookie from 'js-cookie'

export default {
  methods: {
    async logout() {
      await this.$auth.signOut()
      await Cookie.remove('access_token')

      location.href = '/'
    }
  }
}
</script>
