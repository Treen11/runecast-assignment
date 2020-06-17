<template>
  <button type="button" @click="onBtnClick">{{ text }}</button>
</template>

<script>
export default {
  name: 'BtnPrimary',
  props: {
    text: {
      type: String,
      default: ''
    }
  },
  methods: {
    onBtnClick (e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style scoped lang="scss">
  @import 'src/assets/scss/colors.scss';

  button {
    background: $color-primary;
    color: white;
    padding: 9px 12px;
    border-radius: 3px;
    border: none;
    transition: background-color 0.3s ease;

    &:hover {
      background: lighten($color-primary, 10%);
      cursor: pointer;
    }
  }

</style>
