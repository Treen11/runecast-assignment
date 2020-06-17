<template>
  <div class="layout default-layout">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout'
}
</script>

<style scoped>
  .layout {
    max-width: 750px;
    margin: 0 auto;
  }
</style>
