<template>
  <div>
    <!-- Staff -->
    <vTable :items="massageStaff" :columns="columns" title="Massage Staff" count="36" inputPlaceholder="Search Employee by name, Department, ID or any related keywords" />
  </div>
</template>

<script>
import massageStaff from '@/demo/massage.json'
export default {
  data() {
    return {
      columns: [
        { header: 'Name', field: 'userData' },
        { header: 'Services', field: 'services' },
        { header: 'Location', field: 'location' },
        { header: 'Fee per Hr', field: 'feePerHour' },
        { header: 'Status', field: 'tableStatus' },
        { header: '', field: 'actions' }
      ],
      massageStaff
    }
  }
}
</script>

<style></style>
