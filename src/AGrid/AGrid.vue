<template>
  <div class="wrapper">
    <a-loading v-if="isContent" />
    <div class="grid" v-else :class="breakpoints">
      <a-resizable @resize="onResize" />
      <slot />
    </div>
  </div>
</template>

<script>
import ALoading from '../ALoading';
import AResizable from '../utils/AResizable';

export default {
  name: 'a-grid',
  components: {
    ALoading,
    AResizable,
  },
  computed: {
    isContent() {
      return this.$slots.default === undefined;
    },
  },
  data() {
    return {
      breakpoints: [],
    };
  },
  methods: {
    onResize({ width }) {
      console.log(width);
      let classes = [];

      if (width > 400) {
        classes.push('sm');
      }

      if (width > 670) {
        classes.push('md');
      }

      if (width > 990) {
        classes.push('lg');
      }

      if (width > 990) {
        classes.push('xl');
      }

      this.breakpoints = classes;
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  height: 100%;
}

.grid {
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 20px;

  &.sm {
    column-gap: 20px;
    grid-template-columns: 1fr 1fr;
  }

  &.md {
    column-gap: 20px;
    grid-template-columns: 1fr 1fr 1fr;
  }

  &.lg,
  &.xl {
    column-gap: 30px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    row-gap: 30px;
  }
}
</style>
