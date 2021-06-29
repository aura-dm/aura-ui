<template>
  <typography :as="component" :variant="variant"><slot /></typography>
</template>

<script>
import { Typography } from './ATypography.styles';

export default {
  name: 'a-typography',
  components: {
    Typography,
  },
  props: {
    component: {
      default() {
        return 'p';
      },
      type: String,
    },
    variant: {
      default() {
        return 'p';
      },
      type: String,
    },
  },
};
</script>
