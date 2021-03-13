<template>
  <div class="wrapper" ref="main"></div>
</template>

<script>
import ResizeObserver from 'resize-observer-polyfill';

export default {
  name: 'a-resizable',
  mounted() {
    console.log(this.$refs);
    const { width, height } = this.$refs.main.getBoundingClientRect();

    this.$emit('resize', { height, width });

    const resizeHandler = (entries, observer) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;

        this.$emit('resize', { height, width });
      }
    };

    const observer = new ResizeObserver(resizeHandler);

    observer.observe(this.$refs.main);
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  height: 100%;
  pointer-events: none;
  position: absolute;
  width: 100%;
}
</style>
