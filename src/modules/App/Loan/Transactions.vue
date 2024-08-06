<template>
    <div>
      <!-- Staff -->
      <vTable
        :items="txns"
        :columns="columns"
        :hasFilter="false"
        title="Transactions"
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
          { header: 'Name of Professional', field: 'userData' },
          { header: 'Gender', field: 'gender' },
          { header: 'Borrowed', field: 'amount' },
          { header: 'Paid Back', field: 'amount' },
          { header: 'Last Payment', field: 'date' },
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
  