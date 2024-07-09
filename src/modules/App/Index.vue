<template>
  <div class="container mt-6">
    <div class="grid grid-cols-3 gap-6">
      <span
        v-for="menu in modules"
        :key="menu"
        class="bg-primary-100 capitalize p-4 rounded-lg text-center hover:bg-primary-400 hover:text-white hover:border-b  hover:border-b-4 hover:border-b-primary-600"
        role="button"
        @click="selectRole(menu)"
      >
        {{ menu }}
      </span>
    </div>
  </div>
</template>

<script>
import modules from '@/api/modules.js'
export default {
  data() {
    return {
      modules
    }
  },

  methods: {
    selectRole(e) {
      localStorage.setItem('adminType', e)
      this.$router.push(`/${e}/index`)
    }
  },
  computed: {}
}
</script>

<style></style>
