<template>
  <div>
    <div>
      <div>
        <form
          class="flex justify-between bg-white shadow-md rounded px-4 py-4 mb-4"
          @submit.prevent="loadBrews"
        >
          <input
            type="text"
            v-model="searchTerm"
            placeholder="Search brews..."
            class="w-full"
          />
          <button
            type="submit"
            class="bg-blue-500 hover:bg-blue-700 text-white py-1 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Search
          </button>
        </form>
      </div>

      <h1 class="text-center text-xl">Brew directory</h1>
      <div class="my-4">
        <brew-item v-for="brew in brews" v-bind:key="brew.id" :brew="brew" />
      </div>
    </div>

    <div>
      <button
        @click="previousPage"
        class="bg-red-500 hover:bg-red-700 text-white py-1 px-4 rounded focus:outline-none focus:shadow-outline"
        :class="[pageNumber <= 1 ? 'opacity-50 cursor-not-allowed' : '']"
      >
        Previous Page
      </button>
      <button
        @click="nextPage"
        class="bg-red-500 hover:bg-red-700 text-white py-1 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Next Page
      </button>
    </div>
  </div>
</template>

<script>
import BrewItem from '../../components/BrewItem'

export default {
  components: {
    'brew-item': BrewItem
  },
  data() {
    return {
      brews: [],
      searchTerm: '',
      pageNumber: 1
    }
  },
  async created() {
    await this.loadBrews()
  },
  methods: {
    previousPage() {
      if (this.pageNumber > 1) {
        this.pageNumber--
      }
      this.loadBrews()
    },
    nextPage() {
      this.pageNumber++
      this.loadBrews()
    },
    async loadBrews() {
      let url = `https://api.punkapi.com/v2/beers?page=${this.pageNumber}&per_page=20`
      if (this.searchTerm !== '') {
        this.pageNumber = 1
        url = `https://api.punkapi.com/v2/beers?page=${this.pageNumber}&per_page=20&beer_name=${this.searchTerm}`
      }
      try {
        const res = await fetch(url)
        const data = await res.json()
        this.brews = data
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style></style>
