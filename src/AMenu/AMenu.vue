<template>
  <div class="wrapper">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'a-menu',
};
</script>

<style lang="scss" scoped>
.wrapper {
  flex-shrink: 0;
  width: 100%;
}
</style>
