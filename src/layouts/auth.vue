<template>
  <div class="flex h-screen">
    <div class="md:block lg:block hidden bg-primary-300 w-8/12 left-side p-12 text-center">
      <h3 class="font-semibold text-2xl">Let's Get You Started</h3>
      <p class="font-medium text-sm">Centralized health services and users' balance to innovation</p>
      <div class="h-[70vh] flex items-center">
        <img src="@/assets/img/auth-bg.svg" class="w-[420px] mx-auto" />
      </div>
    </div>
    <div class="lg:p-16 md:p-12 p-8 bg-white w-full">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    routeName() {
      return this.$route.name
    }
  }
}
</script>

<style>
</style>
