<template>
  <div
    class="p-1 flex items-center justify-between hover:bg-gray-500 my-1"
    :class="[brew.id % 2 === 0 ? 'bg-white' : 'bg-gray-200']"
  >
    <h4>
      {{ brew.name }} -
      <small>{{ brew.tagline }}</small>
      ( {{ brew.abv }} % )
    </h4>

    <div>
      <template v-if="listType === 1">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white px-2 rounded focus:outline-none focus:shadow-outline"
        >
          <nuxt-link :to="`/brews/${brew.id}`">
            <small>Detail</small>
          </nuxt-link>
        </button>
        <button
          @click="deleteBrew(brew.id)"
          class="bg-red-500 hover:bg-red-700 text-white px-2 rounded focus:outline-none focus:shadow-outline"
        >
          <small>Delete</small>
        </button>
      </template>
      <template v-else>
        <button
          class="bg-teal-500 hover:bg-teal-700 text-white px-2 rounded focus:outline-none focus:shadow-outline"
          @click="addBrew(brew)"
        >
          <small>Add to collection</small>
        </button>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BrewItem',
  props: ['brew', 'listType'],
  methods: {
    addBrew(brew) {
      const newBrew = { name: brew.name, tagline: brew.tagline }
      this.$store.commit('addBrew', newBrew)
      this.name = ''
      this.tagline = ''
    },
    deleteBrew(id) {
      this.$store.commit('deleteBrew', { id })
    }
  }
}
</script>

<style></style>
