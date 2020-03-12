<template>
  <div>
    <h1 class="text-center text-xl">{{ pageHeader }}</h1>
    <div class="my-4">
      <brew-item
        v-for="brew in brews"
        v-bind:key="brew.id"
        :brew="brew"
        :listType="listType"
      />
    </div>
  </div>
</template>

<script>
import BrewItem from './BrewItem'
export default {
  components: {
    'brew-item': BrewItem
  },
  name: 'BrewList',
  props: ['brews', 'pageHeader', 'listType']
}
</script>

<style></style>
