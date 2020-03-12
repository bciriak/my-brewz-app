<template>
  <div>
    <h1>{{ brew.name }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // brew: null
    }
  },
  // created: () => {
  //   this.brew = this.$store.state.brews.find((brew) => brew.id === this.$route.params.id)
  // }
  computed: {
    brew() {
      // return this.$store.state.brews.filter((brew) => brew.id !== this.$route.params.id)[0]
      return this.$store.state.brews.find(
        ({ id }) => id.toString() === this.$route.params.id.toString()
      )
    }
  }
}
</script>

<style>
.brew-card {
  width: 500px;
  margin: 0 auto;
}
</style>
