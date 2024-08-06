<template>
  <div>
    <div class="flex flex-col gap-4">
      <div>
        <h4 class="mb-0 text-gray-900 font-bold text-xl">Overview</h4>
        <h6 class="mb-0 text-gray-400 text-[12px]">
          {{ $formatDate(date) }}
        </h6>
      </div>

      <div class="bg-tertiary-50 p-4 flex flex-col rounded-lg mt-4 gap-4">
        <div class="bg-white rounded-lg flex">
          <div
            v-for="(value, name) of cardsData"
            :key="name"
            class="w-full px-8 py-5 card-container"
          >
            <div class="flex flex-col gap-2">
              <div class="flex justify-between items-center">
                <span
                  class="block rounded-lg p-2"
                  :class="{
                    'bg-primary-50 text-primary-500': name === 'total_loan_request',
                    'bg-green-50 text-primary-500': name === 'pending_loan',
                    'bg-secondary-50 text-secondary-500': name === 'approved_loan',
                    'bg-gray-50 text-tertiary-500': name === 'declined_loan'
                  }"
                >
                  <icon :icon="getIcon(name)" class="h-[18px] w-[18px]" />
                </span>
                <span>
                  <icon icon="tabler:arrows-diagonal-minimize-2" class="text-gray-400" />
                </span>
              </div>
              <span
                class="capitalize text-sm block font-semibold text-gray-500 text-[11.7px]"
                role="button"
                @click="$router.push(`/loan/loan-requests?status=${getRoute(name)}`)"
                >{{ name.split('_').join(' ') }}</span
              >
              <h5 class="font-bold text-gray-900 text-[15px]">{{ value }}</h5>
            </div>
          </div>
        </div>

        <div class="bg-white p-4 rounded-lg">
          <div id="chart">
            <h4 class="font-bold text-gray-900 text-xl">Statistics</h4>
            <BarChart type="bar" :data="chartData" :options="chartOptions" class="h-[20rem]" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { pick } from 'lodash'
export default {
  data() {
    return {
      chartData: null,
      chartOptions: null,
      displayKey: ['total_loan_request', 'pending_loan', 'approved_loan', 'declined_loan'],
      icons: {
        'lucide:radio': 'total_loan_request',
        'eva:message-circle-outline': 'pending_loan',
        'tabler:edit': 'approved_loan',
        'tabler:layout-sidebar-right': 'declined_loan'
      },
      routes: {
        all: 'total_loan_request',
        pending: 'pending_loan',
        approved: 'approved_loan',
        declined: 'declined_loan'
      }
    }
  },

  methods: {
    getIcon(value) {
      let res = Object.keys(this.icons).find((key) => this.icons[key] === value)
      return res
    },

    getRoute(value) {
      let res = Object.keys(this.routes).find((key) => this.routes[key] === value)
      return res
    },

    setChartData() {
      const documentStyle = getComputedStyle(document.documentElement)

      return {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
          {
            label: 'Completed Loan',
            borderRadius: 5,
            backgroundColor: documentStyle.getPropertyValue('---primary-500'),
            borderColor: documentStyle.getPropertyValue('---primary-500'),
            data: [65, 59, 80, 81, 56, 55, 40, 34, 12, 56, 45, 23]
          },
          {
            label: 'Pending Loan',
            borderRadius: 5,
            backgroundColor: documentStyle.getPropertyValue('---tertiary-400'),
            borderColor: documentStyle.getPropertyValue('---tertiary-400'),
            data: [28, 48, 40, 59, 80, 81, 56, 55, 19, 86, 27, 90]
          },
          {
            label: 'Declined Loan',
            borderRadius: 5,
            backgroundColor: documentStyle.getPropertyValue('---tertiary-100'),
            borderColor: documentStyle.getPropertyValue('---tertiary-100'),
            data: [28, 48, 40, 19, 86, 27, 90, 59, 80, 81, 56, 55]
          }
        ]
      }
    },

    setChartOptions() {
      const documentStyle = getComputedStyle(document.documentElement)
      const textColor = documentStyle.getPropertyValue('--text-color')
      const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary')
      const surfaceBorder = documentStyle.getPropertyValue('--surface-border')

      return {
        maintainAspectRatio: false,
        aspectRatio: 0.8,
        plugins: {
          legend: {
            position: "bottom",
            labels: {
              color: textColor
            }
          }
        },
        scales: {
          x: {
            ticks: {
              color: textColorSecondary,
              font: {
                weight: 500,
                size: 10
              }
            },
            grid: {
              display: false,
              drawBorder: false
            }
          },
          y: {
            ticks: {
              color: textColorSecondary
            },
            grid: {
              color: surfaceBorder,
              drawBorder: false
            }
          }
        }
      }
    }
  },
  computed: {
    date() {
      let date = new Date()
      return date
    },

    cardsData() {
      let data = {
        total_loan_request: 30,
        pending_loan: 10,
        approved_loan: 5,
        declined_loan: 6
      }
      return pick(data, this.displayKey)
    }
  },

  mounted() {
    this.chartData = this.setChartData()
    this.chartOptions = this.setChartOptions()
  }
}
</script>

<style scoped>
.card-container {
  position: relative;
}
.card-container::after {
  content: '';
  background: var(--gray-300);
  height: 45px;
  width: 1px;
  position: absolute;
  right: 0;
  top: 35%;
  bottom: 50%;
}
</style>
