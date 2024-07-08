<template>
  <div>
    <app-drawer :menu="menu" />
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
      // menu
    }
  },
  mounted() {
    console.log(this.$router.getRoutes().filter(item=> item.meta.adminUserType == this.adminType))
  },

  computed: {
    // breadcrumb(){
    //   console.log(this.$router);
    //   return true
    // }
    menu(){
      return this.$router.getRoutes().filter(item=> item.meta.adminUserType == this.adminType)
    },
    adminType(){
      return localStorage.getItem('adminType')
    }
    
  }
}
</script>

<style></style>
