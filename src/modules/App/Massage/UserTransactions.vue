<template>
  <div>
    <!-- Staff -->
    <vTable
      :items="txns"
      :columns="columns"
      :hasFilter="false"
      title="Transactions"
      count="100"
      inputPlaceholder="Search Employee by name, Department, ID or any related keywords"
      @tableButtonClick="viewRecord"
    >
      <template #tableHeader>
        <div>
          <main-tab-header :tabs="tabs" @activateTab="activateTab" :activeTab="activeTab" />
        </div>
      </template>
    </vTable>

    <!-- Modal to viewBvn -->
    <vDialog
      v-model:visible="visible"
      modal
      :style="{ width: '40%' }"
      @hide="$emit('close')"
      @after-hide="$emit('afterHide')"
    >
      <!-- <template #header>
        <h6 class="font-semibold text-[18px]">Add New Supervisor</h6>
      </template> -->
      <template #closeicon>
        <div class="flex justify-end w-full">
          <span class="block w-fit">
            <icon icon="mdi:close-circle-outline" class="text-red-600" />
          </span>
        </div>
      </template>
      <div>
        <label class="text-sm font-medium" for="">BVN</label>
        <div class="input-field">
          <input name="search" v-model="bvn" class="py-[10px]" type="text" placeholder="inputPlaceholder" />
          <span class="password-iccon" role="button" v-clipboard:copy="bvn"
            v-clipboard:success="onCopy"
            v-clipboard:error="onError">
            <icon icon="icon-park-solid:copy" class="text-primary-300 text-lg" />
          </span>
        </div>
      </div>
    </vDialog>
  </div>
</template>

<script>
import txns from '@/demo/txns.json'
export default {
  data() {
    return {
      columns: [
        { header: 'Name', field: 'userData' },
        { header: 'Massage Type', field: 'massage_type' },
        { header: 'Fee', field: 'amount' },
        { header: 'Date', field: 'date' },
        { header: 'Status', field: 'txnStatus' },
        { header: '', field: 'viewBVN' }
      ],
      txns,
      tabs: [
        {
          label: 'in_house_transactions'
        },
        {
          label: 'home_service_transactions'
        }
      ],
      activeTab: 0,
      visible: false,
      bvn: '2536243524'
    }
  },

  methods: {
    activateTab(e) {
      this.activeTab = e
    },
    viewRecord() {
      this.visible = true
    },

    onCopy: function (value) {
     alert('copied')
      console.log(value)
    },

    onError: function () {
      alert('Failed to copy texts')
    },
  }
}
</script>

<style></style>
