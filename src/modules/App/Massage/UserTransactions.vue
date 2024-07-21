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
    >
      <template #tableHeader>
        <div>
          <main-tab-header :tabs="tabs" @activateTab="activateTab" :activeTab="activeTab"/>
        </div>
      </template>
    </vTable>
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
      activeTab: 0
    }
  },

  methods: {
    activateTab(e) {
      this.activeTab = e
    }
  }
}
</script>

<style></style>
