<template>
  <div>
    <app-drawer :menu="menu" class="md:block lg:block hidden" />
    <app-header :menu="menu" class="" />
    <div id="main" class="lg:ml-[280px] md:ml-[280px]">
      <div :class="['px-6 py-6 min-h-screen bg-white']">
        <!-- <div>
          {{ breadcrumb }}
        </div> -->
        <div class="mb-6 text-sm" v-if="isSubPage">
          <!-- <span role="button" @click="$router.back()" class="text-neutral-600 capitalize"
            >{{ routeParent }}
          </span>
          <span>/</span>
          <span class="capitalize">{{ routeSubName }}</span> -->
          <span role="button" @click="$router.back()" class="flex gap-1 items-center">
            <icon icon="la:long-arrow-alt-left" />
            Back
          </span>
        </div>
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
    },
    isSubPage() {
      return this.$route.meta.isSubPage
    }
  }
}
</script>

<style></style>
