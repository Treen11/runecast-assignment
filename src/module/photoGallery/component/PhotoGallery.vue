<template>
  <div class="photo-gallery">
    <photo-gallery-header
      class="photo-gallery-header"
      @grayscale-switch-changed="setGrayscale"
      @fetch-button-clicked="getNewPhotos"
    />
    <photo-gallery-content
      class="photo-gallery-content"
      :images="images"
      :class="{ 'grayscale': grayscale }"
    />
  </div>
</template>

<script>
import PhotoGalleryHeader from './PhotoGalleryHeader.vue'
import PhotoGalleryContent from './PhotoGalleryContent.vue'
import photoGalleryService from '../service/photoGalleryService.js'
export default {
  name: 'PhotoGalleryComponent',
  components: { PhotoGalleryContent, PhotoGalleryHeader },
  data () {
    return {
      images: [],
      grayscale: false
    }
  },
  methods: {
    async getNewPhotos () {
      try {
        this.images = await photoGalleryService.getNewPhotos()
      } catch (err) {
        alert('failed to retrieve photos')
      }
    },
    setGrayscale (val) {
      this.grayscale = val
    }
  },
  created () {
    this.getNewPhotos()
  }
}
</script>

<style scoped lang="scss">
  .photo-gallery-header {
    margin-bottom: 20px;
  }

  .photo-gallery-content {
    transition: filter 0.3s ease;

    &.grayscale {
      filter: grayscale(1);
    }
  }
</style>
