<template>
  <v-app style="background: url('https://oir.mobi/uploads/posts/2022-09/thumbs/1662024829_43-oir-mobi-p-zadnii-fon-minimalizm-vkontakte-44.jpg') no-repeat; background-size: cover;">
    <v-main>
      <navbar></navbar>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  components: { Navbar },
  name: 'App',

  data: () => ({
    //
  }),
}
</script>
