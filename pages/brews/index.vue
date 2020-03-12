<template>
  <div>
    <div class="flex justify-end items-center">
      <nuxt-link
        to="/brews/new"
        class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white my-2 py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >Add new brew</nuxt-link
      >
    </div>
    <brew-list
      :brews="brews"
      :pageHeader="pageHeader"
      :listType="1"
    ></brew-list>
  </div>
</template>

<script>
import BrewList from '../../components/BrewList'

export default {
  components: {
    'brew-list': BrewList
  },
  data() {
    return {
      pageHeader: 'My Brewz'
    }
  },
  computed: {
    brews() {
      return this.$store.state.brews
    }
  },
  methods: {}
}
</script>

<style></style>
