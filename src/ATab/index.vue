<template>
  <wrapper :class="{ 'is-active': isActive }">
    {{ label }}
  </wrapper>
</template>

<script>
import { Wrapper } from './ATab.styles';

export default {
  name: 'a-tab',
  components: {
    Wrapper,
  },
  props: {
    isActive: {
      default: false,
      type: Boolean,
    },
    label: {
      type: String,
    },
  },
};
</script>
