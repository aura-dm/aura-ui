<template>
  <wrapper>
    <a-loading v-if="isContent" />
    <grid v-else :class="breakpoints" :columns="columns" :gap="gap">
      <a-resizable @resize="onResize" />
      <slot />
    </grid>
  </wrapper>
</template>

<script>
import ALoading from '../ALoading';
import AResizable from '../utils/AResizable';
import { Grid, Wrapper } from './AGrid.styles';

export default {
  name: 'a-grid',
  components: {
    ALoading,
    AResizable,
    Grid,
    Wrapper,
  },
  computed: {
    isContent() {
      return this.$slots.default === undefined;
    },
  },
  props: {
    columns: {
      default() {
        return {
          xs: '1fr',
          sm: '1fr 1fr',
          md: '1fr 1fr 1fr',
          lg: '1fr 1fr 1fr 1fr',
          xl: '1fr 1fr 1fr 1fr',
        };
      },
      type: Object,
    },
    gap: {
      default() {
        return {
          xs: '20px',
          sm: '20px',
          md: '20px',
          lg: '30px',
          xl: '30px',
        };
      },
      type: Object,
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
