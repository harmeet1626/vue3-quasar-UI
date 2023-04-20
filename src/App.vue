<template>
  <div>
    <div v-if="showNav">
      <navbar></navbar>
    </div>
    <div v-else>
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script>
import navbar from './components/navbar.vue';

export default {
  name: 'App',
  data() {
    return {
      show: null
    }
  },
  components: { navbar },
  watch: {
    $route(value) {
      if (value.fullPath == '/login') {
        this.show = false
      } else {
        this.show = true
      }
    }
  },
  computed: {
    showNav() {
      return this.show ? true : false
    }
  },

}
</script>
