<template>
  <div ref="main" class="resizable"></div>
</template>

<script>
import ResizeObserver from 'resize-observer-polyfill';

export default {
  name: 'resizable',
  mounted() {
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

<style scoped>
.resizable {
  height: 100%;
  pointer-events: none;
  position: absolute;
  width: 100%;
}
</style>
