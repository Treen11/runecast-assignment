<template>
  <div class="photo-gallery-header">
    <input-switch label="Make photos grayscale" @change="onGrayscaleSwitchChange" />
    <btn-primary text="Fetch New Photos" @click="onFetchButtonClick" />
  </div>
</template>

<script>
import InputSwitch from '../../common/component/InputSwitch.vue'
import BtnPrimary from '../../common/component/BtnPrimary.vue'
export default {
  name: 'PhotoGalleryHeader',
  components: { BtnPrimary, InputSwitch },
  methods: {
    onFetchButtonClick () {
      this.$emit('fetch-button-clicked')
    },
    onGrayscaleSwitchChange (e) {
      this.$emit('grayscale-switch-changed', e.target.checked)
    }
  }
}
</script>

<style scoped>
  .photo-gallery-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
