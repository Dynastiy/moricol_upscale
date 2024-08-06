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
        { header: 'Gender', field: 'gender' },
        { header: 'Time', field: 'time' },
        { header: 'Fee', field: 'amount' },
        { header: 'Date', field: 'date' },
        { header: 'Status', field: 'txnStatus' }
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
