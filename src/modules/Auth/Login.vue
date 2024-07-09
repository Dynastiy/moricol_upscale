<template>
  <div>
    <img src="@/assets/brandImg/logo.png" alt="" class="w-44 mx-auto" />

    <vForm @submit="onSubmit" v-slot="{ meta }" class="flex flex-col gap-2 mt-4">
      <div>
        <label for="">Admin Email</label>
        <Field name="email" class="input" placeholder="jane@gmail.com" type="email" rules="email" />
        <ErrorMessage name="email" class="text-xs text-red-500 text-semibold"></ErrorMessage>
      </div>

      <div>
        <label for="">Password</label>
        <Field name="password" v-slot="{ field }" rules="required">
          <div class="input-field">
            <input
              :type="typePassword ? 'password' : 'text'"
              name="password"
              id="password"
              placeholder="Password"
              v-bind="field"
            />
            <span class="password-iccon" role="button" @click="typePassword = !typePassword">
              <icon
                :icon="typePassword ? 'ph:eye-closed' : 'pepicons-pencil:eye-closed-off'"
                class="form-icon"
              />
            </span>
          </div>
        </Field>
        <ErrorMessage name="password" class="text-xs text-red-500 text-semibold"></ErrorMessage>
      </div>

      <span class="block text-right text-primary-500 text-[14px] font-semibold"
        >Forgot Password?</span
      >

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
          <span> Login </span>
        </button>
      </div>
    </vForm>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      typePassword: false
    }
  },

  methods: {
    onSubmit(values) {
        console.log(values);
        this.$router.push(`/dashboard`)
    }
  }
}
</script>

<style></style>
