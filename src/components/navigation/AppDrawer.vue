<template>
  <div>
    <div class="flex flex-col lg:z-2 pb-12 pt-4 mb-8 min-h-screen md:z-2 lg:fixed bg-primary-500 md:fixed absolute lg:left-0 md:left-0 top-[70px] h-screen overflow-y-auto w-[280px] gap-12">
      <ul class="">
        <li v-for="route in menu" :key="route?.path">
          <MenuItem :item="route" />
        </li>
      </ul>
      <hr class="border-gray-100" />
      <span class="text-white flex justify-between items-center py-[11px] px-3 ml-6 mb-8" role="button">
        <span class="flex items-center gap-2">
          <icon icon="tabler:logout" class="text-[14px]" />
          <span class="capitalize">Logout</span>
        </span>
      </span>
    </div>
  </div>
</template>

<script>
import MenuItem from '../assets/menuLink.vue'
export default {
  components: { MenuItem },
  props: {
    menu: {
      type: Array,
      default: () => [],
      required: true
    }
  },

  data(){
    return {
      subMenu: null
    }
  },

  methods: {
    menuFunc(value) {
      value.hasChildren ? this.toggleSubMenu(value) : this.$router.push(value.href)
    },

    toggleSubMenu(value){
      this.subMenu = this.subMenu === null ? value.parent : null
    }
  },
}
</script>

<style></style>
