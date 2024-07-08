<template>
  <div>
    <router-link
      :to="item.path"
      class="flex justify-between items-center py-[12px] px-3"
      :class="[parentName === item.meta.parent ? 'bg-white text-primary-500' : 'text-white']"
    >
      <span class="flex items-center gap-2">
        <icon :icon="item.meta.icon" class="text-[13px]" />
        <span class="capitalize text-[15px] block font-medium">{{ item.meta.label.split("-").join(' ') }}</span>
      </span>
      <span v-if="item.children.length > 0" role="button">
        <icon icon="prime:angle-right" class="text-2xl" />
      </span>
    </router-link>
    <!-- <div v-if="subMenu === item.parent" class="ml-4">
      <span v-for="(subMenu, idx) in item.children" :key="idx">
        <router-link
          :to="subMenu.href"
          class="text-white flex justify-between items-center py-[16px] px-3 ml-6 rounded-tl-lg rounded-bl-lg"
        >
          <span class="flex items-center gap-2">
            <icon :icon="subMenu.icon" class="text-[15px]" />
            <span class="capitalize text-[16px] block">{{
              subMenu.label.split('-').join(' ')
            }}</span>
          </span>
        </router-link>
      </span>
    </div> -->
  </div>
</template>

<script>
export default {
  props: {
    item: Object
  },

  computed: {
    parentName() {
      return this.$route.meta.parent
    }
  }
}
</script>

<style></style>
