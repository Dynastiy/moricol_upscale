<template>
  <div class="w-9/12 mx-auto bg-gray-50 py-8 rounded-lg">
    <h4 class="text-center font-semibold text-xl mb-4">{{ isEdit === 'edit-loan-category' ? 'Update Loan Category' : 'Add New Loan Category'}}</h4>
    <form class="flex flex-col gap-4">
      <fieldset class="flex flex-col gap-4 px-12">
        <div>
          <label for="">Name of Loan</label>
          <input type="text" class="input" />
        </div>
        <vDrop />
        <div>
          <label for="">Amount for this category (RANGE FROM)</label>
          <input type="text" class="input" />
        </div>
        <div>
          <label for="">Amount for this category (RANGE TO)</label>
          <input type="text" class="input" />
        </div>
      </fieldset>

      <hr class="my-3" />

      <fieldset class="flex flex-col gap-4 px-12">
        <div v-for="(item, idx) in loan_duration" :key="idx">
          <div class="mb-4">
            <label for="name">How many days duration to pay back?</label>
            <input
              type="text"
              name="name"
              id="name"
              class="input"
              v-model="item.number_of_days"
              placeholder="XXXXXXXX"
            />
          </div>

          <div class="mb-4">
            <label for="name">Interest for each day</label>
            <div class="input-field px-0 py-0">
              <span class="inputgroup-addon bg-primary-500 p-2 text-white text-xl"> % </span>
              <input
                id="input"
                class="input ml-2 py-0"
                v-model="item.interest_per_day"
                placeholder="Interest for each day"
              />
            </div>
          </div>

          <div class="mb-4">
            <label for="name">Interest for Late Payment per day</label>
            <div class="input-field px-0 py-0">
              <span class="inputgroup-addon bg-primary-500 p-2 text-white text-xl"> % </span>
              <input
                id="input"
                class="input ml-2 py-0"
                v-model="item.late_payment_interest"
                placeholder="Interest for Late Payment per day"
              />
            </div>
          </div>
          <div v-if="loan_duration.length > 1">
            <span
              role="button"
              @click="removeLoanDuration(idx)"
              class="text-[13px] text-red-500 flex justify-end font-semibold uppercase"
              >remove</span
            >
          </div>
        </div>

        <div>
          <span
            role="button"
            @click="addLoanDuration"
            class="text-[13px] text-primary-500 font-semibold uppercase"
            >add another loan day duration</span
          >
        </div>
      </fieldset>

      <hr class="my-3" />

      <fieldset class="flex flex-col gap-4 px-12">
        <div class="mb-3">
          <label for="name">How many installments?</label>
          <input
            type="text"
            name="name"
            id="name"
            class="input"
            v-model="number_of_installments"
            placeholder="XXXXXXXX"
          />
        </div>
        <div v-for="(item, idx) in installments" :key="idx">
          <div>
            <span class="font-semibold text-sm">
              {{ $getOrdinalSuffix(idx + 1) + ' Installment' }}
            </span>
          </div>

          <div class="mb-3">
            <label for="name">How many days for first installment(FROM)</label>
            <div class="input-field px-0 py-0">
              <span class="inputgroup-addon text-primary-500 py-3 px-1 text-xl">
                <icon icon="mdi:calendar-month-outline" />
              </span>
              <input
                id="input"
                class="input ml-2 py-0"
                v-model="item.interest_per_day"
                placeholder="Interest for each day"
              />
            </div>
          </div>

          <div class="mb-3">
            <label for="name">Interest for Late Payment per day</label>
            <div class="input-field px-0 py-0">
              <span class="inputgroup-addon text-primary-500 py-3 px-1 text-xl">
                <icon icon="mdi:calendar-month-outline" />
              </span>
              <input
                id="input"
                class="input ml-2 py-0"
                v-model="item.interest_per_day"
                placeholder="Interest for each day"
              />
            </div>
          </div>
        </div>
      </fieldset>

      <div class="px-12">
        <div class="flex flex-col gap-4" v-if="isEdit === 'edit-loan-category'">
          <button
            class="w-full btn-brand flex items-center justify-center gap-2"
            :disabled="isLoading"
            :class="[isLoading ? 'bg-gray-400 text-gray-700' : 'btn-brand']"
          >
            <span class="flex justify-center" v-if="isLoading">
              <icon icon="line-md:loading-alt-loop" class="text-[20px]" />
            </span>
            <span class="uppercase"> update category </span>
          </button>
          <button
            class="w-full btn-brand bg-red-600 flex items-center justify-center gap-2"
            :disabled="isLoading"
            :class="[isLoading ? 'bg-gray-400 text-gray-700' : 'bg-red-600']"
          >
            <span class="flex justify-center" v-if="isLoading">
              <icon icon="line-md:loading-alt-loop" class="text-[20px]" />
            </span>
            <span class="uppercase"> delete category </span>
          </button>
        </div>
        <button
          v-else
          class="w-full btn-brand flex items-center justify-center gap-2"
          :disabled="isLoading"
          :class="[isLoading ? 'bg-gray-400 text-gray-700' : 'btn-brand']"
        >
          <span class="flex justify-center" v-if="isLoading">
            <icon icon="line-md:loading-alt-loop" class="text-[20px]" />
          </span>
          <span> APPLY </span>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rating: 5,
      isLoading: false,
      loan_duration: [
        {
          number_of_days: null,
          interest_per_day: null,
          late_payment_interest: null
        }
      ],
      number_of_installments: 1
    }
  },

  methods: {
    onSubmit(values) {
      console.log(values)
    },

    addLoanDuration() {
      let payload = {
        number_of_days: null,
        interest_per_day: null,
        late_payment_interest: null
      }
      this.loan_duration.push(payload)
    },

    removeLoanDuration(idx) {
      this.loan_duration.splice(idx, 1)
    }
  },

  computed: {
    isEdit() {
      return this.$route.name
    }
  },

  watch: {
    number_of_installments: {
      handler(val) {
        console.log(val)
        // Example: Repeat the element 'World' 3 times
        const elementToRepeat = {
          number_of_days_from: null,
          number_of_days_to: null
        }
        const numberOfRepeats = Number(val)

        const newArray = Array(numberOfRepeats).fill(elementToRepeat)
        console.log(newArray, 'ommmo')
        this.installments = newArray
        // console.log(newArray);
        // Output: ['World', 'World', 'World']
      },
      immediate: true
    }
  }
}
</script>

<style></style>
