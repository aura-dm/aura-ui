<template>
  <wrapper>
    <a-loading v-if="isContent" />
    <grid v-else :class="breakpoints">
      <resizable @resize="onResize" />
      <slot />
    </grid>
  </wrapper>
</template>

<script>
import ALoading from '../ALoading';
import Resizable from '../utils/Resizable';
import { Grid, Wrapper } from './AGrid.styles';

export default {
  name: 'a-grid',
  components: {
    ALoading,
    Grid,
    Resizable,
    Wrapper,
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
