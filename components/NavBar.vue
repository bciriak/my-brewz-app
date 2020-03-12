<template>
  <div class="flex justify-between py-4">
    <div class="">MY BREWZ APP</div>
    <ul class="flex">
      <li class="mr-6">
        <nuxt-link to="/brews" class="link">
          My Brewz
        </nuxt-link>
      </li>
      <li class="mr-6">
        <nuxt-link to="/brews/directory" class="link">
          Brew directory
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style lang="postcss">
.link {
  @apply text-blue-500;
}
.link:hover {
  @apply text-blue-800;
}
</style>
