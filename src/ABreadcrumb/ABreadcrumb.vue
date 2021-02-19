<template>
  <wrapper v-bind="$props">
    <slot />
  </wrapper>
</template>

<script>
import { Wrapper } from './ABreadcrumb.styles';

export default {
  name: 'ABreadcrumb',
  components: {
    Wrapper,
  },
  props: {
    theme: {
      default() {
        return {
          breadcrumb: {
            color: '#333333',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontSize: '1rem',
            fontWeight: 600,
            lineHeight: '1.2rem',
          },
        };
      },
      type: Object,
    },
  },
};
</script>
