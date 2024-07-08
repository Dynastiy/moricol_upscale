<template>
  <div class="sticky top-0 z-20">
    <div
      class="flex bg-primary-500 h-[70px] w-full items-center lg:justify-start md:justify-start justify-between"
    >
      <div
        class="lg:border-r md:border-r lg:border-b md:border-b border-r-none border-b-none border-gray-100"
      >
        <div class="lg:w-[280px] md:w-280px w-auto h-[70px] flex justify-center">
          <img
            src="@/assets/BrandImg/logo.png"
            class="lg:w-36 md:w-36 w-auto"
            alt="croxxtalent logo"
            @click="goToLink"
            role="button"
          />
        </div>
      </div>
      <div class="px-6 w-full">
        <div class="flex lg:justify-between md:justify-between justify-end items-center w-full">
          <span class="font-semibold text-lg capitalize text-white lg:block md:block hidden">{{
            routeName.split('-').join(' ')
          }}</span>
          <div class="flex gap-3 items-center justify-end">
            <icon icon="mage:message-dots-fill" class="text-white text-[22px]" />
            <icon icon="solar:bell-bing-bold" class="text-white text-[22px]" />
            <img src="@/assets/img/image.png" class="w-8 h-8" alt="" />
            <span role="button" class="lg:hidden md:hidden block">
              <icon icon="ic:baseline-menu" class="text-white text-[30px]" />
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
