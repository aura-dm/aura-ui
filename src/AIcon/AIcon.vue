<template>
  <svg class="wrapper" :height="height" viewBox="0 0 24 24" :width="width">
    <slot></slot>
  </svg>
</template>

<script>
export default {
  name: 'a-icon',
  props: {
    height: {
      default: '20',
      type: String,
    },
    width: {
      default: '20',
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  fill: inherit;
  flex-shrink: 0;
}
</style>
