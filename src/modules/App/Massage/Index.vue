<template>
  <div>
    <div class="">
      <h4 class="font-semibold text-[22px]">Overview</h4>
      <span class="text-gray-500 text-[12px] block"> Detailed information about your store </span>
    </div>

    <div class="bg-tertiary-50 p-4 grid grid-cols-3 rounded-lg mt-4 gap-4">
      <div class="flex gap-4 col-span-3">
        <div class="bg-white p-4 rounded-lg flex gap-3">
          <span
            class="bg-primary-50 block p-3 w-fit text-2xl flex items-center justify-center rounded-lg text-primary-500"
          >
            <icon icon="mdi:file-user" />
          </span>
          <div>
            <span class="text-[14px] text-gray-400 font-medium">Massage Staff</span>
            <span class="flex justify-between items-center gap-3">
              <h4 class="font-bold">34</h4>
              <span class="text-xs text-green-400"> +12% </span>
            </span>
          </div>
        </div>

        <div class="bg-white p-4 rounded-lg flex gap-3">
          <span
            class="bg-tertiary-50 block p-3 w-fit text-2xl flex items-center justify-center rounded-lg text-primary-500"
          >
            <icon icon="cil:dollar" />
          </span>
          <div>
            <span class="text-[14px] text-gray-400 font-medium">Total Revenue</span>
            <span class="flex justify-between items-center gap-3">
              <h4 class="font-bold">₦10,566.01</h4>
              <span class="text-xs text-green-400"> +35% </span>
            </span>
          </div>
        </div>
      </div>

      <div class="p-4 bg-white rounded-lg col-span-2">
        <h4 class="text-[12px] text-gray-400">Overall Revenue</h4>
        <span class="flex items-center gap-2">
          <h4 class="font-bold">₦10,566.01</h4>
          <span class="text-xs text-green-400"> +20% </span>
        </span>
        <Chart type="line" :data="chartData2" :options="chartOptions2" class="h-[15rem]" />
      </div>
      <div class="p-4 bg-white rounded-lg">
        <h4 class="text-[12px] text-gray-400">User Activity</h4>
        <span class="flex items-center gap-2">
          <h4 class="font-bold">10,320</h4>
          <span class="text-xs text-red-600"> -20% </span>
        </span>
        <div class="mt-4">
          <Chart type="bar" :data="chartData" :options="chartOptions" />
        </div>
      </div>
      <div class="p-4 bg-white rounded-lg col-span-2">
        <h4 class="font-semibold text-[15px]">Popular Massage</h4>
        <div>
          <vTable :items="items" :columns="columns" :hasDownload="false" :hasFilter="false" />
        </div>
      </div>
      <div class="p-4 bg-white rounded-lg">
        <h4 class="font-semibold text-[15px] mb-3">Transaction History</h4>
        <div class="flex flex-col gap-4">
          <txn-list v-for="item in 4" :key="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import txnList from '@/components/assets/txnList.vue'
import Chart from 'primevue/chart'
export default {
  components: { txnList, Chart },
  data() {
    return {
      columns: [
        { header: 'Name', field: 'name' },
        { header: 'Clients', field: 'clients' },
        { header: 'Fee', field: 'fee' },
        { header: 'Status', field: 'tableStatus' }
      ],
      items: [
        {
          name: 'One Time',
          fee: '₦10,566.01',
          clients: '20 clients',
          status: 'active'
        },
        {
          name: 'One Time',
          fee: '₦10,566.01',
          clients: '20 clients',
          status: 'inactive'
        },
        {
          name: 'One Time',
          fee: '₦10,566.01',
          clients: '20 clients',
          status: 'inactive'
        },
        {
          name: 'One Time',
          fee: '₦10,566.01',
          clients: '20 clients',
          status: 'active'
        }
      ],
      chartData: null,
      chartOptions: null,
      chartData2: null,
      chartOptions2: null
    }
  },

  mounted() {
    this.chartData = this.setChartData()
    this.chartOptions = this.setChartOptions()
    this.chartData2 = this.setChartData2()
    this.chartOptions2 = this.setChartOptions2()
  },

  methods: {
    setChartData() {
      return {
        labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        datasets: [
          {
            borderRadius: 5,
            data: [140, 125, 220, 195, 120, 45, 89],
            backgroundColor: [
              '#F3D7A1',
              '#F3D7A1',
              '#F3D7A1',
              '#E29A13',
              '#F3D7A1',
              '#F3D7A1',
              '#F3D7A1'
            ]
            // borderColor: [
            //   '#F3D7A1',
            //   'rgb(6, 182, 212)',
            //   'rgb(107, 114, 128)',
            //   'rgb(139, 92, 246)'
            // ]
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
              color: surfaceBorder,
              display: false
              // display: false
            }
          },
          y: {
            beginAtZero: true,
            ticks: {
              color: textColorSecondary
              // display: false
            },
            grid: {
              color: surfaceBorder,
              display: false
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
  }
}
</script>

<style></style>
