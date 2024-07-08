<template>
  <main>
    <component :is="layout">
      <RouterView />
    </component>
  </main>
</template>

<script>
import Default from './layouts/default.vue'
import Auth from './layouts/auth.vue'
import Dashboard from './layouts/dashboard.vue'
import Home from './layouts/home.vue'
import { useHead } from '@vueuse/head'
// import { watch, computed } from 'vue';
// import { useRoute } from 'vue-router';

export default {
  components: {
    Default,
    Auth,
    Dashboard,
    Home
  },

  data() {
    return {
      pageTitle: ''
    }
  },

  methods: {
    updateTitle() {
      this.pageTitle = this.$route.meta.pageTitle
      // const { title, content } = this.fetchPageData(this.$route.meta.pageTitle);
      // this.pageTitle = title;
      // this.pageContent = content;
      useHead({
        title: this.pageTitle
      })
    }
  },

  created() {
    this.updateTitle();
  },

  watch: {
    '$route.meta.pageTitle': {
      handler() {
        this.updateTitle()
      },
      immediate: true
    }
  },

  computed: {
    layout() {
      if (this.$route.meta.layout == 'auth') {
        return Auth
      } else if (this.$route.meta.layout == 'dashboard') {
        return Dashboard
      } else if (this.$route.meta.layout == 'home') {
        return Home
      } else {
        return Default
      }
    },

    // pageTitle() {
    //   return this.$route.meta.pageTitle
    // }
  }
}
</script>

<style scoped></style>
