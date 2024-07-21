<template>
  <div>
    <span class="border-b border-b-gray-300 w-full flex gap-4">
      <span
        v-for="(item, idx) in tabs"
        :key="idx"
        role="button"
        class="capitalize px-6 text-sm"
        :class="{ 'border-b text-primary-500 border-b-2 border-b-primary-500 font-semibold': currentTab === idx }"
        @click="activateTab(idx)"
      >
        {{ item.label.split('_').join(' ') }}
      </span>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    tabs: Array,
    activeTab:Number
  },

  data(){
    return {
      currentTab: 0
    }
  },

  methods: {
    activateTab(e) {
      this.$emit('activateTab', e)
    }
  },

  watch: {
    activeTab: {
      handler(val) {
        this.currentTab = val
      },
      immediate: true
    }
  }
}
</script>

<style></style>
