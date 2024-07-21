<template>
  <div>
    <div class="flex justify-between items-center">
      <div class="input-field w-6/12">
        <span class="password-iccon">
          <icon icon="ri:search-line" class="form-icon" />
        </span>
        <input name="search" class="ml-3" type="text"  :placeholder="inputPlaceholder" />
      </div>
      <span class="border rounded-md items-center gap-[4px] p-2 text-sm flex border-gray-200">
        <icon icon="fluent:filter-12-regular" />
        Filter
      </span>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        inputPlaceholder: String
    }
}
</script>

<style></style>
