<template>
  <wrapper-element ref="wrapper"></wrapper-element>
</template>

<script>
import ResizeObserver from 'resize-observer-polyfill';
import { WrapperElement } from './AResizable.styles';

export default {
  name: 'a-resizable',
  components: { WrapperElement },
  mounted() {
    const elWrapper = this.$refs.wrapper.$el;
    const { width, height } = elWrapper.getBoundingClientRect();

    this.$emit('resize', { height, width });

    const resizeHandler = (entries, observer) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;

        this.$emit('resize', { height, width });
      }
    };

    const observer = new ResizeObserver(resizeHandler);

    observer.observe(elWrapper);
  },
};
</script>
