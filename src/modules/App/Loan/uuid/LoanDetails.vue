<template>
  <div class="w-9/12 mx-auto">
    <div class="shadow bg-gray-50 py-6 px-12 rounded-lg mb-4">
      <h4
      v-if="isEdit !== 'all'"
        class="text-[14px] text-center uppercase font-bold mb-4"
        :class="{
          'text-gray-600': isEdit === 'all',
          'text-primary-500': isEdit === 'pending',
          'text-green-500': isEdit === 'approved',
          'text-red-500': isEdit === 'declined'
        }"
      >
        loan status: {{ isEdit }}
      </h4>
      <img src="@/assets/img/image.png" class="w-20 h-20 mx-auto" alt="" />
      <div class="flex flex-col gap-5 mt-4">
        <span class="flex justify-between" v-for="(value, name) in details" :key="name">
          <span class="capitalize text-sm font-semibold">{{ $splitText(name) }}</span>
          <span class="text-sm">{{ value }}</span>
        </span>
      </div>
    </div>

    <div class="shadow bg-gray-50 py-6 px-12 rounded-lg mb-4">
      <h4 class="text-[12px] text-gray-600 text-center uppercase">loan information</h4>
      <div class="flex flex-col gap-5 mt-4">
        <span class="flex justify-between" v-for="(value, name) in loans" :key="name">
          <span class="capitalize text-sm font-semibold">{{ $splitText(name) }}</span>
          <span class="text-sm">{{ value }}</span>
        </span>
      </div>
    </div>

    <div class="shadow bg-gray-50 py-6 px-12 rounded-lg mb-4">
      <h4 class="text-[12px] text-gray-600 text-center uppercase">loan information</h4>
      <div class="flex flex-col gap-5 mt-4">
        <span class="flex justify-between" v-for="(value, name) in info" :key="name">
          <span class="capitalize text-sm font-semibold">{{ $splitText(name) }}</span>
          <span class="text-sm">{{ value }}</span>
        </span>
      </div>

      <div class="mt-3">
        <span class="text-sm mb-2 block">Utility bills, Water, PHCN, or rent agreement</span>
        <span
          class="bg-primary-50 block p-5 border border-dashed border-primary-500 rounded-lg flex flex-col items-center justify-center"
        >
          <icon icon="ph:upload-simple-fill" class="text-[20px] text-primary-500" />
          <span class="text-[14px] text-primary-500 font-medium mb-0"
            >Download Utility bills, Water bill, PHCN, or rent agreement</span
          >
        </span>
      </div>

      <div class="mt-3">
        <div class="flex justify-between items-center mb-2">
          <span class="text-sm block">Monthly Income</span>
          <span class="text-sm">₦50,000</span>
        </div>
        <span
          class="bg-primary-50 block p-5 border border-dashed border-primary-500 rounded-lg flex flex-col items-center justify-center"
        >
          <icon icon="ph:upload-simple-fill" class="text-[20px] text-primary-500" />
          <span class="text-[14px] text-primary-500 font-medium mb-0">Download Monthly Income</span>
        </span>
      </div>

      <div class="mt-3">
        <div class="flex justify-between items-center mb-2">
          <span class="text-sm block">Collateral</span>
          <span class="text-sm">₦50,000</span>
        </div>
        <span
          class="bg-primary-50 block p-5 border border-dashed border-primary-500 rounded-lg flex flex-col items-center justify-center"
        >
          <icon icon="ph:upload-simple-fill" class="text-[20px] text-primary-500" />
          <span class="text-[14px] text-primary-500 font-medium mb-0">Download Collateral</span>
        </span>
      </div>

      <h4 class="text-[13px] mt-3 text-primary-500 capitalize">guarantor 1</h4>
      <div class="flex flex-col gap-5 mt-4">
        <span class="flex justify-between" v-for="(value, name) in guarantor" :key="name">
          <span class="capitalize text-sm font-semibold">{{ $splitText(name) }}</span>
          <span class="text-sm">{{ value }}</span>
        </span>
      </div>

      <div class="flex flex-col gap-4 mt-4" v-if="isEdit === 'pending'">
        <button
          class="w-full btn-brand flex text-[13px] items-center justify-center gap-2"
          :disabled="isLoading"
          :class="[isLoading ? 'bg-gray-400 text-gray-700' : 'btn-brand']"
        >
          <span class="flex justify-center" v-if="isLoading">
            <icon icon="line-md:loading-alt-loop" class="text-[20px]" />
          </span>
          <span class="uppercase"> approve this loan </span>
        </button>
        <button
          class="w-full btn-brand bg-red-600 text-[13px] flex items-center justify-center gap-2"
          :disabled="isLoading"
          :class="[isLoading ? 'bg-gray-400 text-gray-700' : 'bg-red-600']"
        >
          <span class="flex justify-center" v-if="isLoading">
            <icon icon="line-md:loading-alt-loop" class="text-[20px]" />
          </span>
          <span class="uppercase"> disapprove this loan </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rating: 5,
      isLoading: false
    }
  },

  computed: {
    details() {
      let req = {
        first_name: 'mike',
        last_name: 'paul',
        email: 'mikepaul@gmail.com',
        phone_number: '08165748911',
        date_of_birth: '30/04/1992',
        gender: 'male',
        religion: 'Christian',
        occupation: 'Doctor',
        marital_status: 'married',
        country: 'Nigeria',
        state: 'Abuja'
      }
      return req
    },

    loans() {
      let req = {
        loan_amount: '₦50,000',
        installments: '3',
        interest_rate: '0.6%',
        interest_amout: '₦10,000'
      }
      return req
    },

    info() {
      let req = {
        work_address: 'Lorem ipsum dolor sit amet consectetur. Turpis.',
        work_status: '3',
        'do_you_any_outstanding_loan?': 'No',
        detailed_residential_address: 'Lorem ipsum dolor sit amet consectetur'
      }
      return req
    },

    guarantor() {
      let req = {
        name_of_guarantor: 'Lorem ipsum dolor sit amet consectetur. Turpis.',
        relationship: 'Lorem ipsum dolor sit amet consectetur. Turpis.',
        detailed_residential_address: 'Lorem ipsum dolor sit amet consectetur. Turpis.',
        work_status: 'Lorem ipsum dolor sit amet consectetur',
        phone_number: '09165748911'
      }
      return req
    },

    isEdit() {
      return this.$route.query.status
    }
  }
}
</script>

<style></style>
