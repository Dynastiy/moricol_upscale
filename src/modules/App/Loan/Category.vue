<template>
    <div>
      <!-- Staff -->
      <vTable
        :items="cat"
        :columns="columns"
        :hasFilter="false"
        title="Categories"
        inputPlaceholder="Search Employee by name, Department, ID or any related keywords"
        @tableButtonClick="viewRecord"
        :hasButton="true"
        :hasDownload="false"
        btnText="ADD NEW CATEGORY"
        @btnFunc="goToLink"
      >
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
            <input
              name="search"
              v-model="bvn"
              class="py-[10px]"
              type="text"
              placeholder="inputPlaceholder"
            />
            <span
              class="password-iccon"
              role="button"
              v-clipboard:copy="bvn"
              v-clipboard:success="onCopy"
              v-clipboard:error="onError"
            >
              <icon icon="icon-park-solid:copy" class="text-primary-300 text-lg" />
            </span>
          </div>
        </div>
      </vDialog>
    </div>
  </template>
  
  <script>
  // import txns from '@/demo/txns.json'
  export default {
    data() {
      return {
        columns: [
          { header: 'Name', field: 'catData' },
          { header: 'Clients', field: 'clients' },
          { header: 'Status', field: 'tableStatus' },
          { header: '', field: 'action' }
        ],
        cat: [
          {
            name: 'Dental',
            src: 'https://www.health.com/thmb/K_Vtfnh3Yu-Ceya3aETxfH72k9Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1175433234-034014dc5b9c45edaeaf04c7b80ceafc.jpg' ,
            clients: '17 Persons',
            status: 'active'
          },
          {
            name: 'Vision',
            src: 'https://d2jx2rerrg6sh3.cloudfront.net/images/Article_Images/ImageForArticle_22825_16576273997625986.jpg' ,
            clients: '10 Persons',
            status: 'inactive'
          },
          {
            name: 'Cosmetic',
            src: 'https://www.pennmedicine.org/-/media/images/miscellaneous/face%20and%20body/woman_receiving_massage.ashx' ,
            clients: '7 Persons',
            status: 'inactive'
          },
          {
            name: 'General Health',
            src: 'https://d2jx2rerrg6sh3.cloudfront.net/images/Article_Images/ImageForArticle_22825_16576273997625986.jpg' ,
            clients: '24 Persons',
            status: 'active'
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
        this.$router.push('/loan/loan-category/edit')
      },
  
      onCopy: function (value) {
        alert('copied')
        console.log(value)
      },
  
      onError: function () {
        alert('Failed to copy texts')
      },
  
      goToLink() {
        this.$router.push('/loan/loan-category/create')
      }
    }
  }
  </script>
  
  <style></style>
  