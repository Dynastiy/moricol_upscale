<template>
  <div>
    <div class="flex flex-col gap-4">
      <div>
        <h4 class="mb-0 text-gray-900 font-bold text-xl">Overview</h4>
        <h6 class="mb-0 text-gray-400 text-[12px]">
          {{ $formatDate(date) }}
        </h6>
      </div>

      <div class="bg-[#F8FAFC] p-4 flex flex-col rounded-lg mt-4 gap-4">
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
                    'bg-primary-50 text-primary-500': name === 'all_healthcare_practioners',
                    'bg-green-50 text-primary-500': name === 'completed_sessions',
                    'bg-secondary-50 text-secondary-500': name === 'ongoing_sessions',
                    'bg-gray-50 text-tertiary-500': name === 'revenue'
                  }"
                >
                  <icon :icon="getIcon(name)" class="h-[18px] w-[18px]" />
                </span>
                <span>
                  <icon icon="tabler:arrows-diagonal-minimize-2" class="text-gray-400" />
                </span>
              </div>
              <span class="capitalize text-sm block font-semibold text-gray-500 text-[11.7px]">{{
                name.split('_').join(' ')
              }}</span>

              <!-- @click="$router.push(`/loan/loan-requests?status=${getRoute(name)}`)" -->
              <span class="flex rounded-xl items-center gap-[4px]">
                <h5 class="font-bold text-gray-900 text-[15px]">{{ value }}</h5>
                <span
                  class="bg-green-100 text-green-600 block text-[11px] px-[6px] rounded-xl py-[3px]"
                  >59%</span
                >
              </span>
            </div>
          </div>
        </div>

        <div class="bg-white p-4 rounded-lg">
          <div id="chart">
            <h4 class="font-bold text-gray-900 text-xl">Statistics</h4>
            <BarChart type="bar" :data="chartData" :options="chartOptions" class="h-[15rem]" />
          </div>
        </div>

        <div class="flex gap-4">
          <div class="p-4 bg-white rounded-lg w-full">
            <h4 class="text-[14px] font-semibold mb-4 text-gray-900">Revenue</h4>

            <BarChart type="line" :data="chartData2" :options="chartOptions2" class="h-[15rem]" />
          </div>
          <div class="p-4 bg-white rounded-lg w-full">
            <h4 class="text-[14px] font-semibold mb-4 text-gray-900">Popular Category</h4>

            <div class="flex flex-col gap-2">
              <div class="flex justify-between items-center">
                <span class="font-semibold text-sm">Qualified Doctor</span>
                <span>
                  <icon icon="mynaui:chart-line" class="text-4xl text-red-500" />
                </span>
                <span class="flex items-center text-[13px] gap-[4px]">
                  <icon icon="teenyicons:user-outline" />
                  38 patients

                  <span class="text-red-500 block text-[10px]">-38%</span>
                </span>
              </div>
              <hr class="bg-gray-200" />
              <div class="flex justify-between items-center">
                <span class="font-semibold text-sm">Coaching</span>
                <span>
                  <icon icon="mynaui:chart-line" class="text-4xl text-red-500" />
                </span>
                <span class="flex items-center text-[13px] gap-[4px]">
                  <icon icon="teenyicons:user-outline" />
                  38 patients

                  <span class="text-red-500 block text-[10px]">-38%</span>
                </span>
              </div>
              <hr class="bg-gray-200" />
              <div class="flex justify-between items-center">
                <span class="font-semibold text-sm">Counselling</span>
                <span>
                  <icon icon="mynaui:chart-line" class="text-4xl text-red-500" />
                </span>
                <span class="flex items-center text-[13px] gap-[4px]">
                  <icon icon="teenyicons:user-outline" />
                  38 patients

                  <span class="text-red-500 block text-[10px]">-38%</span>
                </span>
              </div>
            </div>
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
      displayKey: [
        'all_healthcare_practioners',
        'completed_sessions',
        'ongoing_sessions',
        'revenue'
      ],
      icons: {
        'lucide:radio': 'all_healthcare_practioners',
        'eva:message-circle-outline': 'completed_sessions',
        'tabler:edit': 'ongoing_sessions',
        'tabler:layout-sidebar-right': 'revenue'
      },
      routes: {
        all: 'all_healthcare_practioners',
        pending: 'completed_sessions',
        approved: 'ongoing_sessions',
        declined: 'revenue'
      },
      chartData2: null,
      chartOptions2: null
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
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December'
        ],
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
            position: 'bottom',
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
    },

    setChartData2() {
      const documentStyle = getComputedStyle(document.documentElement)

      return {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Third Dataset',
            data: [12, 51, 62, 33, 21, 62, 45],
            fill: true,
            borderColor: documentStyle.getPropertyValue('---primary-500'),
            tension: 0.4,
            backgroundColor: 'rgba(37, 99, 235, 0.12)'
            // backgroundColor: linear-gradient(180deg, rgba(37, 99, 235, 0) 0%, rgba(37, 99, 235, 0.12) 146.18%)
          }
        ]
      }
    },

    setChartOptions2() {
      const documentStyle = getComputedStyle(document.documentElement)
      const textColor = documentStyle.getPropertyValue('--text-color')
      const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary')
      const surfaceBorder = documentStyle.getPropertyValue('--surface-border')

      return {
        maintainAspectRatio: false,
        aspectRatio: 0.6,
        plugins: {
          legend: {
            display: false,
            labels: {
              color: textColor
            }
          }
        },
        scales: {
          x: {
            ticks: {
              color: textColorSecondary
            },
            grid: {
              color: surfaceBorder
            }
          },
          y: {
            ticks: {
              color: textColorSecondary
            },
            grid: {
              color: surfaceBorder
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
        // total_loan_request: 30,
        // pending_loan: 10,
        // approved_loan: 5,
        // declined_loan: 6
        all_healthcare_practioners: '40',
        completed_sessions: '245',
        ongoing_sessions: '35',
        revenue: '40.55K'
      }
      return pick(data, this.displayKey)
    }
  },

  mounted() {
    this.chartData = this.setChartData()
    this.chartOptions = this.setChartOptions()
    this.chartData2 = this.setChartData2()
    this.chartOptions2 = this.setChartOptions2()
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
