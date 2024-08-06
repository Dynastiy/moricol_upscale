<template>
  <div>
    <div class="flex justify-between items-center mb-4">
      <div class="flex gap-2 items-center">
        <h4 class="font-semibold text-[22px] capitalize">{{ title }}</h4>
        <span class="text-primary-500 bg-primary-100 font-bold text-xl px-3 rounded-full"> {{ count }} </span>
      </div>
      <vDownload v-if="hasDownload" />
      <button class="btn-brand-md" v-if="hasButton" @click="$emit('btnFunc')">
        {{ btnText }}
      </button>
    </div>

    <div class="my-4" v-if="hasFilter">
      <vFilters :inputPlaceholder="inputPlaceholder"/>
    </div>

    <div class="my-4" v-if="$slots.tableHeader">
      <slot name="tableHeader"></slot>
    </div>

    <DataTable :value="items" tableStyle="min-width: 50rem" :loading="loading">
      <template #loading> Loading data. Please wait. </template>
      <TableColumn v-for="col of columns" :key="col.field" :field="col.field" :header="col.header">
        <template #body="{ data, field }">
          <template v-if="field === 'rating'">
            <Rating v-model="data.rating" :cancel="false" />
          </template>
          <template v-if="field === 'userData'">
            <div class="flex gap-2 items-center">
              <img src="@/assets/img/image.webp" class="w-[35px] h-[35px] rounded-full" alt="" />
              <span class="flex flex-col">
                <span class="font-semibold text-[14px]">{{ data.name }}</span>
                <span class="text-xs text-gray-600">{{ `@${data.username}` }}</span>
              </span>
            </div>
          </template>

          <template v-if="field === 'catData'">
            <div class="flex gap-2 items-center">
              <img :src="data.src" loading="lazy" class="w-[45px] h-[35px] rounded-lg" alt="" />
              <span class="flex flex-col">
                <span class="font-semibold text-[14px]">{{ data.name }}</span>
                <!-- <span class="text-xs text-gray-600">{{ `@${data.username}` }}</span> -->
              </span>
            </div>
          </template>

          <template v-if="field === 'tableStatus'">
            <span :class="data.status">
              {{ data.status }}
            </span>
          </template>
          <template v-if="field === 'txnStatus'">
            <span :class="data.status">
              {{ data.status }}
            </span>
          </template>

          <template v-if="field === 'services'">
            <span>
              {{ data.services.join(', ') }}
            </span>
          </template>
          <template v-if="field === 'feePerHour'">
            <span>
              {{ `${data.feePerHour}/Hour` }}
            </span>
          </template>
          <template v-if="field === 'amount'">
            <span>
              {{ $currencyFormat(data.feePerHour) }}
            </span>
          </template>
          <template v-else-if="field === 'timestamp'">
            <span>{{ formatDate(data.timestamp) }}</span>
          </template>
          <template v-else-if="field === 'actions'">
            <span
              role="button"
              @click="$emit('tableButtonClick', data)"
              class="text-amber-600 text-xs"
            >
              View Details
            </span>
          </template>
          <template v-else-if="field === 'viewBVN'">
            <span
              role="button"
              @click="$emit('tableButtonClick', data)"
              class="text-primary-500 text-xs"
            >
              View BVN
            </span>
          </template>
          <template v-else-if="field === 'action'">
            <span
              role="button"
              @click="$emit('tableButtonClick', data)"
            >
              <icon icon="f7:ellipsis-vertical" />
            </span>
          </template>
          <template v-else>
            {{ data[field] }}
          </template>
        </template>
      </TableColumn>
    </DataTable>
  </div>
</template>

<script>
import vFilters from './Filter.vue'
import vDownload from './Download.vue'
export default {
  components: { vDownload, vFilters },
  props: {
    items: {
      type: Array,
      default: () => []
    },
    columns: {
      type: Array,
      default: () => []
    },
    loading: {
      type: Boolean,
      default: false
    },
    hasFilter: {
      type: Boolean,
      default: true
    },
    title: String,
    count: String,
    inputPlaceholder: String,
    hasDownload: {
      type: Boolean,
      default: true
    },
    hasButton: {
      type: Boolean,
      default: false
    },
    btnText: String
  },

  methods: {
    formatDate(value) {
      let currentDate = new Date(value)
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
      return currentDate.toLocaleDateString('en-US', options)
    }
  }
}
</script>

<style>
.p-datatable .p-datatable-thead > tr > th {
  /* background: var(---gray-300); */
  border-bottom: 1px solid var(---gray-300);
  background: transparent;
  font-size: 14px;
}

.p-datatable .p-datatable-thead > tr {
}
.p-column-title {
  font-weight: 600;
}

/* Prime vue  */
.p-dropdown .p-dropdown-label.p-placeholder {
  font-size: 13px;
}

.p-datatable .p-datatable-tbody > tr > td {
  font-size: 13px;
  border-bottom: 1px solid var(---gray-300);
}
</style>
