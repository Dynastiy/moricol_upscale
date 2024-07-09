<template>
  <div class="sticky top-0 z-20">
    <div class="flex bg-primary-500 h-[70px] w-full items-center justify-between">
      <div class="lg:w-[280px] md:w-280px w-auto h-[70px] flex justify-center">
        <img
          src="@/assets/brandImg/logo.png"
          class="lg:w-36 md:w-36 w-auto"
          alt="croxxtalent logo"
          @click="goToLink"
          role="button"
        />
      </div>
      <div class="px-6 w-full">
        <div class="flex gap-3 items-center justify-end">
          <icon icon="mage:message-dots-fill" class="text-white text-[22px]" />
          <icon icon="solar:bell-bing-bold" class="text-white text-[22px]" />
          <img src="@/assets/img/image.png" class="w-8 h-8" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },

  methods: {
    goToLink() {
      this.route.layout === 'Auth' ? this.$router.push('/') : this.$router.push('/dashboard')
    }
  },
  computed: {
    routeName() {
      return this.$route.meta.name
    },
    route() {
      return this.$route.meta
    }
  }
}
</script>

<style></style>
