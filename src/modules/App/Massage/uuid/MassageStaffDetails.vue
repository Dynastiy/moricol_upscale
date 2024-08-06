<template>
  <div class="w-9/12 mx-auto">
    <div class="shadow bg-gray-100 py-6 px-12 rounded-lg mb-4">
      <img src="@/assets/img/image.png" class="w-20 h-20 mx-auto" alt="" />
      <div class="flex flex-col gap-5 mt-4">
        <span class="flex justify-between" v-for="(value, name) in details" :key="name">
          <span class="capitalize text-sm font-semibold">{{ $splitText(name) }}</span>
          <span class="text-sm">{{ value }}</span>
        </span>
      </div>
    </div>

    <div class="shadow bg-gray-100 py-6 px-12 rounded-lg">
      <h4 class="text-center font-semibold text-xl mb-4">Reviews</h4>
      <div class="flex flex-col gap-6">
        <div class="flex gap-4" v-for="item in 6" :key="item">
          <div class="flex gap-2 items-center w-full">
            <img
              src="@/assets/img/image.webp"
              class="w-12 rounded-lg h-12 object-cover object-center"
              alt=""
            />
            <span class="">
              <h6 class="block font-semibold whitespace-nowrap">Bolji Samuel</h6>
              <Rating v-model="rating" :cancel="false" />
            </span>
          </div>
          <div class="flex items-end gap-1">
            <p class="text-[13px]">
              Lorem ipsum dolor sit amet consectetur. Integer vulputate blandit arcu amet. Enim vel
              orci non habitant euismod aliquam eget. Gravida laoreet pellentesque arcu velit. Massa
              quis arcu arcu neque pellentesque sit morbi consequat ut. Duis pretium.
            </p>
            <span class="text-[12px] whitespace-nowrap text-gray-600"> 2023-05-18 </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rating: 5
    }
  },
  computed: {
    details() {
      let req = {
        first_name: 'mike',
        last_name: 'paul',
        email: 'mikepaul@gmail.com',
        phone_number: '08165748911',
        services: 'Hot Stone, Sport, Swedish Massage',
        how_many_clients_taken: 12,
        hot_stone_massage_fee: '7000/hr',
        sport_massage_fee: '2000/hr',
        swedish_massage_fee: '3000/hr'
      }
      return req
    }
  }
}
</script>

<style></style>
