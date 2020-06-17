<template>
  <default-layout>
    <h1>Photo Fetcher</h1>
    <photo-gallery />
  </default-layout>
</template>

<script>
import DefaultLayout from '../layouts/DefaultLayout.vue'
import PhotoGallery from '../module/photoGallery/component/PhotoGallery.vue'
export default {
  name: 'Home.vue',
  components: { PhotoGallery, DefaultLayout }
}
</script>

<style scoped>

</style>
