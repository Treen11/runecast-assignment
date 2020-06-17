<template>
  <div class="photo-gallery-content-image" :class="{ 'loaded': loaded }">
    <img :src="src" :alt="alt" @load="onImgLoad">
    <div class="photo-gallery-content-image-info">
      <div class="title">{{ title }}</div>
      <div class="src">{{ src }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PhotoGalleryContentImage',
  props: {
    src: {
      type: String,
      required: true
    },
    title: {
      type: String,
      default: ''
    },
    alt: {
      type: String,
      default: 'image'
    }
  },
  data () {
    return {
      loaded: false
    }
  },
  watch: {
    src () {
      this.loaded = false
    }
  },
  methods: {
    onImgLoad () {
      this.loaded = true
    }
  }
}
</script>

<style scoped lang="scss">
  @import 'src/assets/scss/colors.scss';

  .photo-gallery-content-image {
    position: relative;
    max-width: 500px;
    margin: 0 auto;

    .photo-gallery-content-image-info {
      opacity: 0;
      transition: opacity 0.15s ease;
      color: $color-gray-light;
      font-size: 14px;
      line-height: 1em;
      position: absolute;
      bottom: 0;
      right: 0;
      left: 0;
      padding: 20px;
      background: rgba(0,0,0,0.7);

      .title {
        color: white;
        font-size: 18px;
        margin-bottom: 10px;
        font-weight: 300;
      }

      .title,
      .url {
        height: 1em;
        overflow: hidden;
      }
    }

    &.loaded {
      .photo-gallery-content-image-info {
        opacity: 1;
      }
    }

    img {
      display: block;
      max-width: 100%;
    }
  }
</style>
