<template>
  <div class="w-full max-w-xs mx-auto mt-6">
    <h1 class="text-center p-4">Add brew to your collection.</h1>
    <form
      @submit.prevent="addBrew"
      class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <label class="block text-gray-700 text-sm font-bold mb-2">
        Brew Name
      </label>
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        v-model="name"
        placeholder="Your brew..."
      />
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Tagline
      </label>
      <textarea
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        v-model="tagline"
        placeholder="Tagline..."
      />

      <button
        type="submit"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Add brew
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      tagline: ''
    }
  },
  methods: {
    addBrew() {
      const brew = { name: this.name, tagline: this.tagline }
      this.$store.commit('addBrew', brew)
      this.name = ''
      this.tagline = ''
    }
  }
}
</script>

<style></style>
