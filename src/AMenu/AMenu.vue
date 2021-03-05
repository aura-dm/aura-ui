<template>
  <wrapper>
    <slot />
  </wrapper>
</template>

<script>
import { Wrapper } from './AMenu.styles';

export default {
  name: 'a-menu',
  components: {
    Wrapper,
  },
};
</script>
