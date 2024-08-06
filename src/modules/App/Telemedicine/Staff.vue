<template>
  <div>
    <!-- Staff -->
    <vTable
      :items="massageStaff"
      :columns="columns"
      title="Telemedicine Staff"
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
        { header: 'Fee per Session', field: 'amount' },
        { header: 'Status', field: 'tableStatus' },
        { header: '', field: 'action' }
      ],
      massageStaff
    }
  },

  methods: {
    viewRecord(){
      this.$router.push('/telemedicine/telemedicine-staff/ID')
    }
  }
}
</script>

<style></style>
