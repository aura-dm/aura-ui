<template>
  <wrapper-element ref="main"></wrapper-element>
</template>

<script>
import ResizeObserver from 'resize-observer-polyfill';
import { WrapperElement } from './AResizable.styles';

export default {
  name: 'resizable',
  components: { WrapperElement },
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
