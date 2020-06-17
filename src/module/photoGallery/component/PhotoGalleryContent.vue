<template>
  <div class="photo-gallery-content">
    <photo-gallery-content-image
      v-for="(image, index) in images"
      :key="index"
      :src="image.src"
      :title="image.title"
      alt="random image"
    />
  </div>
</template>

<script>
import PhotoGalleryContentImage from './PhotoGalleryContentImage.vue'
export default {
  name: 'PhotoGalleryContent',
  components: { PhotoGalleryContentImage },
  props: {
    images: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
  .photo-gallery-content {
    display: grid;
    grid-gap: 16px;

    @media (min-width: 650px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>
