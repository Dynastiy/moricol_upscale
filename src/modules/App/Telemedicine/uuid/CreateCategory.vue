<template>
    <div class="w-9/12 mx-auto bg-gray-50 py-8 rounded-lg px-12">
      <h4 class="text-center font-semibold text-xl mb-4">Add New Category</h4>
      <vForm @submit="onSubmit" v-slot="{ meta }" class="flex flex-col gap-3 mt-4">
        <div>
          <label for="">Name of Massage</label>
          <Field name="name" type="text" class="input" rules="required"> </Field>
          <ErrorMessage name="name" class="text-xs text-red-500 text-semibold"></ErrorMessage>
        </div>
  
        <vDrop />

  
        <div>
          <label for="">Persons involved in category</label>
          <Field name="functionality" class="input" as="textarea" cols="12" rows="4" rules="required">
          </Field>
          <ErrorMessage
            name="functionality"
            class="text-xs text-red-500 text-semibold"
          ></ErrorMessage>
        </div>
  
        <div class="mt-3 text-center">
          <button
            class="w-full btn-brand flex items-center justify-center gap-2"
            :disabled="isLoading || !meta.valid"
            :class="[
              isLoading
                ? 'bg-gray-400 text-gray-700'
                : !meta.valid
                  ? 'bg-gray-400 text-gray-700'
                  : 'btn-brand'
            ]"
          >
            <span class="flex justify-center" v-if="isLoading">
              <icon icon="line-md:loading-alt-loop" class="text-[20px]" />
            </span>
            <span> APPLY </span>
          </button>
        </div>
      </vForm>
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
  
    methods: {
      onSubmit(values) {
        console.log(values)
      }
    },
  
    computed: {}
  }
  </script>
  
  <style></style>
  