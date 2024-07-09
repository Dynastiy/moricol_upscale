<template>
  <div>
    <home-header />
    <slot />
  </div>
</template>

<script>
import HomeHeader from '@/components/navigation/headers/HomeHeader.vue'
export default {
  components: { HomeHeader },

}
</script>

<style>

</style>