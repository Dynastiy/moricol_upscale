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
            src="@/assets/brandImg/logo.png"
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
            <div class="flex items-center">
              <el-dropdown trigger="click" placement="bottom-end">
                <span class="el-dropdown-link text-white mb-0"> Select Services </span>
                <template #dropdown>
                  <div class="p-4 w-[250px]">
                    <span class="flex justify-between items-center">
                      <h4 class="font-semibold text-[14px]">All Modules</h4>
                    </span>
                    <div class="flex flex-col gap-2 mt-3">
                      <span
                        :role="item === adminType ? '' : 'button'"
                        class="capitalize"
                        @click="item !== adminType ? selectRole(item) : ''"
                        v-for="item in [
                          'training',
                          'recruitment',
                          'homecare',
                          'ecommerce',
                          'loan',
                          'telemedicine',
                          'massage'
                        ]"
                        :key="item"
                        :class="{'text-primary-500': item === adminType}"
                        >{{ item }}</span
                      >
                    </div>
                  </div>
                </template>
              </el-dropdown>
            </div>
            <icon icon="mage:message-dots-fill" class="text-white text-[22px]" />
            <icon icon="solar:bell-bing-bold" class="text-white text-[22px]" />
            <img src="@/assets/img/image.png" class="w-8 h-8" alt="" />
            <span role="button" class="lg:hidden md:hidden block" @click="drawer = !drawer">
              <icon icon="ic:baseline-menu" class="text-white text-[30px]" />
            </span>
          </div>
        </div>
      </div>
    </div>

    <Sidebar v-model:visible="drawer" position="right" style="width: 80%" v-if="menu.length > 0">
      <template #container="{ closeCallback }">
        <div class="h-screen bg-primary-500 pb-28 flex flex-col z-20">
          <div class="pr-4">
            <span role="button" class="flex justify-end mt-4" @click="closeCallback">
              <icon icon="gg:close-o" class="text-gray-100 text-2xl" />
            </span>
          </div>
          <div class="flex flex-col justify-between h-[80vh]">
            <div class="mt-4">
              <div class="flex justify-center mt-2">
                <router-link to="/"
                  ><img src="@/assets/brandImg/logo.png" width="120" alt=""
                /></router-link>
              </div>

              <hr class="my-6 bg-gray-200" />

              <ul class="flex flex-col min-h-[75vh] justify-between">
                <li v-for="route in menu" :key="route?.path">
                  <MenuItem :item="route" />
                </li>
              </ul>
            </div>

            <div class="flex gap-2 px-4 items-center text-white text-[13px]" role="button">
              <icon icon="fe:logout" class="menu-item-icon text-[20px]" />
              <span class="flex flex-column capitalize">
                <span> Logout </span>
              </span>
            </div>
          </div>
        </div>
      </template>
    </Sidebar>
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

  data() {
    return {
      drawer: false,
      selectedModule: ''
    }
  },

  methods: {
    goToLink() {
      this.route.layout === 'Auth' ? this.$router.push('/') : this.$router.push('/dashboard')
    },
    selectRole(e) {
      // localStorage.setItem('adminType', e)
      this.$store.commit('setAdminType', e)
      // console.log('admin type:', e );
      // console.log('admin tyoe from local Storage', localStorage.getItem('adminType'))
      this.$router.push(`/${e}/index`)
    }
  },
  computed: {
    routeName() {
      return this.$route.meta.name
    },
    route() {
      return this.$route.meta
    },
    adminType() {
      let res = this.$store.getters['getAdminType']
      return res
    }
  }
}
</script>

<style></style>
