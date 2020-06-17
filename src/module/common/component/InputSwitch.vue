<template>
  <div>
    <label>
      <input type="checkbox" @change="onChange"/>
      <span class="switch-wrapper">
        <icon icon="times" class="ico ico-times" />
        <icon icon="check" class="ico ico-check" />
        <span class="switch"></span>
      </span>
    </label>
    {{ label }}
  </div>
</template>

<script>
export default {
  name: 'InputSwitch',
  props: {
    label: {
      type: String,
      default: ''
    }
  },
  methods: {
    onChange (e) {
      this.$emit('change', e)
    }
  }
}
</script>

<style scoped lang="scss">
  @import 'src/assets/scss/colors.scss';
  @import 'src/assets/scss/mixins.scss';

  /* the label-width cannot be lower than the label-height */
  $label-width: 40px;
  $label-height: 20px;
  $switch-margin: 4px;
  $switch-size: $label-height - $switch-margin;

  label {
    margin-right: 10px;
    position: relative;
    display: inline-block;
    width: $label-width;
    height: $label-height;

    .ico {
      $ico-size: $switch-size * 0.75;
      $ico-margin: $switch-margin;

      width: $ico-size;
      height: $ico-size;
      @include absolute-stretch;
      margin: auto 0;

      &.ico-times {
        left: auto;
        right: $ico-margin;
        color: lighten($color-secondary, 20%);
      }

      &.ico-check {
        right: auto;
        left: $ico-margin;
        color: white;
      }
    }

    input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    .switch-wrapper {
      $transition: 0.3s ease;

      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: $color-secondary;
      transition: background-color $transition;
      border-radius: $label-height;

      .switch {
        position: absolute;
        content: "";
        height: $switch-size;
        width: $switch-size;
        left: $switch-margin / 2;
        bottom: 0;
        top: 0;
        margin: auto 0;
        background-color: white;
        transition: left $transition, margin-left $transition;
        border-radius: 50%;
      }
    }

    input:checked + .switch-wrapper {
      background-color: $color-primary;

      .switch {
        left: 100%;
        margin-left: - $switch-size - $switch-margin / 2
      }
    }
  }
</style>
