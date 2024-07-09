<template>
  <div>
    <app-drawer :menu="menu" class="md:block lg:block hidden" />
    <app-header :menu="menu" class="" />
    <div id="main" class="lg:ml-[280px] md:ml-[280px]">
      <div class="px-6 py-6 bg-neutral-200 min-h-screen">
        <!-- <div>
          {{ breadcrumb }}
        </div> -->
        <div>
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import menu from '@/api/menuItems'
import AppDrawer from '@/components/navigation/AppDrawer.vue'
import AppHeader from '@/components/navigation/AppHeader.vue'
export default {
  components: { AppDrawer, AppHeader },
  data() {
    return {
      menu: [],
      adminType: ''
    }
  },
  mounted() {
    // console.log(this.$router.getRoutes().filter(item=> item.meta.adminUserType == this.adminType))
  },

  methods: {
    getMenu() {
      this.menu = this.$router
        .getRoutes()
        .filter((item) => item.meta.adminUserType == this.adminType)
    }
  },

  created() {
    this.getMenu()
  },

  watch: {
    $router: {
      handler(val) {
        if (val) {
          this.adminType = this.adminValue
          this.getMenu()
        }
      },
      immediate: true,
      deep: true
    }
  },

  computed: {
    adminValue() {
      let res = this.$store.getters['getAdminType']
      return res
    }
  }
}
</script>

<style></style>
