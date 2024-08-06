<template>
  <div>
    <!-- Staff -->
    <vTable
      :items="massageStaff"
      :columns="columns"
      :title="title"
      count="36"
      inputPlaceholder="Search Employee by name, Department, ID or any related keywords"
      @tableButtonClick="viewRecord"
    />
  </div>
</template>

<script>
import massageStaff from '@/demo/massage.json'
export default {
  data() {
    return {
      columns: [
        { header: 'Name', field: 'userData' },
        { header: 'Services', field: 'service' },
        { header: 'Location', field: 'location' },
        { header: 'Date', field: 'date' },
        { header: 'Status', field: 'tableStatus' },
        { header: '', field: 'action' }
      ],
      massageStaff
    }
  },

  methods: {
    viewRecord() {
      this.$router.push(`/loan/loan-request/ID?status=${this.$route.query.status}`)
    }
  },

  computed: {
    title() {
      return `${this.$route.query.status} Loan Requests`
    }
  }
}
</script>

<style></style>
